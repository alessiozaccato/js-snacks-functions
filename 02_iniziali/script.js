/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const newNames = [];

// Dichiara la funzione qui.
function initial(people, array) {
    for (i = 0; i < people.length; i++) {
        array[i] = people[i].charAt(0).toUpperCase();

    }
    return array;
}

// Invoca la funzione qui e stampa il risultato in console
initial(names, newNames);
console.log(newNames);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]