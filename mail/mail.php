<?php

$recepient = "info@example.ru";
$siteName = "MyHealth";

$email = trim($_POST["name"]);
$message = "Email $email";

$pagetitle = "Order frome the site $siteName";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset = 'utf-8' From: $recepient");