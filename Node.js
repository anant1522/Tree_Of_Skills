const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio'); // or Firebase for OTP
const app = express();
app.use(bodyParser.json());

// Mock data storage for demo purposes
let otpStorage = {};

app.post('/send-otp', (req, res) => {
  const { mobile } = req.body;
  const otp = Math.floor(1000 + Math.random() * 9000); // Generate 4-digit OTP
  otpStorage[mobile] = otp; // Store OTP temporarily
  // Send OTP to mobile number using Twilio or Firebase
  res.status(200).send({ message: 'OTP sent!' });
});

app.post('/verify-otp', (req, res) => {
  const { mobile, otp } = req.body;
  if (otpStorage[mobile] === parseInt(otp)) {
    delete otpStorage[mobile]; // Remove OTP once used
    res.status(200).send({ verified: true });
  } else {
    res.status(400).send({ verified: false, message: 'Invalid OTP' });
  }
});

app.post('/register', (req, res) => {
  const registrationData = req.body;
  // Save registrationData to the database
  res.status(201).send({ message: 'User registered successfully!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
