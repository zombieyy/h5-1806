<?php
 $uname = isset($_GET["uname"])? $_GET["uname"] : "";
    $arr = array("王尼玛","幸运的lemon","丑陋的老谢");

    $res = in_array($uname,$arr);
    if($res == true){
        echo "true";
    }else{
        echo "false";
    }
?>