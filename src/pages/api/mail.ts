import type { NextApiRequest, NextApiResponse } from 'next';
import mail from '@sendgrid/mail';
import { MAIL } from 'utils/constants';

mail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export default (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(JSON.stringify(req.body));

  if (body !== '') {
    const message = `
   Imię: ${body.name}\r\n
   Email: ${body.email}\r\n
   Wiadomość: ${body.message}
  `;

    const data = {
      to: MAIL,
      from: 'formularz@mail.arsoldcar.pl',
      subject: 'Nowa wiadomość z formularza kontaktowego',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    };

    mail.send(data).then(() => res.status(200).json({ message: 'Ok' }));
  } else {
    res.status(400).json({ message: 'Empty body' });
  }
};
