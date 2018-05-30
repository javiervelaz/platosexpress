<?php
require 'PHPMailerAutoload.php';
include("template.php");

$rawData = file_get_contents("php://input");
 
echo "hola";
echo "<pre>";
print_r($rawData);
echo "</pre>";


$email =  $_POST['email'];
$asunto = $_POST['asunto']; 
$texto = $_POST['texto'];

$mail = new PHPMailer;                            // Enable verbose debug output


$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mx1.hostinger.com.ar';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ventas@platosexpress.com';                 // SMTP username
$mail->Password = 'juanes23';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('ventas@platosexpress.com', 'Platosexpress.com');
$mail->addAddress($email , 'Joe User');     // Add a recipient

$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$body =  str_replace("*|FNAME|*",$email, $hola);
$body =  str_replace("*|PREG|*",$texto, $body);



$mail->Subject =$asunto;
$mail->Body    = $body;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}