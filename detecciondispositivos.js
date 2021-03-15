const d = document;



let $userAgent = navigator.userAgent,
    $platform = navigator.platform;

export default function userAgent (userAgent, platform, navigator, contentNavigator, contentPlatform) {

    //d.addListener;
    d.getElementById(userAgent).innerHTML = `<div>User Agent:  ${$userAgent}</div>`;
    d.getElementById(platform).innerHTML = `<div>Plataforma:  ${$platform}</div>`;
    

}
console.log(navigator.platform);



/* PARA HACERLO FETEN HAY QUE VER EL VIDEO 92 DE JON MIRCHA, SON LAS 6 DE LA MAÑANA Y PASO DE COPIAR TODO. MAS O MENOS SE LO QUE HACE EN EL VIDEO POR LO QUE ME VALE MAS ENTENDERLO QUE COPIARLO TODO */