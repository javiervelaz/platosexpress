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
use App\Api\V1\Domain\Pregunta\pregunta;

class preguntasController extends Controller
{
    //helper
    use Helpers;

    protected $firebase;

    public function __construct() {
        $this->firebase = new firebaseApp();
    }
    
    public function sendNotification(Request $request){
        $data =  $request->all();
        $idPregunta =  $data['data'];
        $pregunta = json_decode($this->firebase->get("preguntas/".$idPregunta),true);
        //$idUsuario = $this->firebase->get('platos/' . $pregunta['id_plato'] . '/id_usuario_venta');
        $idUsuario = $pregunta['id_usuario_venta'];
        $email = $this->firebase->get('users/' . $idUsuario . '/email');
        $platoNombre = $this->firebase->get('platos/' . $pregunta['id_plato'] . '/nombre');
        $mailContent = pregunta::MailFormato(json_decode($email),json_encode($pregunta['texto_pregunta']),json_encode($platoNombre));
        //return $mailContent;
        $e = Event::fire(new notificacionMail($mailContent));
        return response()->json(array("status"=>200,"pregunta"=> $e));  
    }
}
