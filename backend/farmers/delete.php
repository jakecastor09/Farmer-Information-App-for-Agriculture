<?php
include "../config.php";

$input = file_get_contents('php://input');
$message = array();


$id = $_GET['id'];

$farmer = mysqli_query($con,"DELETE FROM `farmers` WHERE `id` = '{$id}' LIMIT 1");

if($farmer){
  http_response_code(201);
  $message['status'] = 'Success';
}else{
  http_response_code(422);
  $message['status'] = 'Error';
}

echo json_encode($message);
echo mysqli_error($con);
