<?php
include '../config.php';
$data = array();
$posts = mysqli_query($con,'Select * from `posts`');

while ($row = mysqli_fetch_object($posts)){
    $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);
