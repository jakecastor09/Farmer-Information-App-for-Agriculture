<?php
include "../config.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);

$livestocksName = $data['livestocksName'];
$id = $_GET['id'];

$livestocks = mysqli_query($con,"UPDATE `livestocks` SET (livestocksName) VALUES (`$livestocksName`) WHERE `id` = '{$id}' LIMIT 1");

if($livestocks){
  http_response_code(201);
  $message['status'] = 'Success';
}else{
  http_response_code(422);
  $message['status'] = 'Error';
}

echo json_encode($message);
echo mysqli_error($con);
