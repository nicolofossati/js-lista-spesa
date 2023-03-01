/*
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della
lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while
*/

const listaSpesa = ["Pane", "Vino", "Pesce", "verdure"];
const ulDom = document.querySelector("#ulist");

let i = 0;
while(i < listaSpesa.length){
    ulDom.innerHTML += `<li>${listaSpesa[i]}</li>`;
    i++;
}