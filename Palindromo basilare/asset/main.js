
// Chiedere all’utente di inserire una parola

// Creare una funzione per capire se la parola inserita è palindroma





// Inseriamo prompt per chiedere una parola
let inputName = prompt("inserisci una parola");
console.log(inputName);





// creiamo la funzione per verificare se è palindroma
function verificaParola() {
    
    // usiamo TOLOWECASE per renderle tutte le lettere minuscole
    inputName = inputName.toLowerCase();
    console.log(inputName);

    // usiamo SPLIT per trasformare una parola in array, ogni lettere è un elemento
    let arrayName = inputName.split("");
    console.log(arrayName);

    //utilizzo il REVERSE per mettere all'incontrario gli elementi dell array
    let reverseArray = arrayName.reverse();
    console.log(reverseArray);
    
    // unisco tutti gli elementi dell array generando una nuova stringa
    let reverseInputName = reverseArray.join("");
    console.log(reverseInputName);

    // creiamo le condizioni con if
    // prima condizione: se la parola inserita è uguale al suo inverso, è palindromo
    if ( inputName === reverseInputName ) {

        alert(`Ottimooooooo, la parola inserita ` + inputName + ` da te inserita, è palindroma!`);         

    } else {

        alert(`Male male male ` + inputName + ` non è una parola palindroma!`);

    }

}

verificaParola();