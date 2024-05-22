// import nodemailer from 'nodemailer';
// import "dotenv/config";

// const {EMAIL, EMAIL_PASSWORD} = process.env;

// const nodemailerConfig = {
//     host: "smtp.ukr.net",
//     port: 465,
//     secure: true,
//     auth: {
//         user: EMAIL,
//         pass: EMAIL_PASSWORD,
//     }
// }

// const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//     from: EMAIL,
//     to: "okristin92@gmail.com",
//     subject:"test mail",
//     html:"<strong>test mail</strong>",
// }

// transport.sendMail(email)
//     .then(()=>console.log("succes"))
//     .catch(error=>console.log(error.message))




import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const { EMAIL, EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
    host: "smtp.ukr.net",
    port: 465,
    secure: true,
    auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD,
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/send', (req, res) => {
    const { user_name, user_contact, user_request } = req.body;

    const mailOptions = {
        from: EMAIL,
        to: "okristin92@gmail.com",
        subject: "New Form Submission",
        html: `<strong>Name:</strong> ${user_name}<br>
               <strong>Contact:</strong> ${user_contact}<br>
               <strong>Message:</strong><br>${user_request}`,
    };

    transporter.sendMail(mailOptions)
        .then(() => res.send('Ваше повідомлення успішно відправлено.'))
        .catch(error => res.status(500).send(error.message));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// import express from 'express';
// import nodemailer from 'nodemailer';
// import "dotenv/config";

// const app = express();
// const port = process.env.PORT || 3000;

// const { EMAIL, EMAIL_PASSWORD } = process.env;

// // Налаштовуємо Nodemailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: EMAIL,
//     pass: EMAIL_PASSWORD,
//   },
// });

// // Додаємо middleware для обробки даних форми
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Вказуємо статичну папку для файлів HTML, CSS, JS
// app.use(express.static('public'));

// // Налаштовуємо маршрут для обробки POST запитів з форми
// app.post('/send', (req, res) => {
//   const { user_name, user_contact, user_request } = req.body;

//   const mailOptions = {
//     from: EMAIL,
//     to: "okristin92@gmail.com",
//     subject: "New Form Submission",
//     html: `<p>Name: ${user_name}</p><p>Contact: ${user_contact}</p><p>Message: ${user_request}</p>`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).send('Email sent successfully');
//     }
//   });
// });

// // Запуск сервера
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });