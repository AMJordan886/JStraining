const d = document,
    w = window,
    n = navigator;


export default function connection() {
    
    const isOnLine = () => {
            const $div = d.createElement("div");

            if(n.onLine){
                $div.textContent = "Conexión reestablecida";
                $div.classList.add("online");
                $div.classList.remove("offline");
            } else {
            $div.textContent = "Conexión perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
            }
        
        
        
            d.body.insertAdjacentElement("afterbegin", $div); //Visto en clase 71
            setTimeout(() => d.body.removeChild($div), 2000);
        
            
        };


    w.addEventListener("online", (e)=> isOnLine());
    w.addEventListener("offline", (e)=> isOnLine());
}
 







































    
    //No iba mal, habia insertado el settimeout y tambien el objeto navigator.onLine
    //Menos da una piedra
    
    
    /* let suminterval = 0;


    let YES = setInterval(() => {
        if (navigator.onLine == true) {
            suminterval++;
            console.log(suminterval);
            restart();
        }
        //texto tal y como estaba o k
        //restart()
        //document.getElementById(headername).textContent = `Ejercicios del DOM`;
        
    }, 1000);
    
    
     
    let NO = setInterval(() => {
        if (navigator.onLine !== true) {
            document.querySelector("header").classList.toggle("inactive");
            document.getElementById(headername).textContent = `Conexión perdida`;
            clearInterval(NO);
        }
    }, 1000);
    
   
   function restart(){
       document.getElementById(headername).textContent = `Ejercicios del DOM`;
        clearInterval(YES)
        //clearInterval(YES);
    }

 */


/* 
    let yesConnectInterval = setInterval(() => {
        if (navigator.onLine == true && suminterval >= 1) {
            okConnection();
            //document.querySelector("header").classList.toggle("header");

        }
        //suminterval++;
    }, 1000);

    let noConnectInterval = setInterval((noConnectInterval) => {
        if (navigator.onLine !== true && suminterval >= 1) {
            noConnection();
        }
        //suminterval++;
    }, 1000);

    function okConnection() {
        document.querySelector("header").classList.toggle("active");
        document.getElementById(headername).textContent = `Conexión reestablecida`
        clearInterval(yesConnectInterval)
    };


    function noConnection() {
        document.querySelector("header").classList.toggle("inactive");
        document.getElementById(headername).textContent = `Conexión perdida`;
        clearInterval(noConnectInterval);
    } */

