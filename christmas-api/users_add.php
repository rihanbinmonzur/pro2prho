<?php 
include 'connection.php';

$data =json_decode(file_get_contents("php://input"));
$password= sha1($data->password)
 if($data){
    if($data->name && $data->email && $data->password){
    $sql = "insert into `users` set name='$data->name',email='$data->email',contact_no='$data->contact_no',password='$password'";

    $result=$db->query($sql);
    if($result)
        echo json_encode(array("message" =>"Successful saved.",'error'=>0));
    else 
        echo json_encode(array("message" =>"Failed.",'error'=>1));
   }else{
        echo json_encode(array("message" => "Name,email and password are required.",'error'=>1));
   
}
 }