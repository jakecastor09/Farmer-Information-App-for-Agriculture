<?php
include "../config.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);

$cropName = $data['cropName'];
$id = $_GET['id'];

$crops = mysqli_query($con,"UPDATE `crops` SET (cropName) VALUES (`$cropName`) WHERE `id` = '{$id}' LIMIT 1");

if($crops){
  http_response_code(201);
  $message['status'] = 'Success';
}else{
  http_response_code(422);
  $message['status'] = 'Error';
}

echo json_encode($message);
echo mysqli_error($con);
