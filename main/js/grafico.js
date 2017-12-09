function trocaGrafico(nome_municipio){
    for(var i =0; i < 20; i++){
        removeData(chart);
    }
    getDados(nome_municipio,"educacao",2017,edu =>{
        getDados(nome_municipio,"saude",2017, saude =>{
            addData(chart,"Educacao",edu.gastoTotal);
            addData(chart,"Saúde",saude.gastoTotal);
            addData(chart,"Outros",edu.orcamentoMunicipio - edu.gastoTotal - saude.gastoTotal);
        });
    });

}