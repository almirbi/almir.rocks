<?php
require_once '../../vendor/swiftmailer/swiftmailer/lib/swift_required.php';
require_once 'credentials.php';

if(isset($_POST['c_name'])){
	$transport = Swift_SmtpTransport::newInstance('ssl://smtp.gmail.com', 465)
	                                ->setUsername($username) // Your Gmail Username
	                                ->setPassword($password); // Your Gmail Password
	$mailer = Swift_Mailer::newInstance($transport);
	$message = Swift_Message::newInstance('@abrocks: New message from ' . $_POST['c_name'])
	                        ->setFrom(array('almir.bij@gmail.com' => 'almirbijedic.rocks')) // can be $_POST['email'] etc...
	                        ->setTo(array('almir.bij@gmail.com' => 'Almir Bijedic')) // your email / multiple supported.
	                        ->setBody($_POST['c_message'] . "\nName:" . $_POST['c_name'] . "\nEmail:" . $_POST['c_email']);

	// Send the message
	if ($mailer->send($message)) {
		$res['sendstatus'] = true;
		$res['message'] = 'Thank you for contacting me! I will write you back asap.';
		echo json_encode($res);
	} else {
		$res['sendstatus'] = false;
		$res['message'] = 'Mail not sent. Please try manually to almir.bij@gmail.com';
		echo json_encode($res);
	}
}

?>