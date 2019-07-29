$(document).ready(function(){
  // al click del mio bottone genero la griglia
  $("button").click(

    function(){
      console.log("è il mio turno sono button");
      $("button").remove()
      $("div#miobox").addClass("box-griglia");
      for(var i=0;i<36;i++){
        generablocchi();
     }
    }
  )
  // creo un evento di tipo click per tutti i quadrati della mia griglia appena creata
  $("div#miobox ").on('click','.box-quadrato',function(){
    console.log("e il mio turno sono ajax");
    // salvo l'oggetto cliccato in una variabile
    var mioquadrato = $(this);
    // chiamata ajax alla mia api
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function(data){//se l'esito della chiamata Ã¨ positivo
      console.log(data.response);
      if(data.response <= 5){// prima condizione se il numero che mi ritorna e <=5
        console.log("sei nel giallo");
        // aggiungo la classe per lo sfondo giallo
        mioquadrato.addClass('yellow-box');
        mioquadrato.removeClass('green-box');
        // inserisco il numero nel mio quadrato
        mioquadrato.text(data.response);
      }else{//se il numero va da 5 a 9
        console.log("sei nel verde");
        // aggiungo la classe per lo sfondo verde
        mioquadrato.addClass('green-box');
        mioquadrato.removeClass('yellow-box')
        //inserisco il numero nel mio quadrato
        mioquadrato.text(data.response);
      }
    },//chiusura funzione in caso di successo
      error:function(){//se l'esito della chiamata Ã¨ negativo
        alert("ops errore");
      }//chiusura funzione in caso di errore
    });//chiusura chiamata api
  })//chiusura funzione al click


// funzione per generare il mio quadrato
function generablocchi(){
  $("div#miobox").append("<div class='box-quadrato'>"+"</div>");

}

}
)
