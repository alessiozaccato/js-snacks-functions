/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

let word = 'javascript';
word = word.split("");
let numberVocals = 0;
let finalString = [];


// Dichiara la funzione qui.

function vocals(string1, string2, number) {
    const arrayVocals = ["a", "e", "i", "o", "u"];
    for (k = 0; k < string1.length; k++) {
        if (string1[k].charAt(0) == arrayVocals[k]) {
            string2.push(arrayVocals[k]);
            number++;
        }
    }
    return string2, number;
}

// Invoca la funzione qui e stampa il risultato in console
vocals(word, numberVocals, finalString);
console.log(word, numberVocals, finalString)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)