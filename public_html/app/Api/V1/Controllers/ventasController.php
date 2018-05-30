<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Dingo\Api\Routing\Helpers;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Event;
use App\Http\lib\firebaseApp;
use App\Events\notificacionMail;

class ventasController extends Controller {

    //helper
    use Helpers;

    protected $firebase;

    public function __construct() {
        $this->firebase = new firebaseApp();
    }

    public function get(Request $request) {
        $data = $request->all();
        $idUsuario = $data['data']['idUsuario'];
        $pedidos = $this->firebase->get('/pedidos',
                array("orderBy"=>'"usuario_id_venta"',"equalTo"=>'"'.$idUsuario.'"')
                );
        //return (array) json_decode($pedidos);
        $arr = array();
        $platos = array();
        foreach (json_decode($pedidos) as $key => $pedido) {
            if ($pedido->estado == 'i') {
                $arr[$key] = $pedido;
                if ($pedido->id_plato) {
                    $platos[$key] = $this->platos($pedido->id_plato);
                }
                $arr[$key]->plato=$this->platos($pedido->id_plato);
                $arr[$key]->usuario = $this->usuario($pedido->usuario_id);
            }
        }
        //return $idUsuario;
        return response()->json(array('lista' => $arr));
    }

    public function platos($id) {
        $platos = $this->firebase->get('/platos/' . $id);
        return json_decode($platos);
    }
    
    public function usuario($id){
        $usuario = $this->firebase->get('/users/'.$id.'/email');
        return json_decode($usuario);
    }

}
