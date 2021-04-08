<?php

    /* 
    $_FILES genera 5 propiedades
    name, type,
    tmp_name archivo en bruto antes de subir al servidor,
    error con valor boolean 0ok 1errortrue,
    size -> tamaño en bytes
    */

    foreach($_FILES["archivo_fls"] as $clave => $valor){
        echo "Propiedad: $clave  --- Valor: $valor<br>";
    };

    $archivo = $_FILES["archivo_fls"]["tmp_name"];
    $destino = "files/".$_FILES["archivo_fls"]["name"];

    /* move_uploaded_file($archivo, $destino);
    echo "Archivo subido 😁😀"; */

    if($_FILES["archivo_fls"]["type"]=="text/plain"){
        move_uploaded_file($archivo, $destino);
        echo "Archivo subido con &eacute;xito";
    } else {
        echo "Solo se permite subir archivos de tipo 'Texto plano'<br>
        <a href=\"enviararchivo.php\">REGRESAR</a>";
    };

?>