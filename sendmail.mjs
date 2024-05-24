// import express from 'express';
// import bodyParser from 'body-parser';
// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;
// const { EMAIL, EMAIL_PASSWORD } = process.env;

// const nodemailerConfig = {
//     host: "smtp.ukr.net",
//     port: 465,
//     secure: true,
//     auth: {
//         user: EMAIL,
//         pass: EMAIL_PASSWORD,
//     }
// };

// const transporter = nodemailer.createTransport(nodemailerConfig);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// app.post('/send', (req, res) => {
//     const { user_name, user_contact, user_request } = req.body;

//     const mailOptions = {
//         from: EMAIL,
//         to: "okristin92@gmail.com",
//         subject: "New Form Submission",
//         html: `<strong>Name:</strong> ${user_name}<br>
//                <strong>Contact:</strong> ${user_contact}<br>
//                <strong>Message:</strong><br>${user_request}`,
//     };

//     transporter.sendMail(mailOptions)
//         .then(() => res.send('Ваше повідомлення успішно відправлено.'))
//         .catch(error => res.status(500).send(error.message));
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
