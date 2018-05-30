<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Dingo\Api\Routing\Helpers;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Mail;
use App\Http\lib\firebaseApp;

abstract class enviarMail extends Controller
{
    //helper
    use Helpers;
    
    public static function send($request){
        
        $title = $request['title'];
        $content = $request['content'];
        $mailVendedor = $request['mailVendedor'];
        $view = $request['template'];
        Mail::send($view,['title' => $title, 'content' => $content,'mailVendedor'=>$mailVendedor],function($m) use ($mailVendedor){
            $m->from('javier1980@gmail.com','platos');
            $m->to($mailVendedor)->subject('asunto');
        });
        
        return response()->json(['message' => 'Request completed']);
        
    }
}
