var isFormValid = true;

//VALIDATE CONTACT FORM

document.getElementById("sendRequest").addEventListener("click", function() {

  var firstName = document.getElementById('firstName').value;
  var isFirstNameValid = validateFirstName(firstName);

  var lastName = document.getElementById('lastName').value;
  var isLastNameValid = validateLastName(lastName);

  var emailAddress = document.getElementById('email').value;
  var isEmailAddressValid = validateEmail(emailAddress);

  var phoneNumber = document.getElementById('phone').value;
  var isPhoneNumberValid = validatePhoneNumber(phoneNumber);

  var subject = document.getElementById('subject').value;
  var isSubjectValid = validateSubject(subject);

  if (!isFirstNameValid) {
    document.getElementById('firstNameError').style.display = "block";
    isFormValid = false;
  }

  if (!isLastNameValid) {
    document.getElementById('lastNameError').style.display = "block";
    isFormValid = false;
  }

  if (!isEmailAddressValid) {
    document.getElementById('emailError').style.display = "block";
    isFormValid = false;
  }

  if (!isPhoneNumberValid) {
    document.getElementById('phoneError').style.display = "block";
    isFormValid = false;
  }

  if (!isSubjectValid) {
    document.getElementById('subjectError').style.display = "block";
  }

});

document.getElementById('sendRequest').addEventListener("click", function(){
  if (isFormValid) {
    window.location.href = "contact.success.html";
  }
})

//FUNCTIONS CONTACT FORM

function validateFirstName(name) {
  if (name === "") {
    return false;
  } else {
    document.getElementById('firstNameError').style.display = "none";
    return true;
  }

}

function validateLastName(lastName) {
  if (lastName === "") {
    return false;
  } else {
    document.getElementById('lastNameError').style.display = "none";
    return true;
  }

}

function validatePhoneNumber(phoneNumber) {
  console.log(phoneNumber);
  var phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phoneNumber.match(phoneNumberRegex)) {
    document.getElementById('phoneError').style.display = "none";
    isFormValid = true;
    return true;
  } else {
    return false;
  }

}

function validateEmail(email) {
  var emailAddressRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailAddressRegex)) {
    document.getElementById('emailError').style.display = "none";
    isFormValid = true;
    return true;
  } else {
    return false;
  }
}


function validateSubject(subject) {
  if (subject === "") {
    return false;
  } else {
    document.getElementById('subjectError').style.display = "none";
    return true;
  }
}
