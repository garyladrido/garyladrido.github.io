<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Location: contact.html'); exit; }
if (!empty($_POST['website'])) { header('Location: contact.html'); exit; }
$name = substr(trim($_POST['name'] ?? ''), 0, 200);
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$msg = substr(trim($_POST['message'] ?? ''), 0, 5000);
if (!$name || !$email || !$msg) { header('Location: contact.html'); exit; }
$to = 'gary.ladrido@gmail.com';
$subj = 'Kingmaker operator: ' . $name;
$body = "Name: $name\nEmail: $email\n\n$msg\n";
$hdrs = "From: $email\r\nReply-To: $email\r\n";
@mail($to, $subj, $body, $hdrs);
header('Location: contact.html?sent=1');
