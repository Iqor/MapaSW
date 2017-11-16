//////////////////////////////
//
//  MAP Functions
//
//////////////////////////////


$( document ).ready(function() {
var myData;

  $.ajax({
      url: "http://api.tcm.ce.gov.br/sim/1_0/municipios.json",
      type: "GET",
      data:  ,
      dataType: "json",
      crossDomain: true,

      headers: {
               "Accept" : "application/json; charset=utf-8",
               "Content-Type": "application/javascript; charset=utf-8",
               "Access-Control-Allow-Origin" : "*"
    },

  }).done(function(resposta) {
      console.log(resposta);

  }).fail(function(jqXHR, textStatus ) {
      console.log("Request failed: " + textStatus);

  }).always(function() {
      console.log("completou");
  });








/*
  $.get("http://api.tcm.ce.gov.br/sim/1_0/municipios.xml", function(resultado){
    //$("#mensagem").html(resultado);
      console.log(resultado);

   })
*/

/*
// Using the core $.ajax() method
$.ajax({

    // The URL for the request
    url: "http://api.tcm.ce.gov.br/sim/1_0/municipios.json",

    // The data to send (will be converted to a query string)
    data: {
        id: 123
    },

    // Whether this is a POST or GET request
    type: "GET",

    // The type of data we expect back
    dataType : "json",
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  .done(function( json ) {
     $( "<h1>" ).text( json.title ).appendTo( "body" );
     $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
  })
  // Code to run if the request fails; the raw request and
  // status codes are passed to the function
  .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
  })
  // Code to run regardless of success or failure;
  .always(function( xhr, status ) {
    alert( "The request is complete!" );
  });


*/
});








for (var i = 0; i < cidades.length; i++) {

	cidades[i].mouseover(function(e){
  	this.node.style.opacity = 0.4;
		var lol = document.getElementById('cidade');
		var string = this.data('id');
		string =string.replace(/_/g," ");
		lol.innerHTML = string;
  });

	cidades[i].mouseout(function(e){
		this.node.style.opacity = 1;
	});
}


var tipo_grafico = "line";
var ctx = $("#chart");

var myChart = new Chart(ctx, {
    type: tipo_grafico,
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
