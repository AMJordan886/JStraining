
<?php


/* 


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
//header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
//header("Access-Control-Max-Age: 3600");
//header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if (isset($_POST["acerca"])) {
        echo "<h2>if acerca hecho</h2>";
        //header("Location: assets/acerca.html");
        //include ("assets/acerca.html");
    } else {
        echo "<h2>else acerca hecho</h2>";
        //header("Location: assets/contacto.html");
        //include ("assets/contacto.html");
    } 
    
    */
?>



<?php

error_reporting(E_ALL ^ E_NOTICE);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

/* if (isset($_GET["enviar_btn"])){
    echo "Los datos los env&iacute;aste por el m&eacute;todo GET, los datos son: <br><br> El nombre es: ".$_GET["nombre_txt"]."<br>El password es: ".$_GET["password_txt"];
} else if(isset($_POST["enviar_btn"])) {
    echo "Los datos los env&iacute;aste por el m&eacute;todo POST, los datos son: <br><br> El nombre es: ".$_POST["nombre_txt"]."<br>El password es: ".$_POST["password_txt"];        
} */


if (isset($_REQUEST['acerca'])){
    $acerca = $_GET["acerca"];
    echo "<h3>algo $acerca</h3>";
    //header("location: assets/contacto.html");
} else {
    echo "asereje ja de je";
}


/* 
if (isset($_POST["acerca"])) {
    echo "<h2>if acerca hecho</h2>";
    //header("Location: assets/acerca.html");
    //include ("assets/acerca.html");
} else {
    echo "<h2>else acerca hecho</h2>";
    //header("Location: assets/contacto.html");
    //include ("assets/contacto.html");
}  */



?>
