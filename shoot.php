<?php


function calculate_shoot($x, $y, $r)
{
    $isHit = false;
    if ($x <= 0 and $x >= -$r and $y >= 0 and 2 * $y <= $r) $isHit = true;
    else if (($x <= 0 and $y <= 0) and ($x * $x + $y * $y <= $r * $r)) $isHit = true;
    else if (($x >= 0 and $y <= 0) and (2 * $y - $x >= -2 * $r)) $isHit = true;
    return $isHit;
}

function csv_to_array($path)
{
    $file = fopen($path, 'r');
    $arr = array();
    while ($row_data = fgetcsv($file, 1000, ",")) {
        array_push($row_data);
    }
    fclose($file);
    return $arr;
}

function array_to_csv($path, $arr)
{
    $file = fopen($path, 'w+');
    foreach ($arr as $row) {
        fputcsv($file, $row);
    }
    fclose($file);
}


$time_start = $_SERVER["REQUEST_TIME_FLOAT"];
$x = (float)$_POST["x_selection"];
$y = (float)$_POST["y_input"];
$r = (float)$_POST['r_checkbox'];


date_default_timezone_set('Europe/Moscow');
$isHit = calculate_shoot($x, $y, $r);

$results = array_map("str_getcsv", file("results.csv"));
array_push($results, array($x, $y, $r, $isHit));
array_to_csv("results.csv", $results);
$results = array_reverse($results);
$current_time = floatval(time()) + floatval(microtime());
$script_time = $current_time - $time_start;
$time_start_f = date("Y-m-d H:i:s", $time_start);

?>

<html lang="en">


<head>
    <title>Результаты выстрелов</title>
    <meta charset="UTF-8">
    <style>
        <?php include "css/shoot.css" ?>
    </style>
</head>
<body>

<?php
echo "<p >Время начала исполнения скрипта: $time_start_f</p>";
echo "<p>Время работы скрипта: $script_time мс.</p>";
?>
<table id="hits_table">
    <tr class="header">
        <td>
            x
        </td>
        <td class="header">
            y
        </td>
        <td class="header">
            r
        </td>
        <td class="header">
            result
        </td>
    </tr>
    <?php
    foreach ($results as $result) {
        $hitText = "";
        $hitClass = "";
        if ($result[3]) {$hitText = "Попадание"; $hitClass = "hit";}
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
    ?>
</table>
</body>

</html>






