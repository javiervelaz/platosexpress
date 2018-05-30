<?php

namespace App\Api\V1\Domain\Orden;

use Illuminate\Http\Request;
use App\Http\Requests;
use Dingo\Api\Routing\Helpers;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Http\lib\firebaseApp;

class ordenIngreso extends Controller{
    
    const TEMPLATE = 'mail.ordenAviso';
    const DOMAIN = 'orden';
    
    public static function ordenData($data){
        
        return $data;
    }
    
    public static function MailFormato($email,$data){
        $body = array(
            'title' => 'Gracias por comprar en Platos Express',
            'content' => $data,
            'mailVendedor' => $email,
            'template' => self::TEMPLATE    
        );
        return $body;   
    }
    
}
