









/******************** CUENTA REGRESIVA JON ********************/
const d = document;

export default function countDown(id,limitDate,finalMessage){
    const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
        limitTime = countdownDate - now,
        days = Math.floor(limitTime / (1000*60*60*24)),
        hours = ("0" + Math.floor(limitTime % (1000*60*60*24) / (1000*60*60))).slice(-2), /*slice corta la cadena a 2 y como le hemos añadido un 0 al principio pues saldra 09 o 10, nunca 010*/
        minutes = ("0" + Math.floor(limitTime % (1000*60*60) / (1000*60))).slice(-2),
        seconds = ("0" + Math.floor((limitTime % (1000*60) / 1000))).slice(-2);

        $countdown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos.</h3>`;

        //console.log(countdownDate,now,limitTime);

        if (limitTime < 0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
        }
    }, 1000);
};



// fading fadout css































/*
const   d = document,
        date = new Date(),
        year = date.getFullYear(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
//const idSeccion = d.getElementById("#seccion3");
let contador;




export default function countDown (seccion3) {
    setInterval(() => {
        let interval = `<h3>Año: ${year} Horas: ${hours} Minutos: ${minutes} Segundos: ${seconds}</h3>`;
        let time = d.querySelector(seccion3).innerHTML = interval;
        
    }, 1000);
    
};

//let resta = setInterval(function(){countDown},1000);
/*
const tempo = () => {
return setTimeout(() => {countDown;},1000);
};
tempo();
*/
