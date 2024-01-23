const btn_loading = document.getElementById("submit")
const txt_file = document.getElementById("file")
const statusArquivo = document.getElementById("statusArquivo")
const content_textarea =  document.getElementById("loading_file")

txt_file.addEventListener("change", function(){
    var fr = new FileReader();
    fr.onload = function() {
        content_textarea.textContent = this.result;
        let cont_textarea_value = content_textarea.value
    
        //span mostrando o arquivo
        if (txt_file.files.length > 0) {
            statusArquivo.textContent = `Arquivo selecionado: ${txt_file.files[0].name}`;
        } else {
        statusArquivo.textContent = 'Nenhum arquivo selecionado';
        }
          
        let inicio = cont_textarea_value.lastIndexOf("}')");
        let fim = cont_textarea_value.lastIndexOf('\'{"');
        let json = cont_textarea_value.slice(fim + 1, inicio + 1);
        console.log(json)
        json = JSON.parse(json);
    
        // layout1
        //   Estilização do titulo

        document.getElementById('tituloPreview').textContent = json["Titulo"];
        document.getElementById('tituloPreview').style.color = json["Valor"]["ItemCard"]["ImagemFundo"]["CorTitulo"];

        //   Estilização do subtitulo
        document.getElementById('subtituloPreview').textContent = json["Valor"]["ItemCard"]["Complemento"]["SubTitulo"];
        document.getElementById('subtituloPreview').style.color = json["Valor"]["ItemCard"]["ImagemFundo"]["CorSubTitulo"];

        //   estilização do CTA
        document.getElementById('textoCTAPreview').textContent = json["Valor"]["ItemCard"]["Complemento"]["TextoCta"];
        document.getElementById('textoCTAPreview').style.color = json["Valor"]["ItemCard"]["ImagemFundo"]["CorTextoCta"];
        document.getElementById('textoCTAPreview').style.backgroundColor = json["Valor"]["ItemCard"]["ImagemFundo"]["CorFundoCta"];
        document.getElementById('textoCTAPreview').style.border = `solid 2px ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorBordaCta"]}`;
        
        document.getElementById('cardPreview').style.backgroundImage = `linear-gradient(45deg, ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorInicio"]}, ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorFim"]})`;
      }
    fr.readAsText(this.files[0]);
    
})

    //// VARIÁVEIS DO SCRIPT PARA MONTAR O LAYOUT ////
    // let tipo_de_layout = json["Valor"]["ItemCard"]["IdTipoRecurso"]
    // let titulo = json["Titulo"]
    // let titulo_cor = json["Valor"]["ItemCard"]["ImagemFundo"]["CorTitulo"]
    // let subtitulo = json["Valor"]["ItemCard"]["Complemento"]["SubTitulo"]
    // let subtitulo_cor = json["Valor"]["ItemCard"]["ImagemFundo"]["CorSubTitulo"]
    // let texto_cta = json["Valor"]["ItemCard"]["Complemento"]["TextoCta"]
    // let texto_cta_cor = json["Valor"]["ItemCard"]["ImagemFundo"]["CorTextoCta"]
    // let cor_fundo_inicial = json["Valor"]["ItemCard"]["ImagemFundo"]["CorInicio"]
    // let cor_fundo_final = json["Valor"]["ItemCard"]["ImagemFundo"]["CorFim"]
    // let cor_fundo_cta = json["Valor"]["ItemCard"]["ImagemFundo"]["CCorFundoCta"]
    // let cor_borda_cta = json["Valor"]["ItemCard"]["ImagemFundo"]["CorBordaCta"]