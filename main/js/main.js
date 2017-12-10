var selectAno;
var valorAno;
$(document).ready(function(){
    selectAno = document.getElementById("ano");
    valorAno = 2017;
    selectAno.addEventListener("change",()=>{
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
      labels: ["Outros", "Educação", "Cultura", "Saúde", "Legislativa" ,"Desporto e Lazer"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#17A086", "#297FB8","#8D44AD","#795548","#D25400" ,"#7E8C8D"],
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