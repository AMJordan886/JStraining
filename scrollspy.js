const d = document;

export function asideVisible(){
    window.addEventListener("resize", (e) => {
        if (window.innerWidth >= 1300) {
          console.log(window.innerWidth)
          d.querySelector(".panel2").classList.add("visible")

        } else {
          d.querySelector(".panel2").classList.remove("visible")
          
        }
    })

    window.addEventListener("load", (e) => {
      if (window.innerWidth >= 1300){
        d.querySelector(".panel2").classList.add("visible")
      }
    })
}











/* INTERSECTION OBSERVER API */
const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up
window.addEventListener("load", (event) => {
  /* boxElement = document.querySelector("#section1","#section2","#section3","#section4",
  "#section5","#section6","#section7","#section8","#section9","#section10","#section11",
  "#section12","#section13","#section14","#section15","#section16"); */


  boxElement = document.querySelector("#seccion1","#seccion2","#seccion3","#seccion4",
  "#seccion5","#seccion6","#seccion7","#seccion8","#seccion9","#seccion10","#seccion11",
  "#seccion12","#seccion13","#seccion14","#seccion15","#seccion16");
  
  //boxElement = document.querySelector("#seccion16");

  createObserver();
}, false);



export function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;
  
    for (let i=1.0; i<=numSteps; i++) {
      let ratio = i/numSteps;
      thresholds.push(ratio);
    }
  
    thresholds.push(0);
    return thresholds;
  }

  
  
  export function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > prevRatio) {
        entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
      } else {
        entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
      }
  
      prevRatio = entry.intersectionRatio;
    });
  }




export function createObserver(){
    let observer;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList()
    };
  
    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);

}