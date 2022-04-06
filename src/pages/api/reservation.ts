import type { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from 'firebase-admin/auth';
import nodemailer from 'nodemailer';
import dayjs from 'dayjs';
import app from '../../../firebase/admin';

const auth = getAuth(app);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { token, date, id, email, childrenAmount, adultAmount } = req.body;

  try {
    await auth.verifyIdToken(token);
  } catch (e) {
    return res.status(403).json({ message: 'Access denied!' });
  }

  const transporter = nodemailer.createTransport({
    port: Number(process.env.MAIL_PORT),
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL,
      pass: process.env.MAIL_PASS,
    },
    secure: true,
  });

  const reservationSuccessText = () => {
    const adultAmountText =
      adultAmount > 1 ? `${adultAmount} osób` : `jednej osoby`;
    const childrenAmountText = () => {
      if (childrenAmount === 1) return ` oraz jednego dziecka w wieku 4-6 lat.`;
      if (childrenAmount > 1)
        return ` oraz ${childrenAmount} dzieci w wieku 4-6 lat.`;
      return '.';
    };
    return `Miło nam poinformować,że zarezerwowałeś termin ${dayjs(date).format(
      'DD/MM/YYYY HH:mm'
    )} dla ${adultAmountText}${childrenAmountText()}`;
  };

  const mailData = {
    from: 'kontakt@arsoldcar.pl',
    to: email,
    subject: `Rezerwacja Ars Old Car – Muzeum Motoryzacji`,
    html: `<p>${reservationSuccessText()}</p><p>Twój numer rezerwacji to <strong>${id
      .toUpperCase()
      .slice(
        0,
        6
      )}</strong></p><strong>Przypominamy jednocześnie, że rezerwacja online nie jest biletem, umożliwia jedynie zakup biletu
            minimum 20 minut przed planowaną godziną wejścia. Po upływie tego
            czasu rezerwacja jest anulowana i wolne miejsca są kierowane do
            sprzedaży.</strong>`,
  };

  return new Promise((resolve) => {
    transporter.sendMail(mailData, (err) => {
      if (err) {
        return resolve(res.status(500).json({ message: err }));
      }
      return resolve(res.status(200).json({ message: 'ok' }));
    });
  });
};
