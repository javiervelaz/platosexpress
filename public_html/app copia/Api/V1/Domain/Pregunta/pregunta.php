<?php

namespace App\Api\V1\Domain\Pregunta;

use Illuminate\Http\Request;
use App\Http\Requests;
use Dingo\Api\Routing\Helpers;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Http\lib\firebaseApp;

class pregunta extends Controller{
    
    const TEMPLATE = 'mail.preguntaAviso';
    const DOMAIN = 'pregunta';
    
    public static function preguntaData($data){
        
        return $data;
    }
    
    public static function MailFormato($email,$data,$platoNombre){
        $body = array(
            'title' => 'pregunta recibida',
            'content' => array($data,  json_decode($platoNombre)),
            'mailVendedor' => $email,
            'template' => self::TEMPLATE    
        );
        return $body;   
    }
    
}
