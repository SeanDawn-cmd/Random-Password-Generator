const generateBtnEl = document.querySelector(".generate-btn");
const inputEl = document.querySelector(".input");
const copyBtnEl = document.querySelector(".fa-regular");

generateBtnEl.addEventListener("click", () => {
  createPassword();
});

copyBtnEl.addEventListener("click", () => {
  copyPassword();
});

function createPassword() {
  // Create a list of characters that should be included in the desired password
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|,.<>/?`~";

  // How long should the password be?
  const passwordLength = 14;

  // Password should be stored in a string so we can see it
  let password = "";

  // For each character in the password, lets choose a random index everytime and lets use the letter/symbol or number in that position
  for (let i = 0; i < passwordLength; i++) {
    // Pick a random index that represents a number/symbol or letter in the chars
    // So we are always in range multiply it by the length of chars in the string
    // Round it off to the nearest whole number
    const randomNum = Math.floor(Math.random() * chars.length);

    // Store use the number as an index in the chars and slice out onlly 1 letter using the substring method
    password += chars.substring(randomNum, randomNum + 1);
  }
  // Show the password in the input component
  inputEl.value = password;
}

function copyPassword() {
  inputEl.select();
  // For mobile devices
  inputEl.setSelectionRange(0, 9999);

  navigator.clipboard.writeText(inputEl.value);
}
