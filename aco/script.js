    const txt_file = document.getElementById("file");
    const statusArquivo = document.getElementById("statusArquivo");
    const content_textarea = document.getElementById("loading_file");
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
        imagemcode = cont_textarea_value.slice(fim + 29, inicio - 2);
    }

    function update_preview(){
        var base64String = "data:image/png;base64," + imagemcode;

        document.getElementById('cardPreviewIMG').style.backgroundImage = `url(${base64String})`;

        document.getElementById('tituloPreview').textContent = json["Titulo"];
        document.getElementById('tituloPreview').style.color = json["Valor"]["ItemCard"]["ImagemFundo"]["CorTitulo"];

        document.getElementById('subtituloPreview').textContent = json["Valor"]["ItemCard"]["Complemento"]["SubTitulo"];
        document.getElementById('subtituloPreview').style.color = json["Valor"]["ItemCard"]["ImagemFundo"]["CorSubTitulo"];

        document.getElementById('textoCTAPreview').textContent = json["Valor"]["ItemCard"]["Complemento"]["TextoCta"];
        document.getElementById('textoCTAPreview').style.color = json["Valor"]["ItemCard"]["ImagemFundo"]["CorTextoCta"];
        document.getElementById('textoCTAPreview').style.backgroundColor = json["Valor"]["ItemCard"]["ImagemFundo"]["CorFundoCta"];
        document.getElementById('textoCTAPreview').style.border = `solid 2px ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorBordaCta"]}`;

        document.getElementById('cardPreview').style.backgroundImage = `linear-gradient(45deg, ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorInicio"]}, ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorFim"]})`;
    }

    txt_file.addEventListener("change", function(){
        var fr = new FileReader();
        fr.onload = function() {
            content_textarea.textContent = this.result;

            if (txt_file.files.length > 0) {
                statusArquivo.textContent = `Arquivo selecionado: ${txt_file.files[0].name}`;
            } else {
                statusArquivo.textContent = 'Nenhum arquivo selecionado';
            }

            read_script();
            read_image();

            update_preview();
        }
        fr.readAsText(this.files[0]);
    });

    content_textarea.addEventListener("input", function(){
        read_script();
        read_image();
        if (json){
            update_preview();
        } else {
            alert("Script não selecionado");
        }
    });