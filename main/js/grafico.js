function trocaGrafico(nome_municipio, ano){
    for(var i =0; i < 20; i++){
        removeData(chart);
    }
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
                        chart.update();

                    });
                });
            });
        });
    });

}


