//Funcao que retorna municipio
/**
 * @param {Object} atributos Os atributos para serem passados na API
 * @param {function} callback Executado quando a operacao termina
 */
function getMunicipios(atributos, callback){
    var url = "../server/padder.php?metodo=municipios&nome_municipio=";
    for(var key in atributos){

        url += "&" + key + "=" + atributos[key];
    }
    url = "../server/municipios.json";
    $.getJSON(url,callback);
}

//Funcao que retorna o setor em que o dinheiro foi investido. Ex: Saude, educacao..
/**
 * @param {Object} atributos Os atributos para serem passados na API
 * @param {function} callback Executado quando a operacao termina
 */
function getFuncao(atributos, callback){
    var url = "../server/padder.php?metodo=funcoes";
    for(var key in atributos){

        url += "&" + key + "=" + atributos[key];
    }
    url = "../server/funcoes.json";
    $.getJSON(url,callback);
}
/**
 * 
 * @param {Object} atributos 
 * @param {Number} ano 
 * @param {function} callback 
 */
function getDespesaProjetoAtividade(atributos,ano,callback){
    var url = "../server/padder.php?metodo=despesa_projeto_atividade&exercicio_orcamento=" + ano + "00";
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
    var normalizedKey = searchKey.toString();
    normalizedKey = normalizedKey.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // remove diacriticos
    normalizedKey = normalizedKey.toLowerCase();
    var result = [];
    for(var value in dataset){
        var normalizedValue = dataset[value][collumn];
        normalizedValue = normalizedValue.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // remove diacriticos
        normalizedValue = normalizedValue.toLowerCase();
        if(normalizedValue === normalizedKey){
            result.push(dataset[value]);
        }
    }
    return result;
}

/**
 * Funcao que mostra os gastos de um municipio, em uma determinada funcao, em um ano.
 * @param {string} nome_municipio Nome do municipio
 * @param {string} nome_funcao Nome da funcao
 * @param {Number} ano Ano
 * @param {function} callback Callback
 */
function gastosMunicipioEmFuncao(nome_municipio, nome_funcao, ano, callback){
    getFuncao({},funcoes =>{
        var cod_func = searchInArray(nome_funcao,"nome_funcao",funcoes.rsp._content)[0].codigo_funcao;
        
        getMunicipios({},municipios=>{
            var cod_municipio = searchInArray(nome_municipio,"nome_municipio",municipios.rsp._content)[0].codigo_municipio;
            
            var attrs = {
                codigo_funcao: cod_func,
                codigo_municipio: cod_municipio
            }
            getDespesaProjetoAtividade(attrs,ano,dados =>{
                var lista = dados.rsp._content;
                var total = 0;
                for(var i in lista){
                    var valor = lista[i]["valor_total_fixado_projeto_atividade"];
                    total += Number(valor);
                    
                }
                console.log(total);
                callback(total);
            });
        });
    });
}

function orcamentoTotalFixado(nome_municipio, ano,callback){
    getMunicipios({nome_municipio: nome_municipio}, dados=>{
        var cod_municipio = searchInArray(nome_municipio,"nome_municipio",dados.rsp._content)[0].codigo_municipio;
        var url = "../server/padder.php?metodo=dados_orcamentos&exercicio_orcamento=" + ano + "00" + 
                  "&codigo_municipio=" + cod_municipio;
        $.getJSON(url,dados=>{
            var valor = dados.rsp._content[0].valor_total_fixado_orcamento;
            valor = Number(valor);
            callback(valor);
        });

    });
    
}
/**
 * Funcao que retorna os gastos de um municipio em uma determinada funcao em um determinado ano.
 * @param {string} municipio Nome do municipio
 * @param {string} area Area de investimento Ex. Seguranca, educacao..
 * @param {Number} ano Ano do gasto
 * @param {Function} callback
 * 
 * @returns {Object} Objeto com os dados processados
 */
function getDados(municipio,area,ano, callback){
    orcamentoTotalFixado(municipio,ano,orcamentoAnual =>{
        gastosMunicipioEmFuncao(municipio,area,ano,gastoTotal=>{
            var porcentagem = (gastoTotal/orcamentoAnual) * 100;
            var obj = {municipio: municipio,
                       gastoTotal: gastoTotal,
                       orcamentoMunicipio: orcamentoAnual,
                       porcentagem: porcentagem,
                       area:area,
                       ano:ano
                      };
            callback(obj);
            //console.log(municipio + " gastou R$ " + gastoTotal + " em " + area + ".");
            //console.log(municipio + " recebeu R$ " + orcamentoAnual + " do governo em " + ano);
            //console.log(municipio + " gastou " + porcentagem + "% do orcamento em " + area + ".");
            
        });
    });
}

