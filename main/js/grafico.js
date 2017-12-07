class Grafico{
    /**
     * @param {string} tipo Tipo de grafico
     * @param {string[]} areas Areas do governo
     */
    constructor(municipio, areas){
        this.tipo = tipo;
        this.areas = areas;
        function getData(municipio){
            var data = new Array();
            var somador = 0;
            for(var area in areas){
                var result = getDados(municipio,area,2017);
                data.push(result.gastoTotal);
                somador += result.gastoTotal;
            }
            data.push(result.orcamentoMunicipio - somador);
            areas.push("Outros");
            return data;
        }
        var dados = getData(municipio);
        this.grafico =  new Chart(ctx,{
            type: "pie",
            data:{
                    labels: areas,
                    datasets: [{
                        data: dados
                    }]
                },
            options:{}
        });

    }
    setNomeMunicipio(novoNome){
        this.nomeMunicipio = novoNome;
    }
    

}