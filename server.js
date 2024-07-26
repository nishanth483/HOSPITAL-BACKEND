
// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors');


// const app = express();
// const port = process.env.PORT || 5000;

// app.use(bodyParser.json());

// app.use(cors({
//     origin: ['http://localhost:3000','https://sampledentalcare.vercel.app/'],
//   }));
  
//   app.use(cors())


// app.post('/send', (req, res) => {
//   const { name, email, message, toEmail } = req.body;
//   console.log(name);
//   console.log(email);
//   console.log(message);
//   console.log(toEmail);

//   const sender = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'nishanthnd63@gmail.com', // Replace with your email
//       pass: 'zong jjdk vhof hauq'   // Replace with your app password
//     }
//   });

//   const mailOptions = {
//     from: "nishanthnd63@gmail.com",    // Replace with your email
//     to: email,
//     subject: 'Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//   };

//   sender.sendMail(mailOptions, function(error,info){
//     if(error)
//     {
//   console.log(error);
//     }
//     else{
//       console.log('Mail sent successfully'+ info.response);
//     }
//   });
// });


// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });
  


// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;

// // Configure CORS
// app.use(cors({
//     origin: ['http://localhost:3000', 'https://your-frontend-domain.vercel.app'], // Update with your frontend domain
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type']
// }));

// app.use(bodyParser.json());

// app.post('https://hospitalbackend-gules.vercel.app/send', (req, res) => {
//   const { name, email, message } = req.body;
//   console.log(name);
//   console.log(email);
//   console.log(message);
//  console.log(res)
//   const sender = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'nishanthnd63@gmail.com', // Replace with your environment variable
//       pass: 'zong jjdk vhof hauq',  // Replace with your environment variable
//     }
//   });

//   const mailOptions = {
//     from: 'nishanthnd63@gmail.com',    // Replace with your email
//     to: email,
//     subject: 'Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//   };

//   sender.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Mail sent successfully: ' + info.response);
//       res.status(200).send('Email sent successfully');
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;

// // Configure CORS
// app.use(cors({
//     origin: ['http://localhost:3000', 'https://hospitalbackend-gules.vercel.app', 'https://sampledentalcare.vercel.app'],
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type']
// }));

// app.use(bodyParser.json());

// app.options('*', cors()); // Enable pre-flight

// app.post('/send', async (req, res) => {
//   const { name, email, message } = req.body;
//   console.log(name);
//   console.log(email);
//   console.log(message);

//   const sender = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'nishanthnd63@gmail.com', // Replace with your environment variable
//       pass: 'zong jjdk vhof hauq',  // Replace with your environment variable
//     }
//   });

//   const mailOptions = {
//     from: 'nishanthnd63@gmail.com',    // Replace with your email
//     to: email,
//     subject: 'Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//   };

//   try {
//     await sender.sendMail(mailOptions);
//     console.log('Mail sent successfully');
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Error sending email');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;

// const corsOptions = {
//     origin: ['https://hospitalbackend-gules.vercel.app','https://sampledentalcare.vercel.app'],
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
//     optionsSuccessStatus: 200 // For legacy browser support
// };

// app.use(cors(corsOptions));
// app.options('*', cors(corsOptions)); // Enable pre-flight for all routes

// app.use(bodyParser.json());

// app.post('https://hospitalbackend-gules.vercel.app/send', async (req, res) => {
//   const { name, email, message } = req.body;
//   console.log("req.body",req.body);
//   console.log(name);
//   console.log(email);
//   console.log(message);

//   const sender = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'nishanthnd63@gmail.com', // Replace with your environment variable
//       pass: 'zong jjdk vhof hauq',  // Replace with your environment variable
//     }
//   });

//   const mailOptions = {
//     from: 'nishanthnd63@gmail.com',    // Replace with your email
//     to: email,
//     subject: 'Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//   };

//   try {
//     await sender.sendMail(mailOptions);
//     console.log('Mail sent successfully');
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Error sending email');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// const corsOptions = {
//     origin: ['https://hospitalbackend-gules.vercel.app', 'http://localhost:3000',],
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
//     optionsSuccessStatus: 200 // For legacy browser support
// };

// app.use(cors(corsOptions));
// app.options('*', cors(corsOptions)); // Enable pre-flight for all routes

// app.use(bodyParser.json());

// app.post('/send', async (req, res) => {
//   const { name, email, message, toEmail } = req.body;
//   console.log("req.body", req.body);


//   const sender = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER, // Replace with your environment variable
//       pass: process.env.EMAIL_PASS  // Replace with your environment variable
//     }
//   });

//   const mailOptions = {
//     from: 'nishanth1208199574@gmail.com', // Replace with your email
//     to: toEmail,
//     subject: 'Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//   };

//   try {
//     await sender.sendMail(mailOptions);
//     console.log('Mail sent successfully');
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Error sending email');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: ['https://hospitalbackend-gules.vercel.app','http://localhost:3000'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Enable pre-flight for all routes

app.use(bodyParser.json());

app.post('/send', async (req, res) => {
  const { name, email, message, toEmail } = req.body;
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
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
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
