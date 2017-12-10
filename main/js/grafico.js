function trocaGrafico(nome_municipio, ano , chart){
    for(var i =0; i < 20; i++){
        removeData(chart);
    }
    carregando.show();
    getDados(nome_municipio,"educacao",ano,edu =>{
        getDados(nome_municipio,"saude",ano, saude =>{
            getDados(nome_municipio,"cultura",ano, cultura =>{
                getDados(nome_municipio,"legislativa",ano, leg =>{
                    getDados(nome_municipio,"desporto e lazer",ano, lazer =>{

                        addData(chart,"Desporto e Lazer",lazer.gastoTotal);
                        addData(chart,"Legislativa",leg.gastoTotal);
                        addData(chart,"Educacao",edu.gastoTotal);
                        addData(chart,"Saúde",saude.gastoTotal);
                        addData(chart,"Cultura",cultura.gastoTotal);
                        addData(chart,"Outros",edu.orcamentoMunicipio - edu.gastoTotal - saude.gastoTotal - cultura.gastoTotal - leg.gastoTotal - lazer.gastoTotal);
                        chart.options.title.text = "Orçamento de " + nome_municipio +" em " + ano;
                        carregando.hide();
                        chart.update();

                    });
                });
            });
        });
    });

}

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
