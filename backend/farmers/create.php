<?php
include "../config.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

// Farmers Tables
$firstName = $data['firstName'];
$middleName = $data['middleName'];
$lastName = $data['lastName'];
$email = $data['email'];
$street = $data['street'];
$phoneNumber = $data['phoneNumber'];

$farmer = mysqli_query($con,"INSERT INTO `FARMERS` (`firstName`,`middleName`,`lastName`,`email`,`street`,`phoneNumber`) VALUES ('$firstName','$middleName','$lastName','$email','$street','$phoneNumber')");

if($farmer){
  http_response_code(201);
  $message['status'] = 'Success';
}else{
  http_response_code(422);
  $message['status'] = 'Error';
}

echo json_encode($message);
echo mysqli_error($con);
