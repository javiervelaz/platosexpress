<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Dingo\Api\Routing\Helpers;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Mail;
use App\Http\lib\firebaseApp;

class sendMail extends Controller
{
    //helper
    use Helpers;
    
    public function send(Request $request){
        
        $firebaseapp = new firebaseApp();
        
        return  $firebaseapp->get('users');
//        $title = $request->input('title');
//        $content = $request->input('content');
//        $mailVendedor = $request->input('mailVendedor');
//        Mail::send('mail.avisoCompra',['title' => $title, 'content' => $content,'mailVendedor'=>$mailVendedor],function($m) use ($mailVendedor){
//            $m->from('javier1980@gmail.com','platos');
//            $m->to($mailVendedor)->subject('asunto');
//        });
//        
//        return response()->json(['message' => 'Request completed']);
        
    }
}
