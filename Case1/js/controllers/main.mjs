export function dataToHTMLList (array) {
    const HTMLElements = array.map(
        (item) => {
            const li = document.createElement("li");
            li.innerText = `Importe: ${item/2} puntos.`;
            return li;
        }
    )
    document.querySelector("#list").append(...HTMLElements);
}
/**Modifica el código de este sitio para dividir entre dos los valores
de los modelos antes de mostrarlos. Solucionalo sin escribir nuevas funciones.
 * En la linea 5 cambiar ${item} por ${item/2}*/
 