<?php

function borrar_imagenes($ruta,$extension){
    switch ($extension) {
        case '.jpg':
            if (file_exists($ruta.".png"))
                unlink($ruta.".png");
            if (file_exists($ruta.".gif"))
                unlink($ruta.".gif");
            break;
        
        case '.gif':
            if (file_exists($ruta.".png"))
                unlink($ruta.".png");
            if (file_exists($ruta.".jpg"))
                unlink($ruta.".jpg");
            break;
        case '.png':
            if (file_exists($ruta.".jpg"))
                unlink($ruta.".jpg");
            if (file_exists($ruta.".gif"))
                unlink($ruta.".gif");
            break;
    }
}


//Funcion para subir la imagen del perfil del usuario
function subir_imagen($tipo,$imagen,$email){
    //strstr ($cadena1,$cadena2) sirve para evaluar si en la primera cadena de texto existe la segunda cadena de texto
    //Si dentro del tipo de archiv se encuentra la palabra image significa que el archivo es una imagen
    if (strstr($tipo,"image")){
        //El archivo si es una imagen
        if (strstr($tipo,"jpeg")) //cuidado con el formato jpg
            $extension = ".jpg";
        else if (strstr($tipo,"gif"))
            $extension = ".gif";
        else if (strstr($tipo,"png"))
            $extension = ".png";
        
        //para saber si la imagen tiene el ancho correcto que es de 420px
        $tam_img = getimagesize($imagen);
        $ancho_img = $tam_img[0];
        $alto_img = $tam_img[1];
        $ancho_img_deseado = 420;

        //Si la imagen es mayor en su ancho que 420px, reajusto su tamaño
        if ($ancho_img>$ancho_img_deseado){
            //Por una regla de 3 obtengo el alto de la imagen de manera proporcional al ancho nuevo que será de 420px
            $nuevo_ancho_img = $ancho_img_deseado;
            $nuevo_alto_img = ($alto_img/$ancho_img)*$nuevo_ancho_img;

            //Creo una imagen en color real con las nuevas dimensiones
            $img_reajustada = imagecreatetruecolor($nuevo_ancho_img,$nuevo_alto_img);

            //Creo una imagen basada en la original, dependiendo de su extension es el tipo que crearé
            switch ($extension){
                case ".jpg":
                    $img_original = imagecreatefromjpeg($imagen);
                    //Reajusto la imagen nueva con respecto a la original
                        imagecopyresampled($img_reajustada, $img_original, 0,0,0,0,$nuevo_ancho_img,$nuevo_alto_img,$ancho_img,$alto_img);
                    //Guardo la imagen reescalada en el servidor
                        $nombre_img_ext = "../img/fotos/".$email.$extension;
                        $nombre_img = "../img/fotos/".$email;
                        imagejpeg($img_reajustada,$nombre_img,100);
                    //Ejecuto la funcion para para borrar posibles imagenes dobles para el perfil
                    borrar_imagenes($nombre_img,".jpg");
                    break;

                    case ".gif":
                        $img_original = imagecreatefromgif($imagen);
                        //Reajusto la imagen nueva con respecto a la original
                            imagecopyresampled($img_reajustada, $img_original, 0,0,0,0,$nuevo_ancho_img,$nuevo_alto_img,$ancho_img,$alto_img);
                        //Guardo la imagen reescalada en el servidor
                            $nombre_img_ext = "../img/fotos/".$email.$extension;
                            $nombre_img = "../img/fotos/".$email;
                            imagegif($img_reajustada,$nombre_img,100);
                        //Ejecuto la funcion para para borrar posibles imagenes dobles para el perfil
                        borrar_imagenes($nombre_img,".gif");
                        break;

                        case ".png":
                            $img_original = imagecreatefrompng($imagen);
                            //Reajusto la imagen nueva con respecto a la original
                                imagecopyresampled($img_reajustada, $img_original, 0,0,0,0,$nuevo_ancho_img,$nuevo_alto_img,$ancho_img,$alto_img);
                            //Guardo la imagen reescalada en el servidor
                                $nombre_img_ext = "../img/fotos/".$email.$extension;
                                $nombre_img = "../img/fotos/".$email;
                                imagepng($img_reajustada,$nombre_img);
                            //Ejecuto la funcion para para borrar posibles imagenes dobles para el perfil
                            borrar_imagenes($nombre_img,".png");
                            break;
            }
        }
        else{
            //no se reajusta y se sube
            $destino = "../img/fotos/".$email.$extension;

            //Se sube la foto
            move_uploaded_file($imagen, $destino) or die ("No se pudo subir la imagen al servidor");

            //Ejecuto la funcion para borrar posibles imagenes dobles para el perfil
            $nombre_img = "../img/fotos".$email;
            borrar_imagenes($nombre_img,$extension);
        }
        
        //Asigno el nombre de la foto que se guardará en la BD como cadena de texto
        $imagen = $email.$extension;
        return $imagen;
        }
        else
        {
            return false;
    }
}

?>