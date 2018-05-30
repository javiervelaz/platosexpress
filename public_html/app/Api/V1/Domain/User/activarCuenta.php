<?php

namespace App\Api\V1\Domain\User;

use Illuminate\Http\Request;
use App\Http\Requests;
use Dingo\Api\Routing\Helpers;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Http\lib\firebaseApp;

class activarCuenta extends Controller{
    
    const TEMPLATE = 'mail.activarCuenta';
    const DOMAIN = 'users';
    
   
    
    public static function MailFormato($email,$token = null){
        
        $body = array(
            'title' => 'Activar cuenta',
            'content' => $token,
            'mailVendedor' => $email,
            'template' => self::TEMPLATE
        );
        return $body;   
    }
    
    
}

