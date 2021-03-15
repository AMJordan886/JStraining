


export default function hamburgerMenu(panelBtn, panel, menuLink) {
    const d = document;
    d.addEventListener("click", (e) => {
      if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
        d.querySelector(panel).classList.toggle("is-active");
        d.querySelector(panelBtn).classList.toggle("is-active");
      }

      if(e.target.matches(menuLink)){
        d.querySelector(panel).classList.remove("is-active");
        d.querySelector(panelBtn).classList.remove("is-active");
      }
    })
  }
  
  

/* ****** IMPORTACION MODULO

import hamburgerMenu from "./hamburger_dom.js";

const d= document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
});

*/