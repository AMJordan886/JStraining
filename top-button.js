



const d = document;

export function topBtn (scrollY) {
    if (scrollY >= 300) {
        //console.clear();
        //console.log(scrollY);       
    }
};

export function disappear (topButton) {
    d.addEventListener("scroll", (e) => {
        if (window.scrollY >= 300) {
            d.getElementById(topButton).classList.add('is-active');
        } if (window.scrollY < 300){
           d.getElementById(topButton).classList.remove('is-active');
        }
    })
};



/*
SOLUCION JON MIRCHA
Falta HTML y CSS

const d = document,
w = window;


export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll", (e) => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;               Esto es por si es un navegador viejo y no soporta w.pageYOffset

        if (scrollTop > 600){
            $scrollBtn.classList.remove("hidden");                                  al boton $scrollBtn quitale en su lista de clases
        } else {
            $scrollBtn.classList.add("hidden");                                     hidden en css es oculto
        }
        console.log(w.pageYOffset, d.documentElement)
    });



    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)){                          if-si el objeto que originó el evento, su selector coincide con lo que hay en la variable Btn
            w.scrollTo(
                behavior: "smooth"                           es como   scroll-behavior:smooth;  de CSS 
                top: 0;
            )
        }
    });
};





*/







































