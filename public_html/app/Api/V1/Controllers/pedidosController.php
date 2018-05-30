<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Dingo\Api\Routing\Helpers;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Event;
use App\Http\lib\firebaseApp;
use App\Events\notificacionMail;
use App\Api\V1\Domain\Pedidos\pedidosAviso;
use App\Api\V1\Domain\Pedidos\pedidoConfirmado;
use App\Api\V1\Domain\Pedidos\pedidoSuspender;
use App\Api\V1\Domain\Pedidos\pedidoSuspenderVenta;

class pedidosController extends Controller {

    //helper
    use Helpers;

    protected $firebase;

    public function __construct() {
        $this->firebase = new firebaseApp();
    }

    public function recibirPedido(Request $request) {
        $data  = $request->all();
        $idVendedor = $data['data']["usuario_id_venta"];
        $token =  $data['data']["token"];
        $orden = $data['data']['items'];
        $email = $this->firebase->get('users/' . $idVendedor . '/email');
        //return  json_decode($email);
        $mailContent = pedidosAviso::MailFormato(json_decode($email),$token,json_encode($orden));
        $e = Event::fire(new notificacionMail($mailContent));
        return response()->json(array("status"=>200,"orden"=> $e));
    }

    public function confirmarPedido(Request $request,$id) {
        //return $id;
        //return (array)json_decode($this->firebase->get('pedidos',array('orderBy' => '"estado"','equalTo'=>'"c"')));
        $idPedido = pedidoConfirmado::getFromToken($id);
        $pedido = (array) json_decode($this->firebase->get(pedidoConfirmado::DOMAIN . '/' . $idPedido));
        $usuario_comprador = $pedido['usuario_id'];
        $usuario_vendedor = $pedido['usuario_id_venta'];
        $email = $this->firebase->get('users/' . $usuario_comprador . '/email');
        $email_vendedor = $this->firebase->get('users/' . $usuario_vendedor . '/email');
        $mailContent = pedidoConfirmado::MailFormato(json_decode($email),  json_decode($email_vendedor));
        
        $this->firebase->update(pedidoConfirmado::DOMAIN . '/' . $idPedido . '/' . pedidoConfirmado::CAMPO_ESTADO, pedidoConfirmado::VALUE);
        Event::fire(new notificacionMail($mailContent));
        return redirect('/');
        //return response()->json(array("status"=>200));
    }

    public function  suspenderPedido(Request $request){
        $data = $request->all();
        $idPedido = $data['data']['pedido_id'];
        $idUsuario = $data['data']['usuario_id'];
        $idUsuarioVendedor = $this->firebase->get('pedidos/'.$idPedido.'/usuario_id_venta');
        $value = pedidoSuspender::VALUE;
        
        $email = $this->firebase->get('users/' . $idUsuario . '/email');
       
        $emailVendedor = $this->firebase->get('users/' . json_decode($idUsuarioVendedor) . '/email');
         //return array($email,$emailVendedor);
        $this->firebase->update(pedidoSuspender::DOMAIN. '/' . $idPedido . '/'. pedidoSuspender::CAMPO_ESTADO , $value);
        
        $mailContent = pedidoSuspender::MailFormato(json_decode($email),  json_decode($emailVendedor));
        $eventMail = Event::fire(new notificacionMail($mailContent));
        return response()->json(array("status"=>200));
    }
    
    public function  suspenderPedidoVenta(Request $request){
        $data = $request->all();
        $idPedido = $data['data']['pedido_id'];
        $idUsuario = $data['data']['usuario_id'];
        $idUsuarioVendedor = $this->firebase->get('pedidos/'.$idPedido.'/usuario_id_venta');
        $value = pedidoSuspenderVenta::VALUE;
        
        $email = $this->firebase->get('users/' . $idUsuario . '/email');
       
        $emailVendedor = $this->firebase->get('users/' . json_decode($idUsuarioVendedor) . '/email');
         //return array($email,$emailVendedor);
        $this->firebase->update(pedidoSuspenderVenta::DOMAIN. '/' . $idPedido . '/'. pedidoSuspenderVenta::CAMPO_ESTADO , $value);
        
        $mailContent = pedidoSuspenderVenta::MailFormato(json_decode($email),  json_decode($emailVendedor));
        $eventMail = Event::fire(new notificacionMail($mailContent));
        return response()->json(array("status"=>200));
    }
    
    public function finalizarPedido(Request $request){
        $idPedido = $request->get('idPedido');
        $value = $request->get('value');
        $this->firebase->update($this->domain . '/' . $idPedido . '/' . $this->campo, $value);
        $email="javiervelaz@hotmail.com";
        $request = array(
            'title' => 'compra confirmada event',
            'content' => 'test confirmacion compra',
            'mailVendedor' => $email,
            'template' => 'mail.avisoCompra'
        );
        
        Event::fire(new notificacionMail($request));
        
    }
    
}
