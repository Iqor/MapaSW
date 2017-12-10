function trocaGrafico(nome_municipio, ano){
    for(var i =0; i < 20; i++){
        removeData(chart);
    }
    getDados(nome_municipio,"educacao",ano,edu =>{
        getDados(nome_municipio,"saude",ano, saude =>{
            addData(chart,"Educacao",edu.gastoTotal);
            addData(chart,"Saúde",saude.gastoTotal);
            addData(chart,"Outros",edu.orcamentoMunicipio - edu.gastoTotal - saude.gastoTotal);
            chart.options.title.text = "Orçamento de " + nome_municipio +" em " + ano;
            chart.update();
        });
    });

}