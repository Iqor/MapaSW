function getMunicipios(atributos, callback){
    var url = "/server/padder.php?metodo=municipios&nome_municipio=";
    for(var key in atributos){

        url += "&" + key + "=" + atributos[key];
    }
    $.getJSON(url,callback);
}

//Funcao que retorna o setor em que o dinheiro foi investido. Ex: Saude, educacao..
/**
 * @param {Object} atributos Os atributos para serem passados na API
 * @param {function} callback Executado quando a operacao termina
 */
function getFuncao(atributos, callback){
    var url = "/server/padder.php?metodo=funcoes";
    for(var key in atributos){

        url += "&" + key + "=" + atributos[key];
    }
    $.getJSON(url,callback);
}
function getDespesaProjetoAtividade(atributos,ano,callback){
    var url = "/server/padder.php?metodo=despesa_projeto_atividade&exercicio_orcamento=" + ano + "00";
    for(var key in atributos){

        url += "&" + key + "=" + atributos[key];
    }
    $.getJSON(url,callback);

}

/**
 * 
 * @param {string} searchKey O valor a ser procurado
 * @param {string} collumn A coluna onde o valor está
 * @param {JSON} dataset A coleção de dados
 */
function searchInArray(searchKey,collumn, dataset){
    var result = [];
    for(var value in dataset){
        if(dataset[value][collumn] === searchKey){
            result.push(dataset[value]);
        }
    }
    return result;
}

function teste2(){
    getFuncao({},dados=>{
        var lol;
        lol = searchInArray(" Saúde","nome_funcao",dados.rsp._content);
        console.log(lol);
    })
}

function teste(){
    getFuncao({nome_funcao: "edu"},dados =>{
        console.log(dados);
        var cod_edu  = dados.rsp._content[0].codigo_funcao;
        getMunicipios({nome_municipio:"fortaleza"},dados=>{
            console.log(dados);
            var cod_fortaleza = dados.rsp._content[0].codigo_municipio;
            console.log(cod_edu +  " " + cod_fortaleza);
            getDespesaProjetoAtividade({codigo_funcao: cod_edu,codigo_municipio:cod_fortaleza},2017,dados=>{
                var total = 0;
                for(var i = 0; i < dados.rsp._content.length; i++){
                    total += Number(dados.rsp._content[i].valor_total_fixado_projeto_atividade);
                }
                console.log(total + " gastos em Educacao");
            });
        });
    });
}