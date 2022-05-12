<?php
include '../config.php';
$data = array();
$farmer = mysqli_query($con,'Select * from `farmers`');

while ($row = mysqli_fetch_object($farmer)){
    $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);
