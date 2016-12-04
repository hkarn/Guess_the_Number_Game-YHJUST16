<?php
$prefs = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
$jsonp = json_encode($prefs);

header('Content-Type: application/json; charset=UTF-8', true );
header('Content-Length: '.strlen($jsonp), true );
echo $jsonp;
?>
