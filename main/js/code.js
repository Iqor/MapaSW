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
}

//MÉTODO PARA INICIALIZAR O GRÁFICO DE LINHAS
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
