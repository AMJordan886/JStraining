<?php
$conexion = mysqli_connect("localhost","root","") or die ("No se pudo conectar con el servidor de BD");
echo "Conectado al servidor de base de datos MySQL <br>";

mysqli_select_db($conexion, "mis_contactos") or die ("No se pudo seleccionar la Base de datos");
echo "Base de datos seleccionada: 'mis_contactos'<br>";

echo "<h1>Las 4 operaciones b&aacute;sicas a una BD</h1>";



/* 
echo "<h2>1) Inserci&oacute;n de datos</h2>";
//INSERT INTO nombre_tabla (campos_tabla) VALUES (valores_campos);
$consulta = "INSERT INTO contactos (email,nombre,sexo,nacimiento,telefono,pais,imagen) 
VALUES ('ejemplo@altavista.com','example','M','1980-11-09','123456789','España','ejemplo.png')";

$ejecutar_consulta = mysqli_query($conexion,$consulta) or die ("No se ha ejecutado la consulta INSERT");
echo "Se han insertado los datos  :)  <br>";
 */





echo "<h2>2) Eliminaci&oacute;n de datos</h2>";
// DELETE FROM nombre_table WHERE campo = valor;
$consulta = "DELETE FROM contactos WHERE email = 'example@yaho.com'";

$ejecutar_consulta = mysqli_query($conexion, $consulta) or die("No se ha ejecutado la consulta DELETE");
echo "Datos eliminados =( <br>";






echo "<h2>3) Modificacion de datos</h2>";
//UPDATE nombre_tabla SET nombre_campo = valor_campo, otro_campo = otro_valor WHERE campo = valor;
$consulta = "UPDATE contactos SET email = 'ejemplo@gmail.com', nombre = 'Ejemplo', imagen = 'example.png' WHERE email = 'example@yahoo.com'";

$ejecutar_consulta = mysqli_query($conexion, $consulta) or die("No se ha ejecutado la consulta UPDATE");
echo "Los datos han sido modificados<br>";






echo "<h2>4) Consulta (busqueda) de datos</h2>";
//SELECT * FROM nombre_tabla WHERE campo = valor;
$consulta = "SELECT * FROM contactos WHERE email = 'ejemplo@altavista.com' ";
$ejecutar_consulta = mysqli_query($conexion, $consulta);
echo "<h3>Consulta que trae todos los registros de la tabla</h3>";
while($registro = mysqli_fetch_array($ejecutar_consulta)){
    echo $registro["email"]." --- "."<br>";
    echo $registro["nombre"]." --- ";
    echo $registro["sexo"]." --- ";
    echo $registro["nacimiento"]." --- ";
    echo $registro["telefono"]." --- ";
    echo $registro["pais"]." --- ";
    echo $registro["imagen"]." --- ";
    echo "<br>";
}





$consulta = "SELECT * FROM contactos WHERE nombre = 'example' ";
$ejecutar_consulta = mysqli_query($conexion, $consulta);
echo "<h3>Consulta que trae los registros de la tabla con el nombre igual a 'example'</h3>";
while($registro = mysqli_fetch_array($ejecutar_consulta)){
    echo $registro["email"]." --- "."<br>";
    echo $registro["nombre"]." --- ";
    echo $registro["sexo"]." --- ";
    echo $registro["nacimiento"]." --- ";
    echo $registro["telefono"]." --- ";
    echo $registro["pais"]." --- ";
    echo $registro["imagen"]." --- ";
    echo "<br>";
}



$consulta = "SELECT * FROM contactos WHERE nombre = 'example' AND imagen = 'ejemplo.png' ";
$ejecutar_consulta = mysqli_query($conexion, $consulta);
echo "<h3>Consulta que trae los registros de la tabla con el valor nombre:example y la imagen:ejemplo.png</h3>";
while($registro = mysqli_fetch_array($ejecutar_consulta)){
    echo $registro["email"]." --- "."<br>";
    echo $registro["nombre"]." --- ";
    echo $registro["sexo"]." --- ";
    echo $registro["nacimiento"]." --- ";
    echo $registro["telefono"]." --- ";
    echo $registro["pais"]." --- ";
    echo $registro["imagen"]." --- ";
    echo "<br>";
}









mysqli_close($conexion) or die ("Internal server error");
echo "<br><br>Conexion Cerrada";
?>