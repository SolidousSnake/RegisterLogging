<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Добро пожаловать</title>
</head>
<body>

<h1>Добро пожаловать, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h1>
<p><a href="logout.php">Выйти</a></p>

</body>
</html>
