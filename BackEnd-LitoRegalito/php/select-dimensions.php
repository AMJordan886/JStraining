<?php
include("processing-img.php");

//Aqui deberia determinar las medidas posibles para la litofania segun lo que haya enviado
//y mostrarlas por un select
    $dimensions = $_FILES["photo_fls"]["tmp_name"];
    $size = getimagesize($dimensions);
    $width_img = $size[0];
    $height_img = $size[1];



//si la imagen subida es cuadrdada que muestre unos select cuadrados y sino pues rectangulares como maximo de 20x30 e ya coño
if ($width_img==$height_img) {
    

}


?>