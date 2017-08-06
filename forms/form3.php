<?php 

if(isset($_POST['user_phone3'])) {
  $message = 'Phone: ' .$_POST['user_phone3'] . "\n"
    .'Name: ' .$_POST['user_name3'];
  mail('r.andreev1982@gmail.com, alxavt@gmail.com', 'alexavto third offer', $message);
} else {
  header('Refresh: 3; URL=../index.html');
  exit(0);
}
?>

<!DOCTYPE html>
<html lang="ru">
  <head>
    <title>АЛЕКСАВТО. Спасибо. Мы скоро свяжемся с вами.</title>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="15;url=../index.html" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
  </head>
  <body class="bg-faded">
    <div class="container">
      <h1 class="display-4 mt-5 mb-5">Спасибо. Мы скоро свяжемся с вами.</h1>
      <p class="lead mb-4">Мы работаем с 9:00 до 20:00 по рабочим дням, с 9:00 до 15:00 по выходным. Если вам не перезвонят в течении 20 минут, значит рабочий день уже закончился. Сожалеем! Мы позвоним вам на следующий день после 10:00 по будням либо после 12:00 в выходные.</p>
      <p class="lead mt-3"><a href="../index.html"><strong>Назад</strong></a></p>
    </div>
  </body>
</html>