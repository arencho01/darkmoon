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
<table border="1">
    <thead>
    <tr>
        <th>Имя</th>
        <th>Телефон</th>
        <th>Комментарий</th>
    </tr>
    </thead>

    <?php
    include "db.php";
    $stmt = $pdo->query('SELECT name, phone, comment FROM `call_requests`');
    $call_requests = $stmt->fetchAll();
    foreach ($call_requests as $call_request) :
        ?>
        <tr>
            <td><?= $call_request['name'] ?></td>
            <td><?= $call_request['phone'] ?></td>
            <td><?= $call_request['comment'] ?></td>
        </tr>
    <?php
    endforeach;
    ?>
</table>
</body>
</html>