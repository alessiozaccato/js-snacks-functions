/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const newNames = [];

// Dichiara la funzione qui.
function compareInitials(stringArray, newArray) {
    let letter = (prompt("inserisci una lettera:", "a")).toUpperCase();
    for (i = 0; i < stringArray.length; i++) {
        if (stringArray[i].charAt(0).toUpperCase() == letter) {
            newArray.push(stringArray[i]);
        }
    }
    //let's see if the array is empty
    if (newArray.length == 0) {
        alert(`non ci sono nomi che iniziano per ${letter}`);
    } else {
        return newArray;
    }

}

// Invoca la funzione qui e stampa il risultato in console
console.log(compareInitials(names, newNames));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]