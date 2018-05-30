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
use App\Api\V1\Domain\User\activarCuenta;
use App\Api\V1\Domain\User\confirmarCuenta;
use App\Exceptions\Handler;
use Illuminate\Routing\Redirector;

class UserController extends Controller {

    //helper
    use Helpers;

    protected $firebase;

    public function __construct() {
        $this->firebase = new firebaseApp();
    }

    public function activarCuenta(Request $request) {
        $data = $request->all();
        $id = $data['data']["usuario_id"];
        $token = $data['data']["token"];
        $email = $this->firebase->get('users/' . $id . '/email');
        $mailContent = activarCuenta::MailFormato(json_decode($email), $token);
        $e = Event::fire(new notificacionMail($mailContent));
        return response()->json(array("status" => 200, "data" => $data));
    }

    public function confirmarCuenta(Request $request, $id) {
        $data = $request->all();
        $token = $id;
        
        $user = $this->firebase->get('cuentasActivar/' . $token);
        if ($user ) {
            $email = $this->firebase->get('users/' . json_decode($user). '/email');
            //return $email;
            $this->firebase->update('users/' . json_decode($user) . '/activo', true);
            $this->firebase->destroy('cuentasActivar/'.$token);       
            $mailContent = confirmarCuenta::MailFormato(json_decode($email),$token);
            $e = Event::fire(new notificacionMail($mailContent));
            return redirect('/');
        } else {
            return response()->json(array("status" => 400, "data" => "no disponible"));
        }
    }

}
