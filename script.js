//This sets the variable artDiv to div id="container"  (targets the id)
// var containerDiv = document.getElementById("container");

//Program begins when user clicks "Generate Password", prompt for the following
var generateEl = document.querySelector("#generate");

generateEl.addEventListener("click", function () {



    //Prompt user for length of their password. Confirm that the length is between 8 and 128 characters)
    var pwLength = prompt("Please specify a length for your password between 8 and 128 characters");

    while (!(pwLength >= 8 && pwLength <= 128)) {
        pwLength = prompt("Password must be between 8 and 128 characters.  Please re-enter");
    }

    //Create an empty array, and create different arrays for the types of characters to be used.
    var password = ""
    var requiredLength = 0
    var charList = new Array(pwLength);
    var required = new Array(requiredLength);
    var charListUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var charListLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var charListNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var charListSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "+"];

    // The password generator will work with random number generation using an array.  What's in the array depends on the values returned in the user prompts. 

    //   Confirm if user wants Special characters
    var confirmSpecial = confirm("Would you like to use special characters?");

    // if yes, then add special characters arrray to the empty array, randomly generate a special character, and put it in a "required" array.  
    if (confirmSpecial) {
        charList.push(charListSpecial);
        var specChar = charListSpecial[Math.floor(Math.random() * 10)];
        required.push(specChar);
        requiredLength = requiredLength + 1;
    }

    //  Confirm if user wants Numeric characters
var confirmNumber = confirm("Would you like to use numeric characters?");

// if yes, then add number arrray to the empty array, randomly generate a number, and put it in a "required" array.
if(confirmNumber) {
    charList.push(charListNumber);
    var numChar = charListNumber[Math.floor(Math.random() * 10)];
    required.push(numChar);
    requiredLength = requiredLength +1;
}

//   Confirm if user wants lowercase characters
var confirmLower = confirm("Would you like to use lowercase letters?");

// if yes, then add lowercase arrray to the empty array, randomly generate a lowercase letter, and put it in a "required" array.
if(confirmLower) {
    charList.push(charListLower);
    var lowChar = charListLower[Math.floor(Math.random() * 10)];
    required.push(lowChar);
    requiredLength = requiredLength +1;
}

//   Confirm if user wants uppercase characters
var confirmUpper = confirm("Would you like to use uppercase letters?");

// if yes, then add uppercase arrray to the empty array, randomly generate a uppercase letter, and put it in a "required" array.
if(confirmUpper) {
    charList.push(charListUpper);
    var upChar = charListUpper[Math.floor(Math.random() * 10)];
    required.push(upChar);
    requiredLength = requiredLength +1;
}

// We now have the array for the password generator.  
function generatePassword() {
    
    for (var i = 0; i < (pwLength-requiredLength); i++) {
        password += charList[Math.floor(Math.random() * charList.length)];
    }
    document.getElementById('passwordBox').value = password;
    }
    console.log(required);
    console.log(charList);

});