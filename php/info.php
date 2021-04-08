<?php
phpinfo(); //funcion que muestra la info

echo "Hola mundo";
echo "Hola<br>mundo<br>cruel";

$nombre = "Jonathan";
$Nombre = "Ulises";

echo $nombre."&nbsp;".$Nombre;    //"&nbsp;"   esto es un espacio en blanco en html
$num1 =5;
$num2 = 78;

$suma = $num1 + $num2;
echo $suma;
echo "<br>";
echo "Hola<br>Cruel<br>Mundo";
echo "<br/>";
echo "<br />La variable \$suma tiene el valor de $suma";
echo "<br>";

$modulo = $num2 % 2;
if ($modulo == 0){
    echo "El n&uacute;mero es Par";
    echo "<br>";
} else {
    echo "El n&uacute;mero es Impar";
}


for ($i=0; $i <= 10; $i++){
    echo $i."<br>";
}
?>