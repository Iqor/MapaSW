var selectAno;
var valorAno;

var selectArea;
var valorArea;

var caixaPizza;
var caixaLinha;

var opcaoPizza;
var opcaoLinha;

var chartPizzaCanvas;
var chartLinhaCanvas;

var ctxP = $("#chartPizza");
var chartPizza;

var ctxL = $("#chartLinha");
var chartLinha;


$(document).ready(function(){
    caixaPizza = document.getElementById("caixaPizza");
    caixaLinha = document.getElementById("caixaLinha");

    chartPizzaCanvas = document.getElementById("chartPizza");
    chartLinhaCanvas = document.getElementById("chartLinha");

    opcaoPizza = document.getElementById("pizza");
    opcaoLinha = document.getElementById("linha");

    selectAno = document.getElementById("ano");
    selectArea = document.getElementById("area");

    valorAno = 2017;
    selectAno.addEventListener("change",()=>{
        valorAno = selectAno.value;
    });

    valorArea = "Legislativa";
    selectArea.addEventListener("change",()=>{
        valorArea = selectArea.value;
    });


});




//MÉTODO PARA INICIALIZAR O GRÁFICO DE LINHAS
chartPizza = new Chart(ctxP, {
    type: 'pie',
    data: {
      labels: ["Outros", "Educação", "Cultura", "Saúde", "Legislativa" ,"Desporto e Lazer"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#7E8C8D", "#19B0CC","#1AFFA4","#FF7775","#CC4E85" ,"#FF8748"],
            data: [1,1,1,1,1,1]
        }]
    },
    options: {
      title: {
        display: true,
        text: 'Selecione um munícipio e um ano para filtrar informações'
      }
    }
});




chartLinha = new Chart(ctxL, {
    type: 'line',
    data:{
        labels: ["2011", "2012", "2013", "2014", "2015" ,"2016" , "2017"],
            datasets: [{
                label: "Saúde",
                backgroundColor: "#CC4E85",
                data: [1,5,150,200,25,30 ,150]
            }]
    },
    options: {
        title: {
            display: true,
            text: 'Selecione um munícipio e uma área para filtrar informações'
        }
    }
});




function tipoGrafico(){

    if($(opcaoPizza).is(':checked')) {
        $(caixaPizza).removeClass("d-none");
        $(caixaLinha).addClass("d-none");
        $(chartPizzaCanvas).removeClass("d-none");
        $(chartLinhaCanvas).addClass("d-none");

    }else if($(opcaoLinha).is(':checked')) {
        $(caixaPizza).addClass("d-none");
        $(caixaLinha).removeClass("d-none");
        $(chartLinhaCanvas).removeClass("d-none");
        $(chartPizzaCanvas).addClass("d-none");
    }
}

// FUNÇÃO QUE MOSTRA O NOME DE CADA MUNICÍPIO E MUDA A COR DELE
for (var i = 0; i < cidades.length; i++) {

    cidades[i].mouseover(function(e){
        this.node.style.opacity = 0.4;
        var lol = document.getElementById('cidade');
        var string = this.data('id');
        string = string.replace(/_/g," ");
        lol.innerHTML = string;

    });

    cidades[i].mouseout(function(e){
        this.node.style.opacity = 1;
    });

    cidades[i].click(function(e){
        var string = this.data('id');
        string = string.replace(/_/g," ");


        if($(opcaoPizza).is(':checked')) {
            trocaGrafico(string, valorAno , chartPizza);
        }else if($(opcaoLinha).is(':checked')) {

        }else if(!$(opcaoLinha).is(':checked') && !$(opcaoPizza).is(':checked')){
            e.preventDefault();
        }

    });
}






