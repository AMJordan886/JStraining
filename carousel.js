const d = document;

let arrayImages = (
    ["https://placeimg.com/600/400/nature"],
    ["https://placeimg.com/600/400/tech"],
    ["https://placeimg.com/600/400/arch"],
    ["https://placeimg.com/600/400/animals"],
    ["https://placeimg.com/600/375/people"]
);


/* let $carousel = d.getElementById(carousel),
    $left = d.getElementById(left),
    $right = d.getElementById(right); */




export default function carousel(carousel, left, right, text, template) {
    /* const $template = d.querySelector(template).content,
        $fragment = d.createDocumentFragment();
    console.log($template);
    console.log(objectImages); */


    d.addEventListener("click", (e) => {
        if (e.target.matches(left)) {
            arrayImages.forEach(e => {
                d.querySelector("#imagecarousel").innerHTML = `<img src="${e}" />`;
                //Funciona como una puta mierda esto, inyecta el ultimo iterado 

                //$template.querySelector(".image").innerHTML = 

                console.log(e)
                //console.log($template)

                /* let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);






                
//$table.querySelector("tbody").appendChild($fragment);     > Quiza faltaba esto






                console.log($clone)
                console.log($fragment) */

                //Está hecha la transition, faltaria injectar una imagen aleatoria, un texto...         bueno, no tanto
                d.querySelector(carousel).classList.add("leftcarousel")
            })


            //Math.random()     ramdom foto de un array de url o algo asi aunque lo suyo seria de un foreach

        } if (e.target.matches(right)) {

            //Está hecha la transition, faltaria injectar una imagen aleatoria, un texto...
            d.querySelector(carousel).classList.add("rightcarousel") //visibility hidden agur yogur
        }
    });
}








/*
<img src="https://placeimg.com/200/200/nature" alt="Nature" />


https://placeimg.com/600/400/nature


*/