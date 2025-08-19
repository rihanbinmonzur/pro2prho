<?php 
include 'connection.php';
$id=$_GET['id'];
$sql = "delete from `users` where id=$id ";
$result = $db->query($sql);
if($result)
    echo json_encode(array("message" => "Successful deleted"));
else
    echo json_encode(array("message" => "failed")); 

?>