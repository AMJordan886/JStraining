<?php

//EN EL TUTORIAL VA TODO CON mysql_ pero en las nuevas versiones es mysqli_
//Pasos para conectarme a una BD MySQL con PHP
//1) Conectarme al BD, mysqli_connect necesita 3 datos:
    //1-Servidor
    //2-Usuario de la BD
    //3-Necesita el Password de la BD

$conexion = mysqli_connect("localhost","root","") or die("No se puedo conectar con el servidor de BDs");
echo "estoy conectado a mysql<br>";

//2) Seleccionar la BD con la que vamos a trabajar
mysqli_select_db($conexion, "mis_contactos") or die("No se pudo seleccionar la BD");
echo "Base de datos contactos seleccionada<br>";
//https://stackoverflow.com/questions/13979210/mysqli-select-db-expects-parameter-1-to-be-mysqli-string-given
//https://stackoverflow.com/questions/26639619/warning-mysqli-query-expects-parameter-1-to-be-mysqli-string-given-in

//3) Crear una consulta SQL
$consulta = "SELECT * FROM pais";


//4) Ejecutar la consulta SQL
//mysqli_query necesita 2 parametros: la conexion y la consulta
$ejecutar_consulta = mysqli_query($conexion,$consulta) or die("No se ha ejecutado la consulta a la BD");

//5) Mostrar el resultado de ejecutar la consulta, dentro de un ciclo y en una variable voy a ingresar la funcion mysql_fetch_array
while($registro = mysqli_fetch_array($ejecutar_consulta)){
    echo $registro["id_pais"]." - ".$registro["pais"]."<br>";
}

//6) Cerrar la conexion a la BD
mysqli_close($conexion) or die ("Ocurrio un error");
echo "Conexion cerrada";



//MIN 32
?>