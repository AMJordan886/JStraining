






export default function darkMode(darkModeBtn, backgroundCol) {
        const d = document;
        d.addEventListener("click", (e) => {
            if (e.target.matches(`${darkModeBtn} *`)){
                d.querySelector(darkModeBtn).classList.toggle("is-active");
            }
            if (e.target.matches(`${darkModeBtn} *`)){
                d.querySelector(backgroundCol).classList.toggle("is-active");
            }
        });
};


/*
Una puta mierda va a funcionar esto
const w = window;
w.localStorage.setItem("darkkey", "darkMode");
let valorStorage = localStorage.getItem("darkkey");
*/




/*
//SOLUCION JON MIRCHA Clase 88
//Falta HTML y CSS

const d = document,
 ls = LocalStorage;


export default function darkTheme (btn,classDark) {
    const $themeBtn = d.querySelector(Btn),
    $selectors = d.querySelectorAll("[data-dark]");               //los corchetes [] en CSS significan que es por el tipo de atributo, para mas de uno o asi
    

    console.log($selectors);
    
    
    let moon = "luna emoji",
    sun = "sun";
    
    const lightMode = () => { 
        $selectors.forEach (el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme","light");
    };
    
    const darkMode = () => {
        $selectors.forEach (el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme","dark");
    };
    
    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)) {
            console.log($themeBtn.textContent);
            if($themeBtn.textContent === moon){
                darkMode()
            } else {
                lightMode()
            }
        }
});


    d.addEventListener("DOMContentLoaded", (e) => {   //Esto no va si en el import dom.js la funcion a invocar está dentro del DOMContentLoaded. Si no se saca esto no va a funcionar porque el DOMContentLoaded está dentro de otro DOMContentLoaded asi que como que no se puede e ya. En la clase 89 lo explica minuto 9:00
        //No son necesarias llaves para esto porque cada if ejecuta una cosa
        if (ls.getItem("theme") === null) ls.setItem("theme", "light");
        if (ls.getItem("theme") === "light") lightMode();
        if (ls.getItem("theme") === "dark") darkMode();
    })

};



*/