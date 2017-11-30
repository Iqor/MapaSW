function getMunicipios(atributos, callback){
    var url = "/server/padder.php?metodo=municipios&nome_municipio=" + nome_municipio;
    var resto;
    for(var key in atributos){

        resto += "&" + key + "=" + atributos[key];
    }
    url += resto;
    $.getJSON(url,callback);
}

//Funcao que retorna o setor em que o dinheiro foi investido. Ex: Saude, educacao..
/**
 * @param {Object} atributos Os atributos para serem passados na API
 * @param {function} callback Executado quando a operacao termina
 */
function getFuncao(atributos, callback){
    var url = "/server/padder.php?metodo=funcoes";
    var resto;
    for(var key in atributos){

        resto += "&" + key + "=" + atributos[key];
    }
    url += resto;
    $.getJSON(url,callback);
}
function getDespesaProjetoAtividade(atributos,callback){
    var url = "/server/padder.php?metodo=despesa_projeto_atividade";
    var resto;
    for(var key in atributos){

        resto += "&" + key + "=" + atributos[key];
    }
    url += resto;
    $.getJSON(url,callback);

}
function teste(){
    getFuncao({nome_funcao: "edu"},dados =>{
        var cod_edu  = dados.rsp._content[0].codigo_funcao;
        getMunicipios({nome_municipio:"fortaleza"},dados=>{
            var cod_fortaleza = dados.rsp._content[0].codigo_municipio;
            getDespesaProjetoAtividade({codigo_funcao: cod_edu, codigo_municipio: cod_fortaleza},
            dados=>{
                console.log(dados);
            });
        });
    });
}