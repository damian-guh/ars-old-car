import type { NextApiRequest, NextApiResponse } from 'next';
import mail from '@sendgrid/mail';
import { MAIL } from 'utils/constants';
import axios from 'axios';

type Data = {
  data: {
    success: boolean;
  };
};

mail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method } = req;
  const { captcha, formValues } = body;

  if (
    !captcha ||
    !formValues.name ||
    !formValues.email ||
    !formValues.message
  ) {
    return res.status(422).json({
      message: 'Unproccesable request, please provide the required fields',
    });
  }
  const { name, email, phoneNumber, message } = formValues;

  if (method === 'POST') {
    try {
      const response: Data = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`
      );

      if (response.data.success) {
        const mailMessage = `
          Imię: ${name}\r\n
          Email: ${email}\r\n
          Number telefonu: ${!phoneNumber ? 'Niepodano' : phoneNumber}\r\n 
          Wiadomość: ${message}
        `;

        const mailData = {
          to: MAIL,
          from: 'formularz@mail.arsoldcar.pl',
          subject: 'Nowa wiadomość z formularza kontaktowego',
          text: mailMessage,
          html: mailMessage.replace(/\r\n/g, '<br>'),
        };
        return mail
          .send(mailData)
          .then(() => res.status(200).json({ message: 'Ok' }))
          .catch(() =>
            res.status(422).json({ message: 'Something went wrong' })
          );
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
