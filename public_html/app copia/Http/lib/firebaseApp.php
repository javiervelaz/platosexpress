<?php

namespace App\Http\lib;

use App\Http\Controllers\Controller;
use Dingo\Api\Http\Response;

use Firebase;
use Config;

class firebaseApp extends Controller {
    
    protected $url = null;
    protected $token = null;
    protected $firebase;
            
    public function __construct() {
         
        $this->url = Config::get('app.firebase_url');
        $this->token = Config::get('app.firebase_token');
        $this->firebase = New Firebase\FirebaseLib($this->url,$this->token);
        
    }
    
    /** Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function ref(){
        $data = $this->firebase;       
        return $data;
    }
    
    /** Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function get($domain,$options = null){
        $data = $this->firebase->get($domain,$options);        
        return $data;
    }
    
    
    /** Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($path,$data){
        $data = $this->firebase->set($path,$data);
        return $data;
    }
    
    /** Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function create($path,$data){
        $data = $this->firebase->set($path,$data);
        return $data;
    }
    
    /** Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($domain) {
        //
       //$data = Input::get('id');
       $delete = $this->firebase->delete($domain);
       return  $delete;  
    }
    
}


