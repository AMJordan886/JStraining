//FUNCIONA
const d = document;
export default function dniValidation(input, submitBtn, validatorText) {
    const $inputValue = d.getElementById(input),
        $submitBtn = d.getElementById(submitBtn),
        $validatorText = d.getElementById(validatorText);

    var regExp = /^\d{8}[a-zA-Z]$/;
    var data = $inputValue.value;

    //$submitBtn.addEventListener("click", (e) => {
        data = $inputValue.value;
        let letraDNI = data.substring(8, 9).toUpperCase(),
            numDNI = parseInt(data.substring(0, 8)),
            letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'],
            letraCorrecta = letras[numDNI % 23],
            CorrectLetter = letraCorrecta == letraDNI;

        regExp.test(data) == true;

        if (data.length == 9) {
            if (CorrectLetter == true) {
                $validatorText.innerHTML = `<div>La letra introducida coincide con la generada</div>`;//...
                alert("COINCIDE")
            } else {
                $validatorText.innerHTML = `<div>La letra introducida no coincide con la generada</div>`;//...
                alert("NO COINCIDE")
            }
        }
        if (data.length !== 9) {
            $validatorText.innerHTML = `<div>El dato introducido ha de tener 9 caracteres</div>`;
        }
    //})
};
