<!DOCTYPE html>
<html lang="es">
<head>
    <title>Formulario validaci&oacute;n de datos</title>
    <meta charset="UTF-8" />
    
    <script>
        function validarDatosGET(){
            let verificar = true;
             if (!document.valida_datos_get_frm.nombre_txt.value) {
                alert("Debe introducir un dato GET");
                document.valida_datos_get_frm.nombre_txt.focus();
                verificar = false;
            } else if (!document.valida_datos_get_frm.password_txt.value) {
                alert("Debe introducir un password GET");
                document.valida_datos_get_frm.password_txt.focus();
                verificar = false;
            } else if (!document.valida_datos_get_frm.sexo_rdo[0].checked && !document.valida_datos_get_frm.sexo_rdo[1].checked) {
                alert("Debe seleccionar un sexo GET");
                document.valida_datos_get_frm.sexo_rdo[0].focus();
                verificar = false;
            }

        if (verificar) {
            document.valida_datos_get_frm.submit();
        }
    }

    
    
    
    
    function validarDatosPOST(){
        let verificar = true;
        if (!document.valida_datos_post_frm.nombre_txt.value) {
            alert("Debe introducir un dato POST");
            document.valida_datos_post_frm.nombre_txt.focus();
            verificar = false;
        } else if (!document.valida_datos_post_frm.password_txt.value) {
            alert("Debe introducir un password POST");
            document.valida_datos_post_frm.password_txt.focus();
            verificar = false;
        } else if (!document.valida_datos_post_frm.sexo_rdo[0].checked && !document.valida_datos_post_frm.sexo_rdo[1].checked) {
            alert("Debe seleccionar un sexo POST");
            document.valida_datos_post_frm.sexo_rdo[0].focus();
            verificar = false;
        }
        
        if (verificar) {
            document.valida_datos_post_frm.submit();
        }
    }
    




    window.onload = function(){
        document.getElementById("enviar-get").onclick = validarDatosGET;
        document.getElementById("enviar-post").onclick = validarDatosPOST;

    }
    </script>



</head>
<body>
    <hgroup><h1>Formulario de Datos GET</h1></hgroup>
    <form name="valida_datos_get_frm" action="validar-datos.php" method="GET" enctype="application/x-www-form-urlencoded">
        Ingresa tu nombre:
        <input type="text" name="nombre_txt">
        <br><br>
        Ingresa tu password:
        <input type="password" name="password_txt">
        <br><br>
        <input type="radio" name="sexo_rdo" value="M">
        Masculino&nbsp;
        <br><br>
        <input type="radio" name="sexo_rdo" value="F">
        Femenino&nbsp;
        <br><br>
        <input type="hidden" name="enviar_hdn" value="get">
        <input type="button" id="enviar-get" name="enviar_btn" value="Enviar por GET">
    </form>





        <hgroup><h1>Formulario de Datos POST</h1></hgroup>
    <form name="valida_datos_post_frm" action="validar-datos.php" method="POST" enctype="application/x-www-form-urlencoded">
        Ingresa tu nombre:
        <input type="text" name="nombre_txt">
        <br><br>
        Ingresa tu password:
        <input type="password" name="password_txt">
        <br><br>
        <input type="radio" name="sexo_rdo" value="M">
        Masculino&nbsp;
        <br><br>
        <input type="radio" name="sexo_rdo" value="F">
        Femenino&nbsp;
        <br><br>
        <input type="hidden" name="enviar_hdn" value="post">
        <input type="button" id="enviar-post" name="enviar_btn" value="Enviar por POST">
    </form>


</body>
</html>