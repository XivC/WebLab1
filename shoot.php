<?php
if(!isset($_SESSION)) {
    session_start();
}
require 'shoot_utils.php';
require 'json_utils.php';
$time_start = $_SERVER["REQUEST_TIME_FLOAT"];
$x = (float)$_POST["x"];
$y = (float)$_POST["y"];
$r = (float)$_POST['r'];


date_default_timezone_set('Europe/Moscow');
$isHit = calculate_shoot($x, $y, $r) ? "true" : "false";
$results = get_shoot_results();
array_push($results, array($x, $y, $r, $isHit));
$current_time = floatval(time()) + floatval(microtime());
$script_time = $current_time - $time_start;
$time_start_f = date("Y-m-d H:i:s", $time_start);
header('Content-Type: application/json; charset=utf-8');
add_shoot_result($x, $y, $r, $isHit);
echo encode_json($x, $y, $r, $isHit, $time_start_f, $script_time, $_SESSION["results"]  );

