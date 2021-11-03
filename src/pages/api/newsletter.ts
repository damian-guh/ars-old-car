import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  data: {
    success: boolean;
  };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method } = req;
  const { captcha, formValues } = body;
  const { email } = formValues;

  if (method === 'POST') {
    if (!captcha || !email) {
      return res.status(422).json({
        message: 'Unproccesable request, please provide the required fields',
      });
    }

    try {
      const response: Data = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`
      );

      if (response.data.success) {
        // const db = firebase.firestore();
        // try {
        //   await db
        //     .collection('users')
        //     .doc('allUsers')
        //     .update({
        //       emails: firebase.firestore.FieldValue.arrayUnion(email),
        //     });
        // } catch {
        //   throw new Error('DUPA');
        // }

        return res.status(200).json({ message: 'OK' });
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
