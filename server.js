// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware для обробки даних з форми
// app.use(bodyParser.urlencoded({ extended: true }));

// // Обслуговування статичних файлів
// app.use(express.static('public'));

// // Обробка GET запиту для кореневої URL-адреси
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });

// // Обробка POST запиту для відправки форми
// app.post('/send', (req, res) => {
//     const { user_name, user_contact, user_request } = req.body;

//     // Налаштування Nodemailer транспорту
//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.EMAIL_PASSWORD
//         }
//     });

//     // Опції для електронного листа
//     let mailOptions = {
//         from: user_contact,
//         to: process.env.RECIPIENT_EMAIL,
//         subject: 'New Form Submission',
//         text: `Name: ${user_name}\nContact: ${user_contact}\n\nMessage:\n${user_request}`
//     };

//     // Відправка електронного листа
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).send('Error occurred: ' + error.message);
//         }
//         res.send('Ваше повідомлення успішно відправлено.');
//     });
// });

// // Запуск сервера
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });