// input values
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordTemp = document.getElementById('pass-confirm');

// error messages
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const passConfirmError = document.getElementById('confirm-error');

// to check if a input field is empty or not
const isEmpty = input => {
    if (input === '')
        return true;
    return false;
}

//to check username
const validUsername = username => {
    if (isEmpty(username) || username.length <= 3)
        return false;
    return true;
}

//to check user email
const validEmail = email => {
    if (isEmpty(email) || !email.includes('@') || !email.includes('.com'))
        return false;
    return true;
}
//to check user password
const validPassword = password => {
    if (isEmpty(password) || password.length < 8 || password.length > 25)
        return false;
    return true;
}

//to confirm user password
const confirmPassword = (password, passwordTemp) => {
    if (password != passwordTemp || password.length < 8 || password.length > 25)
        return false;
    return true;

}

// shows the error messages
const showError = (field, message) => {
    field.classList.add('error-show')
    field.innerText = message;
}

// removes the error messages and sets the input field to success
const showSuccess = (field, ef) => {
    ef.classList.remove('error-show');
    field.style.outline = "1px solid #2eec71"
}


const registerBtn = document.getElementById('register-btn').addEventListener('click', (e) => {
    e.preventDefault();

    if (!validUsername(username.value))
        showError(usernameError, "Invalid username");
    else
        showSuccess(username, usernameError)

    if (!validEmail(email.value))
        showError(emailError, "Invalid email");
    else
        showSuccess(email, emailError)

    if (!validPassword(password.value))
        showError(passwordError, "Password should be atleast 8 characters");
    else
        showSuccess(password, passwordError)

    if (!confirmPassword(password.value, passwordTemp.value))
        showError(passConfirmError, "Password dosent match");
    else
        showSuccess(passwordTemp, passConfirmError)
})
