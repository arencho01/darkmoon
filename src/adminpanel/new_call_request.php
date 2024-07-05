<?php
$username = $_POST["name"] ?? "";
$phone = $_POST["phone"] ?? "";
$comment = $_POST["message"] ?? "";

include "db.php";
$stmt = $pdo->prepare("INSERT INTO call_requests (name, phone, comment) VALUES (:name, :phone, :comment)");
$stmt->bindParam(":name", $username);
$stmt->bindParam(":phone", $phone);
$stmt->bindParam(":comment", $comment);
$stmt->execute();

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <p>Ваше обращение очень важно для нас</p>
    <a href="/"> А теперь назад</a>
</body>
</html>
