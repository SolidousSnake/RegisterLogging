<?php
session_start();

$username = trim($_POST['username']);
$password = $_POST['password'];
$confirm = $_POST['confirmPassword'];

if ($password !== $confirm) {
    $_SESSION['error'] = 'Пароли не совпадают';
    header("Location: register.php");
    exit;
}

$data = file_exists('users.json') ? json_decode(file_get_contents('users.json'), true) : [];

if (isset($data[$username])) {
    $_SESSION['error'] = 'Пользователь уже существует';
    header("Location: register.php");
    exit;
}

$data[$username] = $password; // Хранение пароля в открытом виде — только для обучения!
file_put_contents('users.json', json_encode($data));

$_SESSION['username'] = $username;
header("Location: result.php");
exit;
