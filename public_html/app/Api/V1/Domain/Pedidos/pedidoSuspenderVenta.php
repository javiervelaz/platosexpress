<?php

namespace App\Api\V1\Domain\Pedidos;

use Illuminate\Http\Request;
use App\Http\Requests;
use Dingo\Api\Routing\Helpers;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Http\lib\firebaseApp;

class pedidoSuspenderVenta extends Controller
{
    
    const TEMPLATE = 'mail.pedidoSuspendidoVenta';
     const CAMPO_ESTADO = 'estado';
    const VALUE = 's';
    const DOMAIN = 'pedidos';
    
    //helper
    use Helpers;

    public $firebase;

    public function __construct() {
        $this->firebase = new firebaseApp();
    }
    
    public static function MailFormato($email,$emailVendedor){
        
        $body = array(
            'title' => 'Compra suspendida por el vendedor',
            'content' => $emailVendedor ,
            'mailVendedor' => $email ,
            'template' => self::TEMPLATE
        );
        return $body;   
    }
}
