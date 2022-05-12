<?php
include '../config.php';
$data = array();
$crops = mysqli_query($con,'Select * from `crops`');

while ($row = mysqli_fetch_object($crops)){
  $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);
