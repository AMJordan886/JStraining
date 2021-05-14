<?php
include("connection.php");
//Subir imagen y que lea dimensiones




//La imagen tiene que procesarse en otro archivo con funcion
$type = $_FILES["photo_fls"]["type"];
$file = $_FILES["photo_fls"]["tmp_name"];
//$image = upload_image($type,$file,);

//frontend ha de ser enctype establecido en  multipart / form-data 


//Aunque poner un select con las medidas a las que se lo paso sería mejor y mas facil de presupuestar
//en plan 20x30 maximo
//

//Variables de dimensiones alto y ancho respectivamente
//DEBEN MOSTRAR LAS DIMENSIONES MAXIMAS DE IMPRESION QUE DEBERIAN SER 220 X 300 APROX
$height = $_POST["height_txt"];
$width = $_POST["width_txt"];

//Button select con color o sin el
$photo = $_POST["photo_rdo"];
//Aqui se podria mostrar una miniatura en blanco y negro o color dependiendo lo que quiera

// lista tipo de acabado normal, madera, premium con epoxy
$finish = $_POST["finish_slc"];


//email o telefono para contacto con el cliente
$email = $_POST["email_txt"];
$phone = $_POST["phone_txt"];





$con->close();
header("Location: ../index.php"); //variable get y tal

include("processing-img.php");
?>