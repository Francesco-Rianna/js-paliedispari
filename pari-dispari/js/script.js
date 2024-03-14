// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedo all'utente se sceglie pari o dispari
const evenOrOdd = prompt('pari o dispari')
console.log(evenOrOdd)
// chiedo sempre all'utente un numero da 1 a 5
const userNumber = parseInt(prompt('dimmi un numero'))
console.log(userNumber)
// genero un numero random da 1 a 5 per il computer tramite una funzione

const cpuNumber = getRndInteger(1, 5)
console.log(cpuNumber)
let sumNum = sumNumber(userNumber, cpuNumber)
console.log('la somma è ' + sumNum)
let finalControlSum = isEvenOrOdd(sumNum)

// FUNCTIONS 
// funzione trovata sul sito w3school https://www.w3schools.com/js/js_random.as
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// faccio la somma tra il numero dell'utente e il numero casuale del cpu
function sumNumber(num1, num2) {
    let sum = num1 + num2

    return sum
}

// controllo se la somma è pari o dispari 
function isEvenOrOdd(sumControl) {
    let controlNumber
    if (sumControl % 2 === 0) {
        controlNumber = 'pari'

    } else {
        controlNumber = ' dispari'
    }
    return controlNumber

}

// dichiaro il vincitore 
let userMessage

if (finalControlSum === evenOrOdd) {
    userMessage = alert('Hai vinto')
} else {
    userMessage = alert('Haiperso')
}

console.log(userMessage)








