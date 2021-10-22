import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  data: {
    success: boolean;
  };
};

const sleep = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 350);
  });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method } = req;
  const { captcha } = body;

  if (method === 'POST') {
    if (!captcha) {
      return res.status(422).json({
        message: 'Unproccesable request, please provide the required fields',
      });
    }

    try {
      const response: Data = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        null,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
        }
      );

      if (response.data.success) {
        await sleep();
        return res.status(200).send('OK');
      }

      return res.status(422).json({
        message: 'Unproccesable request, Invalid captcha code',
      });
    } catch {
      return res.status(422).json({ message: 'Something went wrong' });
    }
  }
  return res.status(404).send('Not found');
};
