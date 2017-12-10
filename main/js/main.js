var selectAno;
var valorAno;
$(document).ready(function(){
    selectAno = document.getElementById("ano");
    valorAno = 2017;
    selectAno.addEventListener("change",()=>{
        alert(selectAno.value);
        valorAno = selectAno.value;
    });

});



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
        
        trocaGrafico(string,valorAno);
    });
}

var tipo_grafico = "line";
var ctx = $("#chart");
//MÉTODO PARA INICIALIZAR O GRÁFICO DE LINHAS
var chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});


function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}