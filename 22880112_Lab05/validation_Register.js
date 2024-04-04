(function () {
    let password1 = document.getElementById("password");
    let password2 = document.getElementById("confirmed_password");

    let checkPasswordValidity = function () {
        if (password1.value != password2.value) {
            password2.setCustomValidity('Passwords must match.')
        } else {
            password2.setCustomValidity('');
        }
    };
    password1.onchange = checkPasswordValidity;
    password2.onchange = checkPasswordValidity;
}());