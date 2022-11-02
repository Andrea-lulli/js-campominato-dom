// L'utente clicca su un bottone che genererà una griglia di 
// gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si 
// colora di azzurro ed emetto un messaggio in console con il 
// umero della cella cliccata.

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
        if (array.includes(i + 1) == true) {

          console.log("bomba");
          this.classList.add("bomba")
          alert("sconfitta")
          let conteggioPunti = document.getElementById("punteggio").innerHTML = `Mi dispiace, hai perso, Il tuo Punteggio è: ${Punteggio}`
          giocoFinito = false

        } else if (array.includes(i + 1) == false) {
          this.classList.add("active")
          Punteggio = Punteggio + 1
          console.log(Punteggio);
        }
      }
    })
  }
}





