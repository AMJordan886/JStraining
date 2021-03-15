const d = document,
    w = window,
    n = navigator;


export default function search(input, selector) {

    d.addEventListener("keyup", (e) => {
        if (e.target.matches(input)) {

            if (e.keyCode == 27) e.target.value="";
            
            d.querySelectorAll(selector).forEach((el) =>
            el.textContent.toLowerCase().includes(e.target.value) //el contenido textual de cada una de las figure cards, o sea no lee texto html ni hostias, solo texto plano
            ?el.classList.remove("filter")
            :el.classList.add("filter")
            )
        }
        
    });
}