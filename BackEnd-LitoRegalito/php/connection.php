<?php 

function connect(){

    $server = "localhost";
    $user = "root";
    $pass = "";
    $db = "litoregalitodb";
    
    $connection = new mysqli($server,$user,$pass,$db) or die ("Don't connect to MySql server");
    return $connection;
}

$con = connect();


?>