const butonX2 = document.querySelector("button");
const inputP = document.querySelector("input");

function multiplicador (event) {
    //console.log("Upp!");
    
    const resultado = inputP.value * 2;
    inputPesadilla.value = resultado;
}

butonX2.addEventListener("click", multiplicador);

