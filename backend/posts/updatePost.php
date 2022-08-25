<?php
include "../config.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$type = $data['type'];
$postMessage = $data['message'];
$img = $data['img'];


$id = $_GET['id'];

$posts = mysqli_query($con,"UPDATE `posts` SET `type` = '$type',`message` = '$postMessage',`img` = '$img' WHERE `id` = '{$id}' LIMIT 1");


if($posts){
  http_response_code(201);
  $message['status'] = 'Success';
}else{
  http_response_code(422);
  $message['status'] = 'Error';
}

echo json_encode($message);
echo mysqli_error($con);
