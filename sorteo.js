const d = document;

export default function sorteo(js, php, java, c, python, ruby, go, vb, rust, perl, sorteobutton) {
    let $js = d.getElementById(js).textContent,
        $php = d.getElementById(php).textContent,
        $java = d.getElementById(java).textContent,
        $c = d.getElementById(c).textContent,
        $python = d.getElementById(python).textContent,
        $ruby = d.getElementById(ruby).textContent,
        $go = d.getElementById(go).textContent,
        $vb = d.getElementById(vb).textContent,
        $rust = d.getElementById(rust).textContent,
        $perl = d.getElementById(perl).textContent;
    let $button = d.getElementById(sorteobutton);

    let randomvariable = [$js, $php, $java, $c, $python, $ruby, $go, $vb, $rust, $perl],
        valores = randomvariable[Math.floor(Math.random() * randomvariable.length)];


     $button.addEventListener("click", (e) => {
         if (e.target){
             confirm(`Categoria ganadora: ${valores}`);
             location.reload();
            }
        
    }) 
}