// DECLARING VARIABLES
const submitButton = document.getElementById("submit-button");
const fullNameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Regular expression for email
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// READY TO START CODING
function validateForm() {
  // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS)
  let data = {};
  let errors = [];

  // FULL NAME
  if (fullNameInput.value.trim() !== "") {
    data.fullName = fullNameInput.value.trim();
  } else {
    errors.push({ fn: "Full name is missing" });
  }

  // EMAIL
  if (emailInput.value.trim() !== "") {
    if (emailPattern.test(emailInput.value.trim())) {
      data.email = emailInput.value.trim();
    } else {
      errors.push({ em: "Email is invalid" });
    }
  } else {
    errors.push({ em: "Email is missing" });
  }

  // MESSAGE
  if (messageInput.value.trim() !== "") {
    data.message = messageInput.value.trim();
  } else {
    errors.push({ msg: "Message name is missing" });
  }

  // FEEDBACK/ERRORS
  if (errors.length > 0) {
    console.log("ERRORS");
    console.log(errors);
  } else {
    console.log("COLLECTED DATA");
    console.log(data);

    fullNameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
}

// Register your form to "click" event.
submitButton.addEventListener("click", validateForm);