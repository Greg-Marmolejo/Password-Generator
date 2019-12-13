//Declare Variables, create an empty array, and create different arrays for the types of characters to be used.

//Prompt user for these characteristics of their password
// Because this is a prompt and can be anything the user chooses, the confirm that he length is between 8 and 128 characters)

//   Confirm if user wants Special characters ([see examples](https://www.owasp.org/index.php/Password_special_characters))

    // if yes, then add special characters arrray to the empty array.
    
    // randomly generate a special character and put it in a "required" array.

//  Confirm if user wants Numeric characters
    // if yes, then add number arrray to the empty array.
    
    // randomly generate a number and put it in a "required" array.

//   Confirm if user wants lowercase characters
    // if yes, then add number arrray to the empty array.
    
    // randomly generate a number and put it in a "required" array.


//   * Uppercase characters

//Confirm that at least one character type is selected.

// We now have all the variables needed to plug into the password generator.  Plug in variables.

// Password generator works with random number  generation and an array.  What's in the array depends on the values returned in the user prompts. 

// To ensure all required characters are used, characters are substitued from the required array with the following loop.
// password = ["a","b","9","5"]
// required = ["*","Z"]

// for (var i= 0; i<required.length; i++){
//     password[i] = required[i];
// }

// Write password into the text area labelled "Your Secure Password" 