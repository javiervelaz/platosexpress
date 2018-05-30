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
use App\Api\V1\Domain\Orden\ordenIngreso;

class ordenController extends Controller
{
    //helper
    use Helpers;

    protected $firebase;
    public $usuario_id;
    public $fecha_compra;
    public $total;

    public function __construct() {
        $this->firebase = new firebaseApp();
    }
    
    public function get(Request $request){
        $data  = $request->all();
        
        return response()->json(array("status"=>200,'data'=>$data));
    }
    
    public function sendOrden(Request $request){
        $data  = $request->all();
        $this->usuario_id = $data['data']['usuario_id'];
        $this->total = $data['data']['montoTotal'];
        $this->fecha_compra = $data['data']['fecha_compra'];
        $data = $this->total;
        
        $email = $this->firebase->get('users/' . $this->usuario_id . '/email');
        $mailContent = ordenIngreso::MailFormato(json_decode($email),json_decode($data));
        //return $mailContent;
        $e = Event::fire(new notificacionMail($mailContent));
        return response()->json(array("status"=>200,"orden"=> $e));
    }
}
