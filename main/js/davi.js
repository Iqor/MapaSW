function getMunicipios(nome_municipio, callback){
    var url = "/server/padder.php?metodo=municipios&nome_municipio=" + nome_municipio;
    $.getJSON(url,callback);
}