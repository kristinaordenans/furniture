import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

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

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

app.post('/send', (req, res) => {
    const { user_name, user_contact, user_request } = req.body;

    // console.log("user_name:", user_name);
    // console.log("user_contact:", user_contact);
    // console.log("user_request:", user_request);

    if (!user_name || !user_contact || !user_request) {
        return res.status(400).send('All fields are required.');
    }

    const mailOptions = {
        from: EMAIL,
        to: "comfortsafetykiev@ukr.net",
        subject: "New Form Submission",
        html: `<strong>Name:</strong> ${user_name}<br>
               <strong>Contact:</strong> ${user_contact}<br>
               <strong>Message:</strong><br>${user_request}`,
    };

    transporter.sendMail(mailOptions)
        .then(() => res.send('Ваше повідомлення успішно відправлено.'))
        .catch(error => {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email.');
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
