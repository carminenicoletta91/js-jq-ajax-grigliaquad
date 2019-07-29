// Griglia 6x6, ad ogni click parte una richiesta AJAX
// che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
$(document).ready(function(){

  // creo un evento di tipo click per tutti i quadrati della mia griglia
  $(".box-griglia .riga .box-quadrato").click(
    function(){
      // salvo l'oggetto cliccato in una variabile
      var mioquadrato = $(this);
      // chiamata ajax alla mia api
      $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function(data){//se l'esito della chiamata è positivo
          console.log(data.response);

          if(data.response <= 5){// prima condizione se il numero che mi ritorna e <=5
            console.log("sei nel giallo");
            // aggiungo la classe per lo sfondo giallo
            mioquadrato.addClass('yellow-box');
            // inserisco il numero nel mio quadrato
            mioquadrato.text(data.response);
          }else{//se il numero va da 5 a 9
            console.log("sei nel verde");
            // aggiungo la classe per lo sfondo verde
            mioquadrato.addClass('green-box');
            //inserisco il numero nel mio quadrato
            mioquadrato.text(data.response);
          }
        },//chiusura funzione in caso di successo
        error:function(){//se l'esito della chiamata è negativo
          alert("ops errore");
        }//chiusura funzione in caso di errore


      });//chiusura chiamata api
    })//chiusura funzione al click

})//chiusura funzione document ready
