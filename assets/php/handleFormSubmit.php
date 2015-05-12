<?php
require_once '../../vendor/swiftmailer/swiftmailer/lib/swift_required.php';
if(isset($_POST['c_name'])){
	$transport = Swift_SmtpTransport::newInstance('ssl://smtp.gmail.com', 465)
	                                ->setUsername('username@gmail.com') // Your Gmail Username
	                                ->setPassword('my_secure_gmail_password'); // Your Gmail Password
	$mailer = Swift_Mailer::newInstance($transport);
	$message = Swift_Message::newInstance('Wonderful Subject Here')
	                        ->setFrom(array('sender@example.com' => 'Sender Name')) // can be $_POST['email'] etc...
	                        ->setTo(array('receiver@example.com' => 'Receiver Name')) // your email / multiple supported.
	                        ->setBody('Here is the <strong>message</strong> itself. It can be text or <h1>HTML</h1>.', 'text/html');

	// Send the message
	if ($mailer->send($message)) {
		$res['sendstatus'] = 1;
		$res['message'] = 'Form Submission Succesful';
		echo json_encode($res);
	} else {
		$res['sendstatus'] = 1;
		$res['message'] = 'Mail not sent. Please try manually to almir.bij@gmail.com';
		echo json_encode($res);
	}

}

?>