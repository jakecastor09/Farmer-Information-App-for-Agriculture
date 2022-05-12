<?php
include '../config.php';
$data = array();
$livestocks = mysqli_query($con,'Select * from `livestocks`');

while($row = mysqli_fetch_object($livestocks)){
  $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);
