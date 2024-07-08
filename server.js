
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(cors({
    origin: ['http://localhost:3000'],
  }));
  
  app.use(cors())


app.post('/send', (req, res) => {
  const { name, email, message, toEmail } = req.body;
  console.log(name);
  console.log(email);
  console.log(message);
  console.log(toEmail);

  const sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nishanthnd63@gmail.com', // Replace with your email
      pass: 'zong jjdk vhof hauq'   // Replace with your app password
    }
  });

  const mailOptions = {
    from: "nishanthnd63@gmail.com",    // Replace with your email
    to: email,
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  sender.sendMail(mailOptions, function(error,info){
    if(error)
    {
  console.log(error);
    }
    else{
      console.log('Mail sent successfully'+ info.response);
    }
  });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  