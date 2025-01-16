/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';



// Dichiara la funzione qui.

function vocals(string1) {

    let numberVocals = 0;

    let finalString = [];

    const arrayVocals = ["a", "e", "i", "o", "u"];

    for (k = 0; k < string1.length; k++) {
        if (arrayVocals.includes(string1[k].toLowerCase())) {
            finalString.push(string1[k]);
            numberVocals++;
        }
    }
    return numberVocals, finalString;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vocals(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)