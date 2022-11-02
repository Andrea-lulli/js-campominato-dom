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


  for (let k = 0; k < 16; k++) {

    let Array = array;
    
    let  random = Math.floor(Math.random() * 100) + 1;
    
    Array.push(random)  
   }  
   
//console.log(array);

 
// funzione per premere bottone
function dati() {
  


  //funzione per creare 100 quadrati
  for (let i = 0; i < 100; i++) {
    numero = 1 + numero;

    let Quadrato = quadrato();


   

    Quadrato.append(numero)


    griglia.append(Quadrato);

    //this per acceddere alla funzione con il click
    Quadrato.addEventListener("click", function () {

      console.log(i +1);
      console.log(array);
      

      if( (i + 1) == array ){
        console.log("bomba");

        this.classList.toggle("bomba")
      }else{
      this.classList.toggle("active")

    }
  })
}}

