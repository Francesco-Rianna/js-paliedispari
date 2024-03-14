// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Su internet ci sono soluzioni con join e reverse, non potete usarle!

// chiedo all'utente una parola 
const userWord = prompt('dimmi una parola');
console.log(userWord)
// riprendo la  funzione che mi inverte le parole
let wordOpposite = revertWord(userWord)
console.log(wordOpposite)
// creo un if per confrontare la stessa prola dove inserisco anche l'alert di messaggio
let userMessage
if (userWord === wordOpposite) {
    userMessage = alert('la parola è palindroma')

} else {
    userMessage = alert('la parola non è palindroma ')
}




// FUNCTIONS
function revertWord(word) {
    let wordReverted = ''
    for (let i = word.length - 1; i >= 0; i--) {
        const thisLetter = word[i]
        wordReverted += thisLetter

    }

    return wordReverted

}

