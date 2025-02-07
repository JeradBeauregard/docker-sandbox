<?php

$connect = mysqli_connect(
    'db',
    'demo',
    'password',
    'demo'

);

$query = 'SELECT * FROM names ORDER BY name';
$result = mysqli_query($connect, $query);

$names = [];


while($record = mysqli_fetch_assoc($result)){

    $names[] = $record['name']; // Push name into the array
}

echo json_encode($names);

?>