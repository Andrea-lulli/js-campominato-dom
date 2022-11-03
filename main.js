// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la 
// logica del gioco (attenzione: non bisogna copiare tutta la cartella 
//   dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i 
//   relativi script e fogli di stile, per evitare problemi con 
//   l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range 
// della difficoltà prescelta: le bombe. Attenzione: nella 
// stessa cella può essere posizionata al massimo una bomba, perciò 
// nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente 
// nella lista dei numeri generati - abbiamo calpestato una bomba - 
// la cella si colora di rosso e la partita termina. Altrimenti la 
// cella cliccata si colora di azzurro e l'utente può continuare a 
// cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando 
// raggiunge il numero massimo possibile di numeri consentiti
//  (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha cliccato su una cella che 
// non era una bomba.


//griglia
let griglia = document.getElementById("griglia");

//funzione per creare i quadrati
function quadrato() {

  let quadrato = document.createElement("div");
  quadrato.classList.add("box");
  return quadrato;
}

//funziona per i numeri dentro i qquadrati
let numero = 0;

//genera 16 numeri causali da 1 a 100
let array = []

let Punteggio = 0;

let giocoFinito = true



for (let k = 0; k < 16; k++) {

  let Array = array;

  let random = Math.floor(Math.random() * 100) + 1;
  Array.push(random)

  console.log(array[k]);
}


let Quadrato;

// funzione per premere bottone
function dati() {

  //funzione per creare 100 quadrati
  for (let i = 0; i < 100; i++) {
    numero = 1 + numero;

    Quadrato = quadrato();

    Quadrato.append(numero)


    griglia.append(Quadrato);


    //this per acceddere alla funzione con il click
    Quadrato.addEventListener("click", function () {
      if (giocoFinito) {
        if
          (array.includes(i + 1) == false) {
          this.classList.add("active")         
          Punteggio = Punteggio + 1
          console.log(Punteggio);
          this.style.pointerEvents = "none";

      
        } else if (array.includes(i + 1) == true) {

          console.log("bomba");
          this.classList.add("bomba")
          alert("Hai Perso")
          let conteggioPunti = document.getElementById("punteggio").innerHTML = `Mi dispiace, hai perso, Il tuo Punteggio è: ${Punteggio}`
          //griglia = ""
          giocoFinito = false
        }
      }     
    })   
  }  
}




