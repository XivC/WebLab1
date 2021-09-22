<?php
if(!isset($_SESSION)) {
    session_start();
}

function calculate_shoot($x, $y, $r)
{
    $isHit = false;
    if ($x <= 0 and $x >= -$r and $y >= 0 and 2 * $y <= $r) $isHit = true;
    else if (($x <= 0 and $y <= 0) and ($x * $x + $y * $y <= $r * $r)) $isHit = true;
    else if (($x >= 0 and $y <= 0) and ($x/2 - $y <= 1/2 * $r)) $isHit = true;
    return $isHit;
}






function get_shoot_results(){
    if (!isset($_SESSION["results"])){
        $_SESSION["results"] = array();
    }
    return $_SESSION["results"];
}

function add_shoot_result ($x, $y, $r, $isHit){
    array_push($_SESSION['results'], [$x, $y, $r, $isHit]);
}

