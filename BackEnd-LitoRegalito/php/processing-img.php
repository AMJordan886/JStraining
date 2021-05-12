<?php
include("dimensions-form.php");

// https://stackoverflow.com/questions/9799343/how-can-i-use-getimagesize-with-files
function processing_img(){
    $dimensions = $_FILES["photo_fls"]["tmp_name"];
    $size = getimagesize($dimensions);

    if ($size){}; //buscar atributos de ancho y alto en list

}


function upload_image(){

}


?>