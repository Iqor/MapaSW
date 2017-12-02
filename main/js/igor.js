$( document ).ready(function() {

 var method = "GET";
 var data;
 var url = "http://api.tcm.ce.gov.br/sim/1_0/negociantes.json?nome_negociante=gasolina";

 //REQUISIÇÃO AJAX NO SERVIDOR DO TCM
    $.ajax({
       url: url,
       type: "GET",
       data: data,
       url: url,
       type: method,
       data:  data,
       dataType: "json",



    }).done(function(resposta) {
        console.log(resposta);
    }).always(function() {
        console.log("completou");
});
});
