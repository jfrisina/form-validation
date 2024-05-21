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
function checkPassword(password) {
    const password = document.getElementsByName("password");
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const number = /[0-9]/;
    const specialChar = /[!@#$%^&*()_+=-;:'"/?.>,<`~]/;
    const passwordRegex = /password/i;

    if (!uppercase.test(password)) {
        return "Password must contain at least one uppercase letter."
    }

    if (!lowercaseRegex.test(password)) {
        return "Password must contain at least one lowercase letter."
    }

    if (!number.test(password)) {
        return "Password must contain at least one number."
    }
   if (!specialChar.test(password)) {
        return "Password must contain at least one special character."
   } 
};

// password cannot contain "password" or the username, and passwords must match
    if (password !=== passwordCheck || password.indexOf(username) === -1 || password === passwordRegex) {
        return false;
    } else {
        return true;
    };

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
function storeUserInfo(username, userEmail, password) {
    // lowercase username and email
    let usernameLower = username.toLowerCase();
    let userEmailLower = userEmail.toLowerCase();

    // create array to store user objects in 
    const userArray = [];
    let userInfo = {usernameLower, userEmailLower, password}
    userArray.push(userInfo);

    // usernames must be unique
    
    if (!localStorage.getItem(userInfo)) {
        return "Username is already taken.";
    }

    // push to local storage
    localStorage.setItem(userArray);

    // return confirmation
    return "User successfully added";

    // clear all form fields after successful submission
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
};

storeUserInfo(username, userEmail, password);


// check if usernames are unique





// LOGIN FORM ------------------------------------------------------

// check if username already exists

// check if password is correct

// clear all form fields and show a success message if all validation is successful

// modify the success message to indicate when "keep me logged in" is checked

