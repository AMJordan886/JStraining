
const d = document;




export default function responsiveTester (url, ancho, alto, submit, close){
    
    let ventana,
    newWindow,
    inputUrl,
    inputAncho,
    inputAlto;

    const $submitBtn = d.getElementById(submit),
        $closeBtn = d.getElementById(close),
        $inputAncho = d.getElementById(ancho),
        $inputAlto = d.getElementById(alto);
    



    $submitBtn.addEventListener("click", (e) => {
        inputUrl = d.getElementById(url);
        ventana = inputUrl.value;
        inputAncho = $inputAncho.value;
        inputAlto = $inputAlto.value;

        newWindow = window.open(ventana, '_blank', `location=yes,height=${inputAlto},width=${inputAncho},scrollbars=yes,status=yes${$inputAlto}, ${$inputAncho}`);
        //newWindow = window.resizeBy(inputAncho,inputAlto);
    });


    //El close no funciona
    $closeBtn.addEventListener("click", (e) => {
        //inputUrl = d.getElementById(url)
        //ventana = inputUrl.value;
        newWindow.close();
        });

    
};


/*
window.resizeBy()
*/





















/*
export default function responsiveTester (url, ancho, alto, submit, close){
    
    let ventana,
    newWindow,
    inputUrl;
    const $submitBtn = d.getElementById(submit),
        $closeBtn = d.getElementById(close);
    
    $submitBtn.addEventListener("click", (e) => {
        inputUrl = d.getElementById(url)
        ventana = inputUrl.value;
        newWindow = window.open(ventana);
        });

    $closeBtn.addEventListener("click", (e) => {
        inputUrl = d.getElementById(url)
        ventana = inputUrl.value;
        newWindow.close(ventana);
        });
};
*/