const nameField = document.querySelector(".contact-container #fullname");
const emailField = document.querySelector(".contact-container #email");
const messageField = document.querySelector(".contact-container #message");
const sendBtn = document.querySelector(".contact-container .btn-container");
const errorMessage = document.querySelector(
  ".contact-container .error-message"
);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

sendBtn.addEventListener("click", (e) => {
  if (
    nameField.value.trim() === "" ||
    emailField.value.trim() === "" ||
    messageField.value.trim() === ""
  ) {
    e.preventDefault();
    errorMessage.textContent = "All fields are necessary";
  } else if (!emailRegex.test(emailField.value)) {
    e.preventDefault();
    errorMessage.textContent = "Please enter a valid email";
  } else {
    errorMessage.textContent = "";
  }
});

nameField.addEventListener("focus", () => {
  errorMessage.textContent = "";
});

emailField.addEventListener("focus", () => {
  errorMessage.textContent = "";
});

messageField.addEventListener("focus", () => {
  errorMessage.textContent = "";
});
