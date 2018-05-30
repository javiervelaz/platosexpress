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
use App\Api\V1\Domain\Respuesta\respuesta;

class respuestasController extends Controller
{
    //helper
    use Helpers;

    protected $firebase;

    public function __construct() {
        $this->firebase = new firebaseApp();
    }
    
    public function sendNotification(Request $request){
        $data =  $request->all();
        $respuesta =  $data['data'];
        $id_plato = $respuesta['id_plato'];
        $textopregunta =$respuesta['pregunta'];
        $textorespuesta =$respuesta['respuesta'];
        $idUsuario = $respuesta['id_usuario'];
        $email = $this->firebase->get('users/' . $idUsuario . '/email');
        $platoNombre = $this->firebase->get('platos/' . $id_plato . '/nombre');
        $dataMail=array('plato'=>$platoNombre,'pregunta'=>$textopregunta,'respuesta'=>$textorespuesta);
        $mailContent = respuesta::MailFormato(json_decode($email),$dataMail);
        //return $mailContent;
        $e = Event::fire(new notificacionMail($mailContent));
        return response()->json(array("status"=>200,"pregunta"=> $e));  
    }
}


