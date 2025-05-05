<?php
session_start();

$username = trim($_POST['username']);
$password = $_POST['password'];

$data = file_exists('users.json') ? json_decode(file_get_contents('users.json'), true) : [];

if (!isset($data[$username]) || $data[$username] !== $password) {
    $_SESSION['error'] = 'Неверный логин или пароль';
    header("Location: login.php");
    exit;
}

$_SESSION['username'] = $username;
header("Location: result.php");
exit;
