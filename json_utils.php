<?
function encode_json_from_array($array){
    $ret = "[";

    $length = count($array);
    for($i = 0; $i < $length; $i++){
        $row = $array[$i];
        $row_json = "[$row[0] , $row[1] ,  $row[2] , $row[3]]";
        $ret .= $row_json;
        if ($length - $i > 1){
            $ret .= ",";
        }
    }
    $ret .= "]";
    return $ret;

}

function encode_json($x, $y, $r, $isHit, $time_start, $script_time, $array){
    $encoded_array = encode_json_from_array($array);
    return "{
        \"time_start\": \"$time_start\",
        \"script_time\": \"$script_time\",
        \"last_hit\": {
            \"x\": $x,
            \"y\": $y,
            \"r\": $r,
            \"isHit\": $isHit
        },
        \"hits\": $encoded_array
    }";

}