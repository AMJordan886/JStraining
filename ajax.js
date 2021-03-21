/*
IMPORTANTE:

EN LA CLASE 112 AL UTILIZAR EL LOCALHOST:3000 SI NO PARA EL SERVIDOR CON CTRL+C     =>

netstat -ano | findstr :3000     //el puerto que sea y ahora desde el ID que nos da matamos el proceso
taskkill /F /PID 50884           //O el id que sea

el puerto por defecto 3000 es un puerto conflictivo porque desde ahi se levantan multiples servicios
*/



/* CLASE 106 AJAX */
(() => {  //ESTO ES UNA FUNCION ANONIMA AUTOEJECUTABLE, ESTÁ EN LAS CLASES DE JS - 32

    //Una peticion AJAX consta de cuatro partes, definir el objeto XMLHttpRequest (1)
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById('xhr'),
        $fragment = document.createDocumentFragment(); //Los fragmentos son utiles y necesarios dado que lo que hace es que cuando se llenan van entregando peticiones, es como una especie de buffer

    //Interesante la respuesta de este console.log
    //onreadystatechange es el mas utilizado
    //status es el codigo de respuesta HTTP como por ejemplo un 404

    //La asignación del evento (2)
    xhr.addEventListener("readystatechange", e => {
        //Este codigo lo vamos a ejecutar solamente cuando la propiedad readyState sea diferente de 4
        if (xhr.readyState !== 4) return;
        // Esto basicamente nos dice que no haga nada hasta que no se complete el proceso porque se estaba ejecutando el console.log(xhr) cuatro putas veces:
        //READY_STATE_UNINITIALIZED = 0
        //READY_STATE_LOADING = 1
        //READY_STATE_LOADED = 2
        //READY_STATE_INTERACTIVE = 3
        //READY_STATE_COMPLETE = 4
        //console.log(xhr);

        if (xhr.status >= 200 && xhr.status < 300) {
            //console.log("Éxito");
            //console.log(xhr.responseText);
            //$xhr.innerHTML = xhr.responseText;
            let json = JSON.parse(xhr.responseText);
            //console.log(json);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);

        } else {
            console.log("Error");
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }


        //console.log("Este mensaje cargará de cualquier forma");
    });


    //  (3)  El open con el metodo GET en este caso, hay varios
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    //El send (4)
    xhr.send();
})();



/* CLASE 107 API FETCH */
(() => {      //ESTO ES UNA FUNCION ANONIMA AUTOEJECUTABLE, ESTÁ EN LAS CLASES DE JS - 32
    const $fetch = document.getElementById('fetch'),
        $fragment = document.createDocumentFragment(); //Los fragmentos son utiles y necesarios dado que lo que hace es que cuando se llenan van entregando peticiones, es como una especie de buffer


    fetch("https://jsonplaceholder.typicode.com/users")    //como el if-else de ajax y la respuesta fuera de las condiciones seria el finally   -   Esto son como las promesas, video 47 JS

        /* .then((res) => {
            console.log(res);
            return res.ok ? res.json() : Promise.reject(res);
        }) */

        .then((res) => res.ok ? res.json() : Promise.reject(res)) // Esto es lo mismo que lo comentado arriba

        .then((json) => {
            //console.log(json)
            //$fetch.innerHTML = json

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetch.appendChild($fragment);
        })
        .catch((err) => {
            //console.log("Estamos en el catch",err)
            let message = err.statusText || "Ocurrió un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            //console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch")
        });
})();



/* CLASE 108 API FETCH + ASYNC-AWAIT*/
(() => {
    const $fetchAsync = document.getElementById('async'),
        $fragment = document.createDocumentFragment();


    async function getData() {
        try {
            let res /*res de respuesta*/ = await fetch("https://jsonplaceholder.typicode.com/users"),                //await porque espera la respuesta del servidor - Metodo por defecto GET aunque en crud_fetch lo he puesto y no va
                json = await res.json();   //Metodo .json() o .text() segun lo que estemos esperando recibir            //y await porque espera a la respuesta para convertir a formato Json


            console.log(res, json); //aqui hasta que no carga no muestra una mierda

            if (!res.ok) throw { status: res.status, statusText: res.statusText } //El throw es como un return que manda al catch

            json.forEach((el /*Esto es cada elemento que recibe, el de elemento pero puede llamarse como quieras, me cuesta entender que cojones es lo que reciben las funciones*/) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.username} ---- Latitude: ${el.address.geo.lat} - Longitude: ${el.address.geo.lng}`; //Los parametros de name, email y phone entre otros deben estar en el Json para capturarlos.
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);

        } catch (err) {
            console.log(err)
            let message = err.statusText || "Ocurrió un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;


        } finally {
            console.log("Esto se ejecuta si o si");
        }
    }

    getData();
})();



/* CLASE 109 AJAX LIBRERIA AXIOS */
/*hay que mandar a llamar una libreria externa en los scripts del html*/

//   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

(() => {
    const $axios = document.getElementById('axios'),
        $fragment = document.createDocumentFragment(); //carga los elementos y cuando están cargados los inserta, no lo va haciendo poco a poco segun van llegando


    axios.get("https://jsonplaceholder.typicode.com/users") //axios es la llamada al recurso, no una variable
        .then((res) => {
            //res.json()  Esto no se escribe asi porque axios ya lo manda parseado
            console.log(res)
            let json = res.data; //si vemos el console.log anterior veremos que en data está el json parseado incluso

            json.forEach((el /*Esto es cada elemento que recibe, el de elemento pero puede llamarse como quieras, me cuesta entender que cojones es lo que reciben las funciones*/) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.username} ---- Latitude: ${el.address.geo.lat} - Longitude: ${el.address.geo.lng}`; //Los parametros de name, email y phone entre otros deben estar en el Json para capturarlos.
                $fragment.appendChild($li);
            })

            $axios.appendChild($fragment);


        })
        .catch(err => {
            console.log("Esto es un error get de axios: ", err);
            let message = err.response.statusText || "Ocurrió un error"; //response es un metodo de axios diferente a los anteriores
            $axios.innerHTML = `${err.response.status}: ${message}`;

        })
        .finally(() => {
            console.log("Esto se ejecutará si o si dado que es un finally (en axios)")
        });


})();



/* CLASE 110 AJAX LIBRERIA AXIOS + ASYNC AWAIT */

//   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>


(() => {
    const $axiosAsync = document.getElementById('axios-async'),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res /*res de respuesta*/ = await axios.get("https://jsonplaceholder.typicode.com/users"),                //await porque espera la respuesta del servidor
                json = await res.data;   //a diferencia de otros aqui axios ya lo manda parseado en el metodo data            //y await porque espera a la respuesta para convertir a formato Json

            console.log(res)

            json.forEach((el /*Esto es cada elemento que recibe, el de elemento pero puede llamarse como quieras, me cuesta entender que cojones es lo que reciben las funciones*/) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.username} ---- Latitude: ${el.address.geo.lat} - Longitude: ${el.address.geo.lng}`; //Los parametros de name, email y phone entre otros deben estar en el Json para capturarlos.
                $fragment.appendChild($li);
            })

            $axiosAsync.appendChild($fragment);



        }
        catch (err) {
            console.log("Esto es un error get de axios async: ", err.response);
            let message = err.response.statusText || "Ocurrió un error"; //response es un metodo de axios diferente a los anteriores
            $axiosAsync.innerHTML = `Error: ${err.response.status}: ${message}`;
        }
        finally {
            console.log("Esto siempre se ejecuta, es un finally")
        }

    }






    getData();
})();




/* CLASE 111 TEORIA */
/* CLASE 112 INSTALACION JSON PLACEHOLDER & INSOMNIA*/
 




/* CLASE 113 CONSUMO DE DATOS CON CLIENTE REST*/
//SOFTWARE INSOMNIA CORE


/* CLASE 114 API:REST CRUD*/
//CREAR HTML CRUD_AJAX.HTML



/* CLASE 115 CRUD_AJAX.HTML */
/* CLASE 116 CRUD_AJAX.HTML */
/* CLASE 117 CRUD_FETCH.HTML */
/* CLASE 118 CRUD_FETCH.HTML */
/* CLASE 119 CRUD_AXIOS.HTML */
/* CLASE 120 CRUD_AXIOS.HTML */



// VER CLASE ASYNC-AWAIT CLASE 48