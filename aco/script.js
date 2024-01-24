const btn_loading = document.getElementById("submit");
const txt_file = document.getElementById("file");
const statusArquivo = document.getElementById("statusArquivo");
const content_textarea =  document.getElementById("loading_file");
var json;

var imagemcode = '';

function read_script(){
    let cont_textarea_value = content_textarea.value
    let inicio = cont_textarea_value.lastIndexOf("}')");
    let fim = cont_textarea_value.lastIndexOf('\'{"');
    let json_text = cont_textarea_value.slice(fim + 1, inicio + 1);
    json = JSON.parse(json_text);

}

function read_image(){
    let cont_textarea_value = content_textarea.value
    let inicio = cont_textarea_value.lastIndexOf("declare @img");
    let fim = cont_textarea_value.lastIndexOf("declare @str");
    let imagebase64 = cont_textarea_value.slice(fim + 29, inicio - 2);
    imagemcode = imagebase64 //aqui retorna a imagem em base64 e armazena na variavel imagemcode
}



function update_preview(){
    // lógica que decodifica a imagem64 para png
    var imagemDecode = new Uint8Array(imagemcode.length);
    for (var i = 0; i < imagemcode.length; i++) {
        imagemDecode[i] = imagemcode.charCodeAt(i);
    }

    var blob = new Blob([imagemDecode], { type: 'image/png' });
    var imageUrl = URL.createObjectURL(blob);

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
        document.getElementById('cardPreviewIMG').style.backgroundImage = `url(https://aco.reislucasf.com.br/img/promo.png)`;
}

txt_file.addEventListener("change", function(){
    var fr = new FileReader();
    fr.onload = function() {
        content_textarea.textContent = this.result;
    
        //span mostrando o arquivo
        if (txt_file.files.length > 0) {
            statusArquivo.textContent = `Arquivo selecionado: ${txt_file.files[0].name}`;
        } else {
        statusArquivo.textContent = 'Nenhum arquivo selecionado';
        }
          
        read_script()
        read_image()
    
        update_preview()
      }
    fr.readAsText(this.files[0]);
    
});
content_textarea.addEventListener("input", function(){
    read_script()
    read_image()
    if (json){
        update_preview();
    }else{
        alert("scritpt não selecionado")
    }
});


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