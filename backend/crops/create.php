<?php
include "../config.php";

$input = file_get_contents("php://input");
$data = json_decode($input,true);
$message = array();

//Crops Table

$cropName = $data['cropName'];

$crops = mysqli_query($con,"INSERT INTO `crops` (`cropName`) VALUES ('$cropName')");

if($crops){
  http_response_code(201);
  $message['status'] = 'Success';
}else{
  http_response_code(422);
  $message['status'] = 'Error';
}

echo json_encode($message);
echo mysqli_error($con);
