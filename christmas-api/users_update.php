<?php 
include 'connection.php';
$data = json_decode(file_get_contents("php:///inputs"));

if($data){
    $sql = "update `users` set name='$data->name',email='$data->email',contact_no='$data->contact_no',password='$data->password' where id ='$data->id'";

    $result=$db->query($sql);
    if($result)
        echo json_encode(array("message" =>"successful updated"));
    else
        echo json_encode(array("message" => "Failed."));
}
?>