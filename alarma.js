




export default function relojAlarma (iniciarReloj, reloj,  detenerReloj, iniciarAlarma, detenerAlarma) {
  const d = document;
  const t = new Date();
  const alarm = d.createElement("audio");
  alarm.setAttribute('src', 'alarma.mp3');

  d.addEventListener("click", (e) => {
    
    if  (e.target.matches(iniciarReloj)){
      d.querySelector(reloj).classList.toggle("is-active");
      d.querySelector(reloj).innerHTML = t.toLocaleTimeString();
    };

    if  (e.target.matches(detenerReloj)){
      d.querySelector(reloj).classList.remove("is-active");
      d.querySelector(reloj).innerHTML = "";
    };

    if  (e.target.matches(iniciarAlarma)){
      d.querySelector(reloj).classList.remove("is-active");
      d.querySelector(reloj).innerHTML = "";
      d.querySelector(reloj).appendChild(alarm);

        d.querySelector(reloj).addEventListener('click',function() {
        d.querySelector(reloj).innerHTML = "playing";
        });      
      alarm.play();
    };

    if  (e.target.matches(detenerAlarma)){
        d.querySelector(reloj).classList.remove("is-active");
        d.querySelector(reloj).innerHTML= "";
        console.log(detenerAlarma);
    };
  

  });
};


/*
const alarmaJs (iniciarReloj) => {
  d.addEventListener("DOMContentLoaded", (e) => {
    d.addEventListener("click")
  })
}
*/









/*


    const d = document;
    d.addEventListener("click", (e) => {
      if(e.target.matches(panelBtn) || (e.target.matches(`${panelBtn}, *`))){
        d.querySelector(panel).classList.toggle("is-active");
        d.querySelector(panelBtn).classList.toggle("is-active");
      }

      if(e.target.matches(menuLink)){
        d.querySelector(panel).classList.remove("is-active");
        d.querySelector(panelBtn).classList.remove("is-active");
      }
    })



}

*/