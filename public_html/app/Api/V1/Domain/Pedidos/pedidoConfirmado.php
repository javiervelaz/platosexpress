<?php

namespace App\Api\V1\Domain\Pedidos;

use Illuminate\Http\Request;
use App\Http\Requests;
use Dingo\Api\Routing\Helpers;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Http\lib\firebaseApp;

class pedidoConfirmado extends Controller{
    
    const TEMPLATE = 'mail.pedidoConfirmacion';
    const VALUE = 'c';
    const CAMPO_ESTADO = 'estado';
    const CAMPO_TOKEN = 'token';
    const DOMAIN = 'pedidos';
    
    //helper
    use Helpers;

    public $firebase;

    public function __construct() {
        $this->firebase = new firebaseApp();
    }
    
    public static function pedidoData($data){
        
        return $data;
    }
    
    public static function getFromToken($token){
        $idpedido = 0;
        $ref = new firebaseApp();
        $pedidos = (array) json_decode($ref->get(self::DOMAIN,array('orderBy' => '"token"','equalTo'=>'"'.$token.'"')));
        
        foreach($pedidos as $id => $items){
            if(isset( $items->token)){
                if($items->token == $token)
                {
                    $idpedido = $id;
                }    
            } 
        }
        $ref->update(self::DOMAIN."/".$idpedido."/".self::CAMPO_TOKEN , null);
        return $idpedido;
    }
    
    public static function MailFormato($email,$mailVendedor){
        $body = array(
            'title' => 'Su compra ah sido confirmada por el vendedor',
            'content' => $mailVendedor,
            'mailVendedor' => $email,
            'template' => self::TEMPLATE
        );
        return $body;   
    }
    
}
