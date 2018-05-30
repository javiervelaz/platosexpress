<?php
if(isset($_FILES)){
      $userDir = $_POST['user']. DIRECTORY_SEPARATOR. $_POST['plato'];
      $errors= array();
      //print_r($_FILES);die;
      $file_name = $_FILES[0]['name'];
      $file_size =$_FILES[0]['size'];
      $file_tmp =$_FILES[0]['tmp_name'];
      $file_type=$_FILES[0]['type'];
      $file_ext=strtolower(end(explode('.',$_FILES[0]['name'])));
      
      $expensions= array("jpeg","jpg","png");
      
      if(in_array($file_ext,$expensions)=== false){
         $errors[]="extension not allowed, please choose a JPEG or PNG file.";
      }
      
      if($file_size > 2097152){
         $errors[]='File size must be excately 2 MB';
      }
      
      if(empty($errors)==true){
          $uploadPath = 'uploads' . DIRECTORY_SEPARATOR . $userDir ;
          if (!file_exists($uploadPath)) {
            \mkdir($uploadPath,0777,true);
            //chmod($uploadPath, 0777);
            
        }
        echo $file_tmp ."||"."uploads/".$uploadPath.'/'.$file_name;
         move_uploaded_file($file_tmp,$uploadPath.'/'.$file_name);
         echo "Success";
      }else{
         print_r($errors);
      }
   }
