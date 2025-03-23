function submitForm(authType) {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    let isValid = true;

    clearErrors();

    if (!username.value.trim()) {
        showError(username, 'Логин не может быть пустым');
        isValid = false;
    }
    if (!password.value) {
        showError(password, 'Пароль не может быть пустым');
        isValid = false;
    }
    if (authType === 'register' && confirmPassword && password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Пароли не совпадают');
        isValid = false;
    }

    if (!isValid)
        return;

    localStorage.setItem('authType', authType);
    localStorage.setItem('username', username.value);

    window.location.href = 'result.html';
}

function showError(input, message) {
    const errorElement = document.getElementById(input.id + 'Error');
    errorElement.innerText = message;
    input.classList.add('input-error');
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(el => el.innerText = '');
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
}
