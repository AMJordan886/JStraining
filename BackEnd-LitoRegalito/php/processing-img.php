<?php
// El usuario deberia estar registrado para que se le sugieran regalos en determinadas fechas
// en el create user debe de poner las fechas de sus allegados para avisarle por mail un tiempo antes
// una vez registrado que pueda subir las fotos
//
// En vez del mail que envíe la foto directamente que cojones
//




include("dimensions-form.php");

// https://stackoverflow.com/questions/9799343/how-can-i-use-getimagesize-with-files
function processing_img($type, $image, $email){


    if(strstr($type,"image")) {
        if(strstr($type,"jpeg"))
            $ext = ".jpg";
        else if (strstr($type,"gif"))
            $ext = ".gif";
        else if (strstr($type,"png"))
            $ext = ".png";
    }

    $filesize = getimagesize($image);
    $width = $filesize[0];
    $height = $filesize[1];
    $max_width = 2362; //20*30cm -> 2362*3543px  ppp300

    if($width>$max_width){
        $new_width = $max_width;
        $new_height = ($height/$width)*$new_width;

        $new_image_adjust = imagecreatetruecolor($new_width,$new_height);
    }






    $dimensions = $_FILES["photo_fls"]["tmp_name"];
    $size = getimagesize($dimensions);

    if ($size){}; //buscar atributos de ancho y alto en list

}










function upload_image(){
}


?>