
function multiplicaX2(event){
    let resultado =  document.querySelector("#Resultado").value;
    resultado = resultado * 2;
    document.querySelector("#Resultado").value = resultado;  
}
const botonX2 = document.querySelector("#botonX2");

botonX2.addEventListener("click", multiplicaX2);



