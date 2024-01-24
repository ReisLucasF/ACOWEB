    const txt_file = document.getElementById("file");
    const statusArquivo = document.getElementById("statusArquivo");
    const content_textarea = document.getElementById("loading_file");
    var json;
    var imagemcode = '';
    var layout = '';

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

    function read_layout(){
    let cont_textarea_value = content_textarea.value;
    let inicio = cont_textarea_value.indexOf("VALUES (") + "VALUES (".length;
    let fim = cont_textarea_value.indexOf(",  /n0,  /n0,  /n@img,");
    let valoresStr = cont_textarea_value.slice(inicio, fim).trim();

    // Dividindo os valores por vírgula e removendo espaços em branco de cada valor
    let valores = valoresStr.split(',').map(valor => valor.trim());
    layout = valores[2];
    console.log(layout)
    console.log(typeof(layout))

    att_preview()
    }



    // func para atualizar o preview com base no layout
    function att_preview(){
        let htmlLayout = '';
        // cards
            //para layouts à direita
            if (layout === '322' || layout === '323' || layout === '324' || layout === '275') {
                document.getElementById('cardPreview2').style.display = 'block';
                document.getElementById('cardPreview').style.display = 'none';
                document.getElementById('L333').style.display = 'none';
                document.getElementById('L334').style.display = 'none';
                document.getElementById('L335').style.display = 'none';
            } 
            // para layouts à esquerda
            else if (layout === '319' || layout === '320' || layout === '321' || layout === '271'){
                document.getElementById('cardPreview2').style.display = 'none';
                document.getElementById('cardPreview').style.display = 'block';
                document.getElementById('L333').style.display = 'none';
                document.getElementById('L334').style.display = 'none';
                document.getElementById('L335').style.display = 'none';
            }
            else if (layout === '333'){
                document.getElementById('cardPreview2').style.display = 'none';
                document.getElementById('cardPreview').style.display = 'none';
                document.getElementById('L333').style.display = 'block';
                document.getElementById('L334').style.display = 'none';
                document.getElementById('L335').style.display = 'none';

            }
            else if (layout === '334'){
                document.getElementById('cardPreview2').style.display = 'none';
                document.getElementById('cardPreview').style.display = 'none';
                document.getElementById('cardPreview').style.display = 'none';
                document.getElementById('L333').style.display = 'none';
                document.getElementById('L334').style.display = 'block';
                document.getElementById('L335').style.display = 'none';

            }
            else if (layout === '335'){
                document.getElementById('cardPreview2').style.display = 'none';
                document.getElementById('cardPreview').style.display = 'none';
                document.getElementById('cardPreview').style.display = 'none';
                document.getElementById('L333').style.display = 'none';
                document.getElementById('L334').style.display = 'none';
                document.getElementById('L335').style.display = 'block';

            }
    }

    function update_preview(){
        // card - layout1
            // lógica que lê a imagem64 para png        
            var base64String = "data:image/png;base64," + imagemcode;
            document.getElementById('cardPreviewIMG').style.backgroundImage = `url(${base64String})`;

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
    
        // card - layout 2
            // lógica que lê a imagem64 para png        
            var base64String = "data:image/png;base64," + imagemcode;
            document.getElementById('cardPreviewIMG2').style.backgroundImage = `url(${base64String})`;

            //   Estilização do titulo
            document.getElementById('tituloPreview2').textContent = json["Titulo"];
            document.getElementById('tituloPreview2').style.color = json["Valor"]["ItemCard"]["ImagemFundo"]["CorTitulo"];

            //   Estilização do subtitulo
            document.getElementById('subtituloPreview2').textContent = json["Valor"]["ItemCard"]["Complemento"]["SubTitulo"];
            document.getElementById('subtituloPreview2').style.color = json["Valor"]["ItemCard"]["ImagemFundo"]["CorSubTitulo"];

            //   estilização do CTA
            document.getElementById('textoCTAPreview2').textContent = json["Valor"]["ItemCard"]["Complemento"]["TextoCta"];
            document.getElementById('textoCTAPreview2').style.color = json["Valor"]["ItemCard"]["ImagemFundo"]["CorTextoCta"];
            document.getElementById('textoCTAPreview2').style.backgroundColor = json["Valor"]["ItemCard"]["ImagemFundo"]["CorFundoCta"];
            document.getElementById('textoCTAPreview2').style.border = `solid 2px ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorBordaCta"]}`;

            document.getElementById('cardPreview2').style.backgroundImage = `linear-gradient(45deg, ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorInicio"]}, ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorFim"]})`;

        // Popup - layout 1 (333)
            // lógica que lê a imagem64 para png        
            var base64String = "data:image/png;base64," + imagemcode;
            document.getElementById('popupPreviewIMG').style.backgroundImage = `url(${base64String})`;

            //   Estilização do titulo
            document.getElementById('popuptituloPreview').textContent = json["Titulo"];
            document.getElementById('popuptituloPreview').style.color = json["Valor"]["ItemCard"]["ImagemFundo"]["CorTitulo"];

            //   Estilização do subtitulo
            document.getElementById('popupsubtituloPreview').textContent = json["Valor"]["ItemCard"]["Complemento"]["SubTitulo"];
            document.getElementById('popupsubtituloPreview').style.color = json["Valor"]["ItemCard"]["ImagemFundo"]["CorSubTitulo"];

            //   estilização do CTA
            document.getElementById('popuptextoCTAPreview').textContent = json["Valor"]["ItemCard"]["Complemento"]["TextoCta"];
            document.getElementById('popuptextoCTAPreview').style.color = json["Valor"]["ItemCard"]["ImagemFundo"]["CorTextoCta"];
            document.getElementById('popuptextoCTAPreview').style.backgroundColor = json["Valor"]["ItemCard"]["ImagemFundo"]["CorFundoCta"];
            document.getElementById('popuptextoCTAPreview').style.border = `solid 2px ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorBordaCta"]}`;

            document.getElementById('popupPreview').style.backgroundImage = `linear-gradient(45deg, ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorInicio"]}, ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorFim"]})`;
    
        // Popup - layout 2 (334)
            // lógica que lê a imagem64 para png        
            var base64String = "data:image/png;base64," + imagemcode;
            document.getElementById('popupPreviewIMG2').style.backgroundImage = `url(${base64String})`;

            //   Estilização do titulo
            document.getElementById('popuptituloPreview2').textContent = json["Titulo"];
            document.getElementById('popuptituloPreview2').style.color = json["Valor"]["ItemCard"]["ImagemFundo"]["CorTitulo"];

            //   Estilização do subtitulo
            document.getElementById('popupsubtituloPreview2').textContent = json["Valor"]["ItemCard"]["Complemento"]["SubTitulo"];
            document.getElementById('popupsubtituloPreview2').style.color = json["Valor"]["ItemCard"]["ImagemFundo"]["CorSubTitulo"];

            //   estilização do CTA
            document.getElementById('popuptextoCTAPreview2').textContent = json["Valor"]["ItemCard"]["Complemento"]["TextoCta"];
            document.getElementById('popuptextoCTAPreview2').style.color = json["Valor"]["ItemCard"]["ImagemFundo"]["CorTextoCta"];
            document.getElementById('popuptextoCTAPreview2').style.backgroundColor = json["Valor"]["ItemCard"]["ImagemFundo"]["CorFundoCta"];
            document.getElementById('popuptextoCTAPreview2').style.border = `solid 2px ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorBordaCta"]}`;

            document.getElementById('popupPreview2').style.backgroundImage = `linear-gradient(45deg, ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorInicio"]}, ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorFim"]})`;
    
        // Popup - layout 3 (335)
            // lógica que lê a imagem64 para png        
            var base64String = "data:image/png;base64," + imagemcode;
            document.getElementById('popupPreviewIMG').style.backgroundImage = `url(${base64String})`;

            document.getElementById('popupPreview').style.backgroundImage = `linear-gradient(45deg, ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorInicio"]}, ${json["Valor"]["ItemCard"]["ImagemFundo"]["CorFim"]})`;
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

            read_script();
            read_image();
            read_layout()

            update_preview();
        }
        fr.readAsText(this.files[0]);
    });

    content_textarea.addEventListener("input", function(){
        read_script();
        read_image();
        read_layout()
        if (json){
            update_preview();
        } else {
            alert("Script não selecionado");
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