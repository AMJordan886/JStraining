
const d = document,
  w = window;

import hamburgerMenu from "./hamburger_dom.js";
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
});


/* 
PARA LLAMAR A CLASES DESDE DOM ES
.LOQUESEA

PARA IDS VALE CON EL NOMBRE
LOQUESEA

PARA QUERYSELECTOR
#LOQUESEA
*/



import relojAlarma from "./alarma.js";

d.addEventListener("DOMContentLoaded", (e) => {
  relojAlarma(".iniciarReloj", ".reloj", ".detenerReloj", ".iniciarAlarma", ".detenerAlarma");
});



import { eventosTeclado } from "./eventosteclado.js";
d.addEventListener("keydown", (e) => {
  //eventosTeclado(".frame", ".ball");
  eventosTeclado(e);
});


/*
import countDown from "./countdown.js";
d.addEventListener("DOMContentLoaded", (e) => {
  //const idSeccion = d.getElementById("#seccion3");
  let time = countDown("#seccion3 div");  
});
//let timer = setInterval(function() {countDown},1000);
*/
import countDown from "./countdown.js";
d.addEventListener("DOMContentLoaded", (e) => {
  countDown("counter",
    "Dec 08,2021 12:00:00",
    "Feliz Cumpleaños pringao, soy tu yo del pasado, espero que sepas programar ya so payaso o te meto un meco que te reviento");
});
/*
function inicioReloj(inicioReloj) {
  //d.addEventListener("DOMContentLoaded");
  d.addEventListener("click", (e) => {
    console.log("funcando");
  });
}
*/





/************ TOP BUTTON ************/

import { topBtn } from "./top-button.js";
window.addEventListener("scroll", (e) => {
  let scrollY = window.scrollY;
  topBtn(scrollY)
});


import { disappear } from "./top-button.js";
d.addEventListener("DOMContentLoaded", (e) => {
  disappear("topButton");
});



/************ DARK MODE ************/

import darkMode from "./darkMode.js";


d.addEventListener("DOMContentLoaded", (e) => {
});

//Esto está fuera porque desde el archivo que importa ya se está mencionando al DOMContentLoaded y no puede haber uno dentro de otro
darkMode(".darkmodebtn", ".backgroundCol");








/************  RESPONSABLE AND RESPONSIVE DESIGN  ************/

import responsiveMedia from "./responsive.js";

d.addEventListener("DOMContentLoaded", (e) => {
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/l6oRFlp2yCo" target="blank">Link a Youtube</a>`,
    `<iframe width="600" height="450" src="https://www.youtube.com/embed/l6oRFlp2yCo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );

  responsiveMedia(
    "googlemaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/RUu56DKtHEgQji22A" target="blank">Link a Google Maps</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235054.1585286506!2d-69.12512442771134!3d-23.06782809196602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96af46527fef1c47%3A0x34dbbb7aa8223dc!2sDesierto%20de%20Atacama!5e0!3m2!1ses!2ses!4v1612003421563!5m2!1ses!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  );
});




/************  RESPONSIVE TESTER  ************/
import responsiveTester from "./responsive_tester.js";

d.addEventListener("DOMContentLoaded", (e) => {
  responsiveTester(
    "url_tester",
    "ancho_tester",
    "alto_tester",
    "submit_tester",
    "close_tester"
  );
})


/************  USER AGENT  ************/
import userAgent from "./detecciondispositivos.js";

d.addEventListener("DOMContentLoaded", (e) => {
  userAgent(
    "user_agent",
    "platform",
    "navigator",
    "content_navigator",
    "content_platform"
  );
});


/************  DETECCION DE RED  ************/
import connection from "./deteccion_conexion.js"

connection()



/************  CAMARA WEB  ************/

import camera from "./deteccion_camara.js"
d.addEventListener("DOMContentLoaded", (e) => {
  camera("video")
})



/************  GEOLOCALIZACION  ************/

import geolocation from "./geolocation.js";

d.addEventListener("DOMContentLoaded", (e) => {

  geolocation(
    "latitude",
    "longitude",
    "precision",
    "map_link"
  );

})



/************  FILTRO REACTIVO  ************/
//jon cabron
// contento textual
//eventos teclado
//filtro input
import search from "./busqueda_filtrada.js"

d.addEventListener("DOMContentLoaded", (e) => {

  /* if (e.keyCode == 38){
    console.log(`esto funca o k flecha arriba`)
  } */
  search("#search-filter", ".card");
  
});




/************  SORTEO DIGITAL  ************/

import sorteo from "./sorteo.js"

d.addEventListener("DOMContentLoaded", (e) => {

  //sorteo("sorteodigital");
  sorteo("sorteo_javascript", "sorteo_php", "sorteo_java", "sorteo_c", "sorteo_python", "sorteo_ruby", "sorteo_go", "sorteo_visualbasic", "sorteo_rust", "sorteo_perl","sorteobutton");

})






// Ultimo ejercicio del DOM hecho es: 32, por hacer el 94 de la camara












/*
//************  DNI VALIDATION  ************
import dniValidation from "./dnivalidation.js";

d.addEventListener("DOMContentLoaded", (e) => {
  dniValidation(
    "input_dni",
    "submit_dni",
    "validatorText"
    );
});
*/

function dniValidation(input, submitBtn, validatorText) {
  const $inputValue = d.getElementById(input),
    $submitBtn = d.getElementById(submitBtn),
    $validatorText = d.getElementById(validatorText);


  d.addEventListener("DOMContentLoaded", (e) => {
    dniValidation(
      "input_dni",
      "submit_dni",
      "validatorText"
    );
  });

  var regExp = /^\d{8}[a-zA-Z]$/;
  var data = $inputValue.value;

  //$submitBtn.addEventListener("click", (e) => {
  data = $inputValue.value;
  let letraDNI = data.substring(8, 9).toUpperCase(),
    numDNI = parseInt(data.substring(0, 8)),
    letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'],
    letraCorrecta = letras[numDNI % 23],
    CorrectLetter = letraCorrecta == letraDNI;

  regExp.test(data) == true;

  if (data.length == 9) {
    if (CorrectLetter == true) {
      $validatorText.innerHTML = `<div>La letra introducida coincide con la generada</div>`;//...
      alert("COINCIDE")
    } else {
      $validatorText.innerHTML = `<div>La letra introducida no coincide con la generada</div>`;//...
      alert("NO COINCIDE")
    }
  }
  if (data.length !== 9) {
    $validatorText.innerHTML = `<div>El dato introducido ha de tener 9 caracteres</div>`;
  }
  //})
};