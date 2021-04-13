<?php
    if ($_POST["usuario_txt"]=="bextlan" && $_POST["password_txt"] == "12345") {
        //inicio de sesion
        session_start();

        //Declaracion de variables de sesion
        $_SESSION["autentificado"] = true;
        $_SESSION["usuario"] = $_POST["usuario_txt"];

        header("Location: archivo-protegido.php");
    }else{
        header("Location: index.php?error=si");
    }


?>