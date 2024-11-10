function sendOTP() {
    const mobile = document.getElementById('mobile').value;
    fetch('/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobile })
    }).then(response => {
      if (response.ok) {
        document.getElementById('otp-section').style.display = 'block';
      }
    });
  }
  
  function verifyOTP() {
    const mobile = document.getElementById('mobile').value;
    const otp = document.getElementById('otp').value;
    fetch('/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobile, otp })
    }).then(response => response.json())
      .then(data => {
        if (data.verified) {
          document.getElementById('submitButton').disabled = false;
          alert('OTP verified! You may now submit the form.');
        } else {
          alert('Invalid OTP');
        }
      });
  }
  