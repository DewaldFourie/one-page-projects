
// Dom elements
const $form = document.querySelector("form");
const $username = document.getElementById("username");
const $username_error = document.querySelector(".username-error");
const $email = document.getElementById("email");
const $email_error = document.querySelector(".email-error");
const $country = document.getElementById("country");
const $country_error =document.querySelector(".country-error");
const $zip = document.getElementById("zip");
const $zip_error = document.querySelector(".zip-error");
const $password = document.getElementById("password");
const $password_error = document.querySelector(".password-error");
const $c_password = document.getElementById("confirm-password");
const $c_password_error = document.querySelector(".c-password-error"); 


// Event Listeners
$username.addEventListener("input", () => {
    checkTextInputError($username, $username_error, 4, 20);
})

$country.addEventListener("input", () => {
    checkTextInputError($country, $country_error, 3, 20);
})

$email.addEventListener("input", () => {
    checkEmailInputError($email, $email_error, 10);
})

$zip.addEventListener("input", () => {
    checkZipInputError($zip, $zip_error, 4, 4);
})

$password.addEventListener("input", () => {
    checkPasswordInputError($password, $password_error, 4);
    checkConfirmPasswordInputError($c_password, $password, $c_password_error)
})

$c_password.addEventListener("input", () => {
    checkConfirmPasswordInputError($c_password, $password, $c_password_error);
})

$form.addEventListener("submit", (event) => {
    if (
        checkTextInputError($username, $username_error, 4, 20) && 
        checkTextInputError($country, $country_error, 3, 20) && 
        checkEmailInputError($email, $email_error, 10) && 
        checkZipInputError($zip, $zip_error, 4, 4) &&
        checkPasswordInputError($password, $password_error, 4) &&
        checkConfirmPasswordInputError($c_password, $password, $c_password_error)
    ) {
        alert("Your Form has been Added.")
    }
    else { 
        event.preventDefault();
        alert("Please fill the Form in correctly.")
    }
})


// Function to check the validation of text inputs
function checkTextInputError(input, inputError, charMin, charMax) {

    const hasNumbers = (str) => {
        return /\d/.test(str)
    };

    if (input.value.length === 0) {
        input.className = "invalid";
        inputError.textContent = `Please enter your ${input.name}.`;
        inputError.className = "s_invalid"
    }
    else if (input.value.length < charMin) {
        input.className = "invalid";
        inputError.textContent = `${input.name} should be at least ${charMin} characters long. You only have ${input.value.length}`;
        inputError.className = "s_invalid"
    }
    else if (input.value.length > charMax) {
        input.className = "invalid";
        inputError.textContent = `${input.name} should not be longer than ${charMax} characters. You have ${input.value.length}`;
        inputError.className = "s_invalid"
    }
    else if (hasNumbers(input.value)) {
        input.className = "invalid";
        inputError.textContent = `${input.name} can not contain any numbers.`;
        inputError.className = "s_invalid"
    } 
    else {
        inputError.textContent = "";
        input.className = "valid";
        inputError.className = "s_valid";
        return true;
    }
}

// Function to check the validation of email input 
function checkEmailInputError(input, inputError, charMin) {

    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.length === 0) {
        input.className = "invalid";
        inputError.textContent = `Please enter an ${input.name} address.`;
        inputError.className = "s_invalid";
    }
    else if (input.value.length < charMin) {
        input.className = "invalid";
        inputError.textContent = `${input.name} should be at least ${charMin} characters long. You only have ${input.value.length}`;
        inputError.className = "s_invalid"
    }
    else if (!emailRegExp.test(input.value)) {
        input.className = "invalid";
        inputError.textContent = "Email must be in the correct format eg. john@email.com";
        inputError.className = "s_invalid";
    }
    else {
        inputError.textContent = "";
        input.className = "valid";
        inputError.className = "s_valid";
        return true;
    }

}

// Function to check the validation of the Zip Code input
function checkZipInputError(input, inputError, charMin, charMax) {

    if (input.value.length === 0) {
        input.className = "invalid";
        inputError.textContent = `Please enter a ${input.name} Code.`;
        inputError.className = "s_invalid";
    }
    else if (!/^\d+$/.test(input.value)) {
        input.className = "invalid";
        inputError.textContent = "Zip Code should only contain digits (0-9).";
        inputError.className = "s_invalid";
    }
    else if (input.value.length < charMin || input.value.length > charMax) {
        input.className = "invalid";
        inputError.textContent = `${input.name} Code should be ${charMin} digits. You have ${input.value.length}`;
        inputError.className = "s_invalid";
    }
    else {
        inputError.textContent = "";
        input.className = "valid";
        inputError.className = "s_valid";
        return true;
    }
}

// Function to check the validation of the Password
function checkPasswordInputError(input, inputError, charMin) {

    if (input.value.length === 0) {
        input.className = "invalid";
        inputError.textContent = `Your ${input.name} can not be empty.`;
        inputError.className = "s_invalid";
    }
    else if (input.value.length < charMin) {
        input.className = "invalid";
        inputError.textContent = `Your ${input.name} should contain at least ${charMin} characters. You have ${input.value.length}`;
        inputError.className = "s_invalid";
    }
    else {
        inputError.textContent = "";
        input.className = "valid";
        inputError.className = "s_valid";
        return true;
    }
}

// Function to check if Confirm Password input matches Password input
function checkConfirmPasswordInputError(input, check, inputError) {

    if (input.value !== check.value) {
        input.className = "invalid";
        inputError.textContent = "Does not match you Password above!";
        inputError.className = "s_invalid";
    }
    else {
        inputError.textContent = "";
        input.className = "valid";
        inputError.className = "s_valid";
        return true;
    }
}
