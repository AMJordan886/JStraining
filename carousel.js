

const d = document;

export default function carousel(carousel, left, right) {
    let $carousel = d.getElementById(carousel),
        $left = d.getElementById(left),
        $right = d.getElementById(right);

        d.addEventListener("click", (e) => {
            if (e.target.matches(left)) {
                
                //Math.random()     ramdom foto de un array de url o algo asi aunque lo suyo seria de un foreach
                //Está hecha la transition, faltaria injectar una imagen aleatoria, un texto...
                d.querySelector(carousel).classList.add("leftcarousel")
            } if (e.target.matches(right)) {

                //Está hecha la transition, faltaria injectar una imagen aleatoria, un texto...
                d.querySelector(carousel).classList.add("rightcarousel") //visibility hidden agur yogur
            }
        });
}

