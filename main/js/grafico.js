function trocaGraficoPizza(nome_municipio, ano , chart){
    for(var i =0; i < 20; i++){
        removeData(chart);
    }
    chartPizzaCanvas.hide();
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
                        chartPizzaCanvas.show();

                    });
                });
            });
        });
    });

}



function trocaGraficoLinha(nome_municipio , area, chart){
    for(var i =0; i < 20; i++){
        removeData(chart);
    }
    chartLinhaCanvas.hide();
    carregando.show();
    getDados(nome_municipio,area,2011, a1 =>{
        getDados(nome_municipio,area,2012, a2 =>{
            getDados(nome_municipio,area,2013, a3 =>{
                getDados(nome_municipio,area,2014, a4 =>{
                    getDados(nome_municipio,area,2015, a5 =>{
                        getDados(nome_municipio,area,2016, a6 =>{
                            getDados(nome_municipio,area,2017, a7 =>{

                                addData(chart,"2011",a1.gastoTotal);
                                addData(chart,"2012",a2.gastoTotal);
                                addData(chart,"2013",a3.gastoTotal);
                                addData(chart,"2014",a4.gastoTotal);
                                addData(chart,"2015",a5.gastoTotal);
                                addData(chart,"2016",a6.gastoTotal);
                                addData(chart,"2017",a7.gastoTotal);

                                chart.options.title.text = "Orçamento de " + nome_municipio +" na área " + area;
                                chartLinha.config.data.datasets[0].label = area;
                                carregando.hide();
                                chart.update();
                                chartLinhaCanvas.show();

                            });
                        });
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
