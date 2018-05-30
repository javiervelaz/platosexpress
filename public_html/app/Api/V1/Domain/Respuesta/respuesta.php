<?php

namespace App\Api\V1\Domain\Respuesta;

use Illuminate\Http\Request;
use App\Http\Requests;
use Dingo\Api\Routing\Helpers;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Http\lib\firebaseApp;

class respuesta extends Controller{
    
    const TEMPLATE = 'mail.respuestaAviso';
    const DOMAIN = 'respuesta';
    
    public static function respuestaData($data){
        
        return $data;
    }
    
    public static function MailFormato($email,$data){
        $body = array(
            'title' => 'Respuesta recibida',
            'content' => $data,
            'mailVendedor' => $email,
            'template' => self::TEMPLATE    
        );
        return $body;   
    }
    
}


