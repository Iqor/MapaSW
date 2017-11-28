$( document ).ready(function() {

var cidadesObj = [];

var jqxhr = $.ajax( "http://api.tcm.ce.gov.br/sim/1_0/municipios.json")
  .done(function() {
    alert( "success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "complete" );
  });
 
// Perform other work here ...

});