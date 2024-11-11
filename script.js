function sendOTP() {
  const mobileNumber = document.getElementById('mobile').value;

  if (mobileNumber && mobileNumber.length === 10) {
      alert('OTP has been sent to your mobile number.');
  } else {
      alert('Please enter a valid mobile number.');
  }
}

document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Registration successful!');
});
