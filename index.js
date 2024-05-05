// index.js

const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const app = express();
const port = process.env.PORT || 3000;

const https = require('https');

// index.js (continued)

const AWS = require('aws-sdk');

// Initialize AWS SDK

const ses = new AWS.SES();

app.use(express.json())

// Handle incoming email requests
app.post('/send-email', async (req, res) => {
  const { to, subject, message } = req.body;

  const params = {
    Destination: { ToAddresses: [to] },
    Message: {
      Body: { Text: { Data: message } },
      Subject: { Data: subject }
    },
    Source: 'Yourveriified EMail'
  };

  try {
    await ses.sendEmail(params).promise();
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});



app.listen(port, () => {
  console.log(`Notification service listening at http://localhost:${port}`);
});
