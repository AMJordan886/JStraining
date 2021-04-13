<?php include ("sesion.php"); ?>

Bienvenido:

<?php echo $_SESSION["usuario"]; ?>

<br><br>
Estas en una pagina segura con sesiones en PHP
<br><br>
<a href="archivo-protegido2.php">Ir a otra pagina</a>
<br><br>
<a href="salir.php">Salir</a>





