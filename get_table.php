<?php
if(!isset($_SESSION)) {
    session_start();
}
require 'json_utils.php';

header('Content-Type: application/json; charset=utf-8');
$table = encode_json_from_array($_SESSION["results"]);
echo "{
    \"hits\":$table
}";

