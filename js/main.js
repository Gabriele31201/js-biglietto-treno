
// Aggiungi input sui chilometri e sull'età del passeggero

let chilometri = prompt ("inserisci i chilometri da fare:");
let eta  = prompt ("inserisci età del passeggero:");


chilometri = parseInt(chilometri);
eta = parseInt(eta);

// Calcolare quanto è il prezzo in base ai chilometri scelti

let prezzoPerChilometro = 0.21
let chilometriInseriti = chilometri
let prezzoTicket = 0.21 * chilometri

console.log("Il prezzo totale è:" + prezzoTicket);

let prezzoTicketDiscount20 = prezzoTicket / 100 * 80
let prezzoTicketDiscount40 = prezzoTicket / 100 * 60

// Applicare lo sconto in base all'età inserita

if(eta < 18){
  console.log("Si applica lo sconto del 20%, il totale è quindi:" + prezzoTicketDiscount20);
    document.getElementById("prezzobiglietto").innerHTML = prezzoTicketDiscount20.toFixed(2)+"&euro;";
}else if (eta > 65){
   console.log("Si applica lo sconto del 40%, il totale è quindi:" + prezzoTicketDiscount40);
    document.getElementById("prezzobiglietto").innerHTML = prezzoTicketDiscount40.toFixed(2)+"&euro;";
}else{
   console.log("Prezzo standard, il costo è di:" + prezzoTicket)
    document.getElementById("prezzobiglietto").innerHTML = prezzoTicket.toFixed(2)+"&euro;";
}








