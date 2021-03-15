/* GEOLOCALIZACION

TU POSICION ACTUAL ES:
LATITUD:
LONGITUD:
PRECISION:

VER EN GOOGLE MAPS     que cabron el puto jon
*/

//VIDEO 95 VISTO SOLO EL CODIGO, SIN VER EL DESARROLLO, TENGO PRISA POR SEGUIR CON FETCH





const d = document,
    w = window,
    n = navigator;

export default function geolocation(lati, long, prec, maplink) {

    let $latitude = d.getElementById(lati),
        $longitude = d.getElementById(long),
        $precision = d.getElementById(prec);
        let $maplink = d.getElementById(maplink);

    function location(position) {
        let lat = position.coords.latitude,
            lon = position.coords.longitude,
            pres = position.coords.accuracy;

        $latitude.innerHTML = `Latitud: ${lat}`;
        $longitude.innerHTML = `Longitud: ${lon}`;
        $precision.innerHTML = `Your precision is: ${pres}`;
        $maplink.innerHTML = `<a href="http://maps.google.com/?q=${lat},${lon}">Abrir en google maps</a>`;
    }

    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      };

    n.geolocation.getCurrentPosition(location, error)
}