<?php 
include 'connection.php';
$data=[];

$sql="SELECT * FROM users ";

$result =$db->query($sql);
while ($row=$result->fetch_object()){
 $data[]=$row;   
}
echo json_encode($data);
?>