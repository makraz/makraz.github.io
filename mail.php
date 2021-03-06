<?php

$state = false;
if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])) {
	$to = 'contact@makraz.com';
	$from = 'noreply@makraz.com';
	$subject = 'Message From Makraz.com';
	$message = 'Message for: ' . $_POST['name'] . "\r\n" .
	           'Email: ' . $_POST['email'] . "\r\n" .
	           'Message: ' . $_POST['message'] . "\r\n";
	$headers = 'From: ' . $from . "\r\n" .
	           'Reply-To: ' . $from;

	$state = mail($to, $subject, $message, $headers);
}

header('Content-Type: application/json');
echo json_encode(array('state' => $state));
exit();