<?php

namespace App\Listeners;

use App\Events\notificacionMail;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Mail;

class notificacionMailFired
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  notificacionMail  $event
     * @return void
     */
    public function handle(notificacionMail $event)
    {
        if(isset($event->data['orden']))
        {
            $orden = $event->data['orden'];
        }else{
            $orden = null;
        }
        $title = $event->data["title"];
        $content = $event->data['content'];
        $orden = null;//json_decode($orden,true);
    
        $mailVendedor = $event->data['mailVendedor'];
        //return $mailVendedor;
        $view = $event->data['template'];
        $mail = Mail::send($view,['title' => $title, 'content' => $content],function($m) use ($mailVendedor){
            $m->from('postmaster@platosexpress.com','Platos Express');
            $m->to($mailVendedor)->subject('PlatosExpress Notificacion');
        });
       
    }
}
