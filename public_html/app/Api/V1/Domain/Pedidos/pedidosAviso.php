<?php

namespace App\Api\V1\Domain\Pedidos;

use Illuminate\Http\Request;
use App\Http\Requests;
use Dingo\Api\Routing\Helpers;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


class pedidosAviso extends Controller{
    
    const TEMPLATE = 'mail.pedidoIngresado';
    
    public static function pedidoData($data){
        $json_decoded = json_encode($data);
        return $json_decoded;
    }
    
    public static function MailFormato($email,$data = null,$orden = null){
        $link = 'http://localhost:8000/api/pedidos/confirmar/'.$data;
        $body = array(
            'title' => 'Felicitaciones has vendido un plato',
            'content' => $data,
            'orden'=>$orden,
            'mailVendedor' => $email,
            'template' => self::TEMPLATE
        );
        return $body;   
    }
    
}

