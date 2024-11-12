
function sendOtp() {
  const mobileNumber = document.getElementById("mobile").value;


  console.log("Sending OTP to:", mobileNumber);


  document.querySelector(".otp-input-group").style.display = "flex";
}


function verifyOtp() {
  const otp = document.getElementById("otp").value;


  console.log("Verifying OTP:", otp);


  alert("OTP verified successfully!");
}
