<?php
if(!isset($_SESSION)) {
    session_start();
}

function calculate_shoot($x, $y, $r)
{
    $isHit = false;
    if ($x <= 0 and $x >= -$r and $y >= 0 and 2 * $y <= $r) $isHit = true;
    else if (($x <= 0 and $y <= 0) and ($x * $x + $y * $y <= $r * $r)) $isHit = true;
    else if (($x >= 0 and $y <= 0) and (2 * $y - $x >= -2 * $r)) $isHit = true;
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

function render_table()
{

    foreach (get_shoot_results() as $result) {
        $hitText = "";
        $hitClass = "";
        if ($result[3] == "true") {$hitText = "Попадание"; $hitClass = "hit";}
        else {$hitText = "Промах"; $hitClass = "miss";}


        echo "<tr class='content'>";
        echo "
    <td>
        $result[0]
    </td>
    <td>
        $result[1]
    </td>
    <td>
        $result[2]
    </td>
    <td class = $hitClass>
        $hitText
    </td>
    ";
        echo "</tr>";
    }
}