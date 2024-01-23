const btn_loading = document.getElementById("carregar")
const txt_file = document.getElementById('myFile')

txt_file.addEventListener("change", function(){
    var fr = new FileReader();
    fr.onload = function() {
        document.getElementById('loading_file').textContent = this.result;
      }
      fr.readAsText(this.files[0]);
})

btn_loading.addEventListener("click", function(){
    content = document.getElementById("loading_file").value

    let inicio = content.lastIndexOf("}')");
    let fim = content.lastIndexOf('\'{"');
    let json = content.slice(fim + 1, inicio + 1);
    json = JSON.parse(json);

    console.log(json);
    //VARIÁVEIS DO SCRIPT PARA MONTAR O LAYOUT//
    let tipo_de_layout = json["Valor"]["ItemCard"]["IdTipoRecurso"]
    let titulo = json["Titulo"]
    let titulo_cor = json["Valor"]["ItemCard"]["ImagemFundo"]["CorSubTitulo"]
    let subtitulo = json["Valor"]["ItemCard"]["Complemento"]["Subtitulo"]
    let subtitulo_cor = json["Valor"]["ItemCard"]["ImagemFundo"]["CorSubTitulo"]
    let texto_cta = json["Valor"]["ItemCard"]["Complemento"]["TextiCta"]
    let texto_cta_cor = json["Valor"]["ItemCard"]["ImagemFundo"]["CorTextoCta"]
    let cor_fundo_inicial = json["Valor"]["ItemCard"]["ImagemFundo"]["CorInicio"]
    let cor_fundo_final = json["Valor"]["ItemCard"]["ImagemFundo"]["CorFim"]
    let cor_fundo_cta = json["Valor"]["ItemCard"]["ImagemFundo"]["CCorFundoCta"]
    let cor_borda_cta = json["Valor"]["ItemCard"]["ImagemFundo"]["CorBordaCta"]
    console.log(tipo_de_layout + titulo + titulo_cor + subtitulo + subtitulo_cor + texto_cta + texto_cta_cor + cor_fundo_inicial + cor_fundo_final + cor_fundo_cta + cor_borda_cta)
})
