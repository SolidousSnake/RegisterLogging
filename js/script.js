let authType = '';

function showForm(type) {
    authType = type;
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('formTitle').innerText = type === 'register' ? 'Регистрация' : 'Вход';
    document.getElementById('confirmPassword').style.display = type === 'register' ? 'block' : 'none';
}

function submitForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!username || !password || (authType === 'register' && password !== confirmPassword)) {
        document.getElementById('message').innerText = 'Ошибка: проверьте введенные данные';
        return;
    }

    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('welcomePanel').style.display = 'block';
    document.getElementById('welcomeMessage').innerText = authType === 'register' ? `Registered: ${username}` : `Logged in: ${username}`;
}
