// Assignment code here

// variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//Functions

function generatePassword () {
  window.prompt("Please type in your password lenth. Password lenth can only be between 8 and 128 Characters.")
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
