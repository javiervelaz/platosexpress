<?php

namespace App\Listeners;

use App\Events\saveOrden;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Api\V1\Controllers\ordenController;

class saveOrdenFired
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
     * @param  saveOrdenl  $event
     * @return void
     */
    public function handle(saveOrden $event)
    {
        $newOrden = new ordenController($event->data);
        //return $event->request;
        return $newOrden->create();
    }
}
