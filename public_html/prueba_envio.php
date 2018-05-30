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
$tipomail = $_POST['tipomail'];



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


if ($tipomail=='1')
{


$asunto = "PLATOS EXPRESS : Registración de usuario";	
$body =  str_replace("*|FNAME|*",$email, $hola);
$body =  str_replace("*|PREG|*","", $body);
$body =  str_replace("*|HTEXTO|*","Usted se ha registrado exitosamente", $body);
$body =  str_replace("*|TITULO|*","Registraci&oacute;n", $body);
$body =  str_replace("*|TEXTO2|*","El usuario: ".$email." se ha registrado exitosamente", $body);




}
if ($tipomail=='2')
{
$body =  str_replace("*|FNAME|*",$email, $hola);
$body =  str_replace("*|PREG|*",$texto, $body);
$body =  str_replace("*|HTEXTO|*","Usted ha recibidido una pregunta.", $body);
$body =  str_replace("*|TITULO|*","Pregunta", $body);
$body =  str_replace("*|TEXTO2|*","Usted ha recibido la siguiente pregunta:", $body);


}
if ($tipomail=='3')
{

$asunto = "PLATOS EXPRESS : Registraci&oacute;n de plato";	
$body =  str_replace("*|FNAME|*",$email, $hola);
$body =  str_replace("*|PREG|*",$texto, $body);
$body =  str_replace("*|HTEXTO|*","Usted ha ingresado un nuevo Plato.", $body);
$body =  str_replace("*|TITULO|*","Plato", $body);
$body =  str_replace("*|TEXTO2|*","Usted ha ingresado un nuevo plato:", $body);


}


$mail->Subject =$asunto;
$mail->Body    = $body;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}