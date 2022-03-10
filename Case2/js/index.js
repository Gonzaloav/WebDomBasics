
function multiplicaX2(val){
    return val *2;
}
const botonX2 = document.querySelector("#botonX2");
const multiplicador = document.querySelector ("#multiplicador");

boton.addEventListener("click",(event) => {
        const valInicial = document.querySelector("#multiplicador").value;
        let valFinal = multiplicaX2(valInicial);
        multiplicador.value = valFinal;
    }
);




