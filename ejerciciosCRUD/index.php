<!-- Se debe hacer a traves de Ajax sin que cambie el link, para eso debo construir primero mi API en la raspi y terminar PHP -->


<?php

error_reporting(E_ALL ^ E_NOTICE);
$op = $_GET["op"];

switch ($op) {
    case 'home':
        $contenido = "assets/home.html";
        $titulo = "Home";
        break;

    case 'acerca':
        $contenido = "assets/acerca.html";
        $titulo = "Acerca de nosotros";
        break;
    case 'servicios':
        $contenido = "assets/servicios.html";
        $titulo = "Servicios";
        break;
    case 'contacto':
        $contenido = "assets/contacto.php";
        $titulo = "Contacto";
        break;
    
    default:
        $contenido = "assets/home.html";
        $titulo = "Home v1";
        break;
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $titulo; ?></title>
    <link href="styles.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>
    <header class="header">
        <section class="header-content container">
          <article class="logo">
            <img src="https://jonmircha.com/img/kEnAi.svg" alt="kEnAi">
          </article>
          <nav class="menu">
            <a href="?op=home">Home</a>
            <a href="?op=acerca">Acerca</a>
            <a href="?op=servicios">Servicios</a>
            <a href="?op=contacto">Contacto</a>
          </nav>

           

        </section>

        
      </header>

      <main class="container">

       <section>
                <?php include($contenido);?>
       </section>


      </main>


    <footer class="footer container">
        <p>
            <small>sitio diseñado por kEnAi</small>
        </p>
    </footer>
</body>
</html>