<?php
if (!isset($_SESSION)){
    session_start();
}?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Лаба один по вебу</title>
    <link rel="stylesheet" href="css/index.css">
</head>
<body onload="get_table().then(json => render_table(json)); render_canvas(0)">
<div class ="header">
<h1>
    Дыбов Артём Денисович
</h1>
<h2>
    Группа P3213
</h2>
<h3>
    Вариант 13108
</h3>
</div>
<div id = "image">
    <canvas id="target_canvas" width="400" height="400"></canvas>
</div>
<div id = "last_hit_results">
    <p id = "last_hit_result"></p>
</div>
<div class = "shoot_form">
<form id="shoot_form" name="shoot_form" method="post" action="shoot.php" enctype='multipart/form-data'>
    <table id="shoot_form_table">
        <tr>
            <td>
                <label for="x_selection" id="x_selection_label">x: </label>
            </td>
            <td>
                <select id="x_selection" name="x_selection">
                    <option value="-2">-2</option>
                    <option value="-1.5">-1.5</option>
                    <option value="-1">-1</option>
                    <option value="0">0</option>
                    <option value="0.5">0.5</option>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>
                <label for="y_input" id="y_input_label">y:</label>
            </td>
            <td>
                <input type="text" id="y_input" name="y_input">
            </td>
        </tr>
        <tr>
            <td>
                <label for="r_checkbox_table">R:</label>
            </td>
            <td>
                <table id="r_checkbox_table">
                    <tr>
                        <td>
                            <label for="r_checkbox_1">1</label>
                        </td>
                        <td>
                            <input type="checkbox" name="r_checkbox" id="r_checkbox_1" value="1" onclick=r_checkbox_click(id)>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="r_checkbox_2">1.5</label>
                        </td>
                        <td>
                            <input type="checkbox" name="r_checkbox" id="r_checkbox_2" value="1.5" onclick=r_checkbox_click(id)>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="r_checkbox_3">2</label>
                        </td>
                        <td>
                            <input type="checkbox" name="r_checkbox" id="r_checkbox_3" value="2" onclick=r_checkbox_click(id)>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="r_checkbox_4">2.5</label>
                        </td>
                        <td>
                            <input type="checkbox" name="r_checkbox" id="r_checkbox_4" value="2.5"  onclick=r_checkbox_click(id)>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <lagetbel for="r_checkbox_5">3</lagetbel>
                        </td>
                        <td>
                            <input type="checkbox" name="r_checkbox" id="r_checkbox_5" value="3" onclick=r_checkbox_click(id)>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <button type = "button" onclick="shoot()">СТРЕЛЯЯЯЯЯЯЯЙ</button>
</form>
</div>
<p id="script_time_start"></p>
<p id="script_time"></p>
<div> <link rel="stylesheet" href="css/shoot.css">
<table id="hits_table">
    <thead id="hits_table_head"  class = "table_header">
        <tr>
            <td>X</td>
            <td>Y</td>
            <td>R</td>
            <td>Result</td>
        </tr>
    </thead>
    <tbody id="hits_table_body">

    </tbody>
</table>
</div>
</body>
<script type="text/javascript" src="js/shoot.js"></script>
<script type="text/javascript" src="js/r_checkbox.js"></script>
<script type="text/javascript" src="js/controller.js"></script>
<script type="text/javascript" src="js/canvas_controller.js"></script>
</html>