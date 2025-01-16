/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greetings(nameToGreet) {
    let greet = "";
    //using Date object for the first time
    const d = new Date();
    if (d <= 13) {
        return greet = `buongiorno ${nameToGreet}`;
    } else if (d >= 13 && d <= 17) {
        return greet = `buon pomeriggio ${nameToGreet}`;
    } else if (d >= 17) {
        return greet = `buonasera ${nameToGreet}`
    }
}


// Invoca la funzione qui e stampa il risultato in console
console.log(greetings(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.