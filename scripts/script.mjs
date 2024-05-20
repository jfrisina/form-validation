// REGISTRATION FORM ------------------------------------------------------

// username must contain at least 2 characters 
function usernameValidation() {
    let username = document.getElementsByName("username");
    let uniqueCharArray = [];

    for (i = 0; i < username.length; i++) {
        let char = username[i];
        if (uniqueCharArray.indexOf(char) === -1) {
            uniqueCharArray.push(char);
        }
    }

    if (uniqueCharArray.length < 2) {
        return false;
    } else {
        return true;
    }
}
usernameValidation();


// email must not be from the domain "example.com"
let userEmail = document.getElementsByName("email");
let emailRegex = /^[a-zA-Z0-9]*@example.com/;

if (userEmail === emailRegex) {
    alert("You must enter a valid email address.")
}


// password must have at least one of the following: uppercase, lowercase, number, and special character
function() {
    let password = document.getElementsByName("password");
    let uppercase = /[A-Z]/;
    let lowercase = /[a-z]/;
    let number = /[0-9]/;
    let specialChar = /[!@#$%^&*]/;

// password cannot contain "password" or the username, and the password must match the second time entering password
    if (password === passwordCheck || password.indexOf(username) === -1) {
        return false;
    } else {
        return true;
    }

}

// accept terms and conditions
let checkbox = document.getElementsByName("terms");
checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        continue;
    } else {
        console.log("Please accept the terms and conditions before submitting this form.");
    }
});

// store username, email, and password

// clear all form fields after successful submission

// show success message

// usernames must be unique


// LOGIN FORM ------------------------------------------------------

// check if username already exists

// check if password is correct

// clear all form fields and show a success message if all validation is successful

// modify the success message to indicate when "keep me logged in" is checked

