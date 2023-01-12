// variables for charcaters used in password
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // "ABC" => ["A", "B", "C"]
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var numeric = "1234567890".split("");
var symbols = "!@#$%^&*()".split("");

// arrays and variables for concatanated password
var characterArray = [];
var answer = "";

// conditional statements and for loops for prompts
function generatePassword() {
  var passwordLength = prompt(
    "How long do you want your password to be?\n choose between 8-128 characters"
  );
  console.log("Password Length: " + passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Select within 8-128 characters");
    generatePassword();
  } else {
    if (confirm("Would you like uppercase characters in your password?")) {
      characterArray = characterArray.concat(upper);
    }
    if (confirm("Would you like lowercase characters in your password?")) {
      characterArray = characterArray.concat(lower);
    }
    if (confirm("Would you like numerics?")) {
      characterArray = characterArray.concat(numeric);
    }
    if (confirm("Would you like symbols?")) {
      characterArray = characterArray.concat(symbols);
    }
    if (characterArray.length == 0) {
      window.alert("Select at least 1 character type to create password!");
      generatePassword();
    } else {
      for (let i = 0; i < passwordLength; i++) {
        let rando = Math.floor(Math.random() * characterArray.length); // selects characters randomly
        answer += characterArray[rando];
      }
      return answer; //returns password in text box
    }
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
