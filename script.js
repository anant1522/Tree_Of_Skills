function validateMobileNumber(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value.length > 10) {
        input.value = input.value.slice(0, 10);
    }
}


function sendOtp() {
    const mobileNumber = document.getElementById("mobile").value;
    if (mobileNumber.length === 10) {
        console.log("Sending OTP to:", mobileNumber);
        alert("OTP sent successfully!");
        document.querySelector(".otp-input-group").style.display = "flex";
    } else {
        alert("Please enter a valid 10-digit mobile number.");
    }
}


function verifyOtp() {
    const otp = document.getElementById("otp").value;
    console.log("Verifying OTP:", otp);
    alert("OTP verified successfully!");
}


function redirectToCourse(event) {
    event.preventDefault(); 

    
    const form = document.getElementById("registration-form");
    if (form.checkValidity()) {
        
        window.location.href = "course-selection.html";
    } else {
        
        form.reportValidity();
    }
}


function selectAgeGroup(age) {
    document.querySelectorAll('.age-group-options button').forEach(button => {
        button.classList.remove('selected'); 
        if (button.textContent === age) {
            button.classList.add('selected'); 
        }
    });
}


function selectCourse(course) {
    document.querySelectorAll('.course-options button').forEach(button => {
        button.classList.remove('selected'); 
        if (button.textContent === course) {
            button.classList.add('selected'); 
        }
    });


    document.getElementById('course-details').style.display = 'block';
    document.getElementById('course-title').textContent = course;
}


