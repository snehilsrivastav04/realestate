<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once 'db.php';

$query = "SELECT * FROM properties";
$result = $conn->query($query);

$properties = array();

while($row = $result->fetch_assoc()) {
  $properties[] = $row;
}

echo json_encode($properties);

$conn->close();
?>