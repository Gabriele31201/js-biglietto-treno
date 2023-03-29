
// Aggiungi input sui chilometri e sull'età del passeggero

let chilometri = prompt ("inserisci i chilometri da fare:");
let eta  = prompt ("inserisci età del passeggero:");


chilometri = parseInt(chilometri);
eta = parseInt(eta);

// Calcolare quanto è il prezzo in base ai chilometri scelti

let prezzoPerChilometro = 0.21
let chilometriInseriti = chilometri
let prezzoTotale = 0.21 * chilometri

console.log("Il prezzo totale è:" + prezzoTotale);

// Applicare lo sconto in base all'età inserita

if(eta < 18){
  console.log("Si applica lo sconto del 20%, il totale è quindi:" + prezzoTotale / 100 * 80);

}else if (eta > 65){
    console.log("Si applica lo sconto del 40%, il totale è quindi:" + prezzoTotale / 100 * 60);
}


document.getElementById("prezzo totale").innerHTML = prezzoTotale



