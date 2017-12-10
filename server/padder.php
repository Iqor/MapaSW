<?php
    $metodo = $_GET["metodo"];
    $url = "http://api.tcm.ce.gov.br/sim/1_0/".$metodo.".json?";
    $_GET["metodo"] = NULL;
    $counter = 0;
    foreach($_GET as $key => $value){
        if($counter > 0){
            $url = $url."&".$key."=".$value;
        }
        else{
            $url = $url.$key."=".$value;
        }
        $counter++;
    }
    $json = file_get_contents($url);
    $decode = json_decode($json);
    echo $json;
    
    
?>