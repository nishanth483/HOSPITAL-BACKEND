
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: ['https://hospitalbackend-gules.vercel.app', 'https://elitedentalcare.org.in'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Enable pre-flight for all routes

app.use(bodyParser.json());

app.post('/send', async (req, res) => {
  const { name, email, message, toEmail, phone } = req.body;
  console.log("req.body", req.body);

  const sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Replace with your environment variable
      pass: process.env.EMAIL_PASS  // Replace with your environment variable
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Use environment variable for sender email
    to: toEmail,
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone : ${phone}`
  };

  try {
    await sender.sendMail(mailOptions);
    console.log('Mail sent successfully');
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
