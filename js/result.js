window.onload = function () {
    const authType = localStorage.getItem('authType');
    const username = localStorage.getItem('username');

    if (authType && username) {
        document.getElementById('resultMessage').innerText =
            authType === 'register' ? `Registered: ${username}` : `Logged: ${username}`;
    } else {
        document.getElementById('resultMessage').innerText = 'Ошибка! Нет данных.';
    }

    localStorage.removeItem('authType');
    localStorage.removeItem('username');
};
