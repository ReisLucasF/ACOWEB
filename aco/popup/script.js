document.addEventListener("DOMContentLoaded", function () {
  // Chama a função assim que a página estiver carregada
  atualizarCamposRedirecionamento();
  carregarPreview();
});

function verificarComprimentoCor(cor, nomeCampo) {
  if (cor.length == 0) {
  } else if (cor.length !== 7) {
    alert(
      `A cor do campo ${nomeCampo} deve ter exatamente 7 caracteres. Por favor, corrija!`
    );
    return false;
  }

  return true;
}

function obterNomeAmigavel(idCampo) {
  const mapeamento = {
    corTitulo: "cor do título",
    corSubtitulo: "cor do subtítulo",
    corTextoCTA: "cor do texto da CTA",
    corInicio: "cor de início",
    corFim: "cor de fim",
    corFundoCTA: "cor de fundo da CTA",
    corBordaCTA: "cor da borda da CTA",
  };

  return mapeamento[idCampo] || idCampo;
}

function gerarScript() {
  // event.preventDefault();
  const tipoLink = document.getElementById("tipoLink").value;
  let codigo = document.getElementById("codigo").value;
  const link = document.getElementById("link").value;
  let metodo = "";
  let idCAT = "";
  let textoBtnFechar = "";
  let corBtnFechar = "";
  var imagemInput = document.getElementById("imagem");
  var imagem = imagemInput.files[0];

  function verificarResolucaoImagem(imagem) {
    const tipoLayout = document.getElementById("tipoLayout").value;

    return new Promise((resolve, reject) => {
      let img = new Image();

      // Evento onload para verificar a resolução da imagem
      img.onload = () => {
        // Verificar a resolução da imagem com base no tipo de layout
        if (tipoLayout === "335" && (img.width > 660 || img.height > 1267)) {
          alert(
            "A resolução da imagem para esse tipo de layout não pode ultrapassar 660x1267 pixels."
          );
          reject(new Error("Resolução da imagem muito alta para o layout 335"));
        } else if (
          tipoLayout === "334" &&
          (img.width > 500 || img.height > 500)
        ) {
          alert(
            "A resolução da imagem para esse tipo de layout não pode ultrapassar 500x500 pixels."
          );
          reject(new Error("Resolução da imagem muito alta para o layout 334"));
        } else if (
          tipoLayout === "333" &&
          (img.width > 500 || img.height > 500)
        ) {
          alert(
            "A resolução da imagem para esse tipo de layout não pode ultrapassar 500x500 pixels."
          );
          reject(new Error("Resolução da imagem muito alta para o layout 333"));
        } else {
          // Verificar o tamanho do arquivo da imagem (limite de 100KB)
          const limiteTamanhoBytes = 100 * 1024; // 100 KB em bytes
          if (imagem.size > limiteTamanhoBytes) {
            alert("O tamanho da imagem não pode ultrapassar 100KB.");
            reject(new Error("Tamanho da imagem excede o limite de 100KB."));
          } else {
            // Se a resolução e o tamanho estiverem dentro dos limites permitidos
            resolve();
          }
        }
      };

      // Evento onerror para lidar com erros ao carregar a imagem
      img.onerror = () => {
        alert("Erro ao carregar a imagem.");
        reject(new Error("Erro ao carregar a imagem."));
      };

      // Carregar a imagem a partir do objeto Blob
      img.src = URL.createObjectURL(imagem);
    });
  }

  // tratamento de erros
  const imagemElement = document.getElementById("imagem");
  if (!imagemElement.files || imagemElement.files.length === 0) {
    alert("É necessário selecionar uma imagem.");
    return;
  }

  const numeroAcao = document.getElementById("numeroAcao").value;
  if (!numeroAcao) {
    alert("É necessário informar o numero de ação.");
    return;
  }

  // limita a quantidade de caracteres
  // const titulo= document.getElementById('titulo').value;
  // const subtitulo= document.getElementById('subtitulo').value;
  // if (titulo.length > 25){
  //   alert(`O titulo não pode ultrapassar 25 caracteres!`);
  //   return;
  // }else if(subtitulo.length > 90){
  //   alert(`O subtitulo não pode ultrapassar 90 caracteres!`);
  //   return;
  // }

  const corTitulo = document.getElementById("corTitulo").value;
  const corSubtitulo = document.getElementById("corSubtitulo").value;
  const corTextoCTA = document.getElementById("corTextoCTA").value;
  const corInicio = document.getElementById("corInicio").value;
  const corFim = document.getElementById("corFim").value;
  const corFundoCTA = document.getElementById("corFundoCTA").value;
  const corBordaCTA = document.getElementById("corBordaCTA").value;

  // Verificar o comprimento das cores antes de prosseguir
  if (
    !verificarComprimentoCor(corTitulo, obterNomeAmigavel("corTitulo")) ||
    !verificarComprimentoCor(corSubtitulo, obterNomeAmigavel("corSubtitulo")) ||
    !verificarComprimentoCor(corTextoCTA, obterNomeAmigavel("corTextoCTA")) ||
    !verificarComprimentoCor(corInicio, obterNomeAmigavel("corInicio")) ||
    !verificarComprimentoCor(corFim, obterNomeAmigavel("corFim")) ||
    !verificarComprimentoCor(corFundoCTA, obterNomeAmigavel("corFundoCTA")) ||
    !verificarComprimentoCor(corBordaCTA, obterNomeAmigavel("corBordaCTA"))
  ) {
    return; // Se uma das cores não estiver correta, interrompa o processo
  }

  const camposComEspaco = {
    //campos que não podem conter espaço em branco
    corBordaCTA: "Cor da borda da CTA",
    corFundoCTA: "Cor de fundo da CTA",
    corFim: "Cor de fim do fundo",
    corInicio: "Cor de início do fundo",
    corTextoCTA: "Cor do texto da CTA",
    corSubtitulo: "Cor do subtítulo",
    corTitulo: "Cor do título",
  };

  // impede que a cor de fundo da CTA seja igual a do texto da CTA
  if (!corFundoCTA && !corTextoCTA) {
    //....
  } else if (corFundoCTA == corTextoCTA) {
    alert(`A cor de fundo da CTA não pode ser igual a cor de texto da CTA!`);
    return;
  }

  for (const campoId in camposComEspaco) {
    const campo = document.getElementById(campoId);
    const valorCampo = campo.value.trim();

    if (valorCampo && valorCampo.includes(" ")) {
      alert(
        `O campo ${camposComEspaco[campoId]} não pode conter espaços em branco.`
      );
      return;
    }
  }

  var reader = new FileReader();
  reader.onload = function (e) {
    idCAT = document.getElementById("ID").value;
    if (tipoLink === "1") {
      //sem redirecionamento
      codigo = "";
      idCAT = "0";
    } else if (tipoLink === "2") {
      //link
      idCAT = "0";
    } else if (tipoLink === "3") {
      codigo = "";
      // push deep link
      //
    }
    const numeroAcao = document.getElementById("numeroAcao").value;
    const titulo = document.getElementById("titulo").value;
    const corInicio = document.getElementById("corInicio").value;
    const corFim = document.getElementById("corFim").value;
    const corTitulo = document.getElementById("corTitulo").value;
    const subtitulo = document.getElementById("subtitulo").value;
    const corSubtitulo = document.getElementById("corSubtitulo").value;
    const textoCTA = document.getElementById("textoCTA").value;
    const corTextoCTA = document.getElementById("corTextoCTA").value;
    const corFundoCTA = document.getElementById("corFundoCTA").value;
    const corBordaCTA = document.getElementById("corBordaCTA").value;
    const tipoLayout = document.getElementById("tipoLayout").value;
    const tituloTamanho = document.getElementById("tamanhoT").value;
    const subtituloTamanho = document.getElementById("tamanhoS").value;

    textoBtnFechar = document.getElementById("textoBtnFechar").value;
    corBtnFechar = document.getElementById("corBtnFechar").value;

    if (tipoLink == 3) {
      if (!idCAT) {
        alert("É necessário informar um ID de redirecionamento.");
        return;
      }
    } else if (tipoLink == 2 && !link) {
      alert("É necessário informar um link de redirecionamento.");
    }

    if (tipoLink === "2") {
      metodo = "Link";
      linkValue = link || "";
    } else if (tipoLink === "3") {
      metodo = "PshDpLink";
      linkValue = "";
    } else {
      linkValue = "";
    }

    // Exclui caracteres que podem ser interbretados pelo BD
    const subtituloLimpo = removerCaracteresIndesejados(subtitulo);
    const tituloLimpo = removerCaracteresIndesejados(titulo);

    // reseta o texto do botão fechar para #ffffff
    if (!textoBtnFechar) {
      textoBtnFechar = "Fechar";
    } else {
    }

    // reseta a cor do botão fechar para #000000
    if (!corBtnFechar) {
      corBtnFechar = "#000000";
    } else {
    }

    //define o valor de tamanhos do titulo e subtitulo para inclusão no json
    let setTamanhoTitulo = "";
    let setTamanhoSubtitulo = "";

    // titulo
    if (tituloTamanho == 40) {
      setTamanhoTitulo = 1;
    } else if (tituloTamanho == 50) {
      setTamanhoTitulo = 2;
    } else if (tituloTamanho == 65) {
      setTamanhoTitulo = 3;
    }

    // subtitulo
    if (subtituloTamanho == 22) {
      setTamanhoSubtitulo = 1;
    } else if (subtituloTamanho == 28) {
      setTamanhoSubtitulo = 2;
    } else if (subtituloTamanho == 32) {
      setTamanhoSubtitulo = 3;
    }

    verificarResolucaoImagem(imagemElement.files[0])
      .then(() => {
        // Após a imagem passar na verificação de resolução, carregar o modelo JSON
        return fetch("modelo.json");
      })

      .then((response) => response.json())
      .then((modelo) => {
        // Obter a parte do base64, removendo o prefixo
        var reader = new FileReader();
        reader.onload = function (e) {
          var imagemEmBase64 = e.target.result
            .replace(/^data:image\/[a-z]+;base64,/, "")
            .replace(/[^a-zA-Z0-9+/=]/g, "");

          if (tipoLayout === "335") {
            var script = modelo.script
              .replaceAll("${numeroAcao}", numeroAcao)
              .replaceAll("${titulo}", "")
              .replaceAll("${corInicio}", "")
              .replaceAll("${corFim}", "")
              .replaceAll("${corTitulo}", "")
              .replaceAll("${subtitulo}", "")
              .replaceAll("${corSubtitulo}", "")
              .replaceAll("${textoCTA}", "")
              .replaceAll("${link}", linkValue)
              .replaceAll("${codigo}", codigo)
              .replaceAll("${corTextoCTA}", "")
              .replaceAll("${corFundoCTA}", "")
              .replaceAll("${corBordaCTA}", "")
              .replaceAll("${tipoLayout}", tipoLayout)
              .replace("${ImagemEmBase64}", imagemEmBase64)
              .replace("${idCAT}", idCAT)
              .replace("${metodo}", metodo)
              .replace("${tamanhotitulo}", setTamanhoTitulo)
              .replace("${tamanhosubtitulo}", setTamanhoSubtitulo)
              .replace("${textoBotaoFechar}", textoBtnFechar)
              .replace("${corBotaoFechar}", corBtnFechar);
          } else {
            var script = modelo.script
              .replaceAll("${numeroAcao}", numeroAcao)
              .replaceAll("${titulo}", tituloLimpo)
              .replaceAll("${corInicio}", corInicio)
              .replaceAll("${corFim}", corFim)
              .replaceAll("${corTitulo}", corTitulo)
              .replaceAll("${subtitulo}", subtituloLimpo)
              .replaceAll("${corSubtitulo}", corSubtitulo)
              .replaceAll("${textoCTA}", textoCTA)
              .replaceAll("${link}", linkValue)
              .replaceAll("${codigo}", codigo)
              .replaceAll("${corTextoCTA}", corTextoCTA)
              .replaceAll("${corFundoCTA}", corFundoCTA)
              .replaceAll("${corBordaCTA}", corBordaCTA)
              .replaceAll("${tipoLayout}", tipoLayout)
              .replace("${ImagemEmBase64}", imagemEmBase64)
              .replace("${idCAT}", idCAT)
              .replace("${metodo}", metodo)
              .replace("${tamanhotitulo}", setTamanhoTitulo)
              .replace("${tamanhosubtitulo}", setTamanhoSubtitulo)
              .replace("${textoBotaoFechar}", textoBtnFechar)
              .replace("${corBotaoFechar}", corBtnFechar);
          }

          // Criar o arquivo de texto
          var blob = new Blob([script], { type: "text/plain" });
          var link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);

          // Nome do arquivo
          link.download = "script_popup_" + numeroAcao + ".txt";

          // Criar o link e clicar nele automaticamente
          link.click();
        };
        reader.readAsDataURL(imagemElement.files[0]);
      })
      .catch((error) =>
        console.error("Erro ao carregar o modelo JSON:", error)
      );
  };

  function removerCaracteresIndesejados(texto) {
    // Remove os caracteres indesejados: R$, {, }, [, ], ', "
    return texto.replace(/R\$/g, "").replace(/[{[\]'"`]/g, "");
  }

  // Ler a imagem como base64
  reader.readAsDataURL(imagem);

  // Chama a função quando a opção é alterada
  document
    .getElementById("tipoLink")
    .addEventListener("change", atualizarCamposRedirecionamento);

  // Chama a função para resetar para a opção inicial
  atualizarCamposRedirecionamento();
}

document.getElementById("tipoLayout").addEventListener("change", function () {
  carregarPreview();
  updatePreview();
});

function carregarPreview() {
  const tipoLayoutSelect = document.getElementById("tipoLayout");

  const tipoLayout =
    tipoLayoutSelect.options[tipoLayoutSelect.selectedIndex].value;
  let htmlLayout = "";

  // Tipos de layout
  if (tipoLayout === "333") {
    htmlLayout = `
    <div id="L333">
      <div id="cardPreview">
        <div id="btnFecharPreview">Fechar</div>
        <div id="cardPreviewIMG"></div>
        <div id="tituloPreview">Escreva um titulo</div>
        <div id="subtituloPreview">Escreva um subtitulo</div>
        <div id="textoCTAPreview">Escreva a CTA</div>
      </div>
    </div>
    `;
  } else if (tipoLayout === "334") {
    htmlLayout = `
    <div id="L334">
      <div id="cardPreview">
        <div id="btnFecharPreview">Fechar</div>
        <div id="tituloPreview">Escreva um titulo</div>
        <div id="subtituloPreview">Escreva um subtitulo</div>
        <div id="cardPreviewIMG"></div>
        <div id="textoCTAPreview">Escreva a CTA</div>
      </div>
    </div>
    `;
  } else if (tipoLayout === "335") {
    htmlLayout = `
    <div id="L335">
      <div id="cardPreview">
        <div id="cardPreviewIMG"></div>
      </div>
    </div>
    `;
  }

  // Faz o Inner na sessão reservada do HTML
  const previewsContainer = document.getElementById("previewsContainer");
  previewsContainer.innerHTML = htmlLayout;

  // Carrega o preview quando o layout é alterado: correção de bug
  carregarPreview();
}

function updatePreview() {
  const corInicio = document.getElementById("corInicio").value;
  const corFim = document.getElementById("corFim").value;

  const tituloValue = document.getElementById("titulo").value;
  const corTitulo = document.getElementById("corTitulo").value;
  const subtituloValue = document.getElementById("subtitulo").value;
  const corSubtitulo = document.getElementById("corSubtitulo").value;
  const textoCTAValue = document.getElementById("textoCTA").value;
  const corTextoCTA = document.getElementById("corTextoCTA").value;
  const corFundoCTA = document.getElementById("corFundoCTA").value;
  const corBordaCTA = document.getElementById("corBordaCTA").value;

  // const textoBTNValue = document.getElementById('textoBtnFechar').value;
  // const corBTNValue = document.getElementById('corBtnFechar').value;

  // tamanho das fontes
  const tamanhoTitulo = document.getElementById("tamanhoT").value;
  const tamanhoSubtitulo = document.getElementById("tamanhoS").value;

  //define o valor de tamanhos do titulo e subtitulo para inclusão no json

  let setTamanhoTitulo = "";
  let setTamanhoSubtitulo = "";

  // titulo
  if (tamanhoTitulo == 40) {
    setTamanhoTitulo = 15;
  } else if (tamanhoTitulo == 50) {
    setTamanhoTitulo = 18;
  } else if (tamanhoTitulo == 65) {
    setTamanhoTitulo = 20;
  }

  // subtitulo
  if (tamanhoSubtitulo == 22) {
    setTamanhoSubtitulo = 13;
  } else if (tamanhoSubtitulo == 28) {
    setTamanhoSubtitulo = 14;
  } else if (tamanhoSubtitulo == 32) {
    setTamanhoSubtitulo = 15;
  }

  // Estilização do titulo
  document.getElementById("tituloPreview").textContent = tituloValue;
  document.getElementById("tituloPreview").style.setProperty('color', corTitulo, 'important');
  document.getElementById("tituloPreview").style.setProperty('font-size', `${setTamanhoTitulo}pt`, 'important');

  // Estilização do subtitulo
  document.getElementById("subtituloPreview").textContent = subtituloValue;
  document.getElementById("subtituloPreview").style.setProperty('color', corSubtitulo, 'important');
  document.getElementById("subtituloPreview").style.setProperty('font-size', `${setTamanhoSubtitulo}pt`, 'important');

  // Estilização do CTA
  document.getElementById("textoCTAPreview").textContent = textoCTAValue;
  document.getElementById("textoCTAPreview").style.setProperty('color', corTextoCTA, 'important');
  document.getElementById("textoCTAPreview").style.setProperty('background-color', corFundoCTA, 'important');

  //   verifica se a cor da borda da CTA está vazia
  if (!corBordaCTA) {
    // ...
  } else {
    document.getElementById("textoCTAPreview").style.setProperty('border', `solid 2px ${corBordaCTA}`, 'important');
  }

  document.getElementById("cardPreview").style.setProperty('background-image', `linear-gradient(45deg, ${corInicio}, ${corFim})`, 'important');

}

function updatePreviewTextoBTN() {
  const textoBTNValue = document.getElementById("textoBtnFechar").value;

  // Atualização do texto do BTN fechar
  document.getElementById("btnFecharPreview").textContent = textoBTNValue;
}

function updatePreviewCorBTN() {
  const corBTNValue = document.getElementById("corBtnFechar").value;

  document.getElementById("btnFecharPreview").style.setProperty('color', corBTNValue, 'important');
}

function updateImagePreview() {
  const imagemElement = document.getElementById("imagem");
  const reader = new FileReader();

  reader.onloadend = () => {
    document.getElementById(
      "cardPreviewIMG"
    ).style.backgroundImage = `url(${reader.result})`;
  };

  if (imagemElement.files && imagemElement.files[0]) {
    reader.readAsDataURL(imagemElement.files[0]);
  }
}

document.getElementById("titulo").addEventListener("input", updatePreview);
document.getElementById("corTitulo").addEventListener("input", updatePreview);
document.getElementById("subtitulo").addEventListener("input", updatePreview);
document
  .getElementById("corSubtitulo")
  .addEventListener("input", updatePreview);
document.getElementById("textoCTA").addEventListener("input", updatePreview);
document.getElementById("corTextoCTA").addEventListener("input", updatePreview);
document.getElementById("corFundoCTA").addEventListener("input", updatePreview);
document
  .getElementById("imagem")
  .addEventListener("change", updateImagePreview);
document.getElementById("corInicio").addEventListener("input", updatePreview);
document.getElementById("corFim").addEventListener("input", updatePreview);
document.getElementById("corBordaCTA").addEventListener("input", updatePreview);
document.getElementById("tamanhoT").addEventListener("change", updatePreview);
document.getElementById("tamanhoS").addEventListener("change", updatePreview);

document
  .getElementById("textoBtnFechar")
  .addEventListener("input", updatePreviewTextoBTN);
document
  .getElementById("corBtnFechar")
  .addEventListener("input", updatePreviewCorBTN);

const inputArquivo = document.getElementById("imagem");
const statusArquivo = document.getElementById("statusArquivo");

inputArquivo.addEventListener("change", function () {
  if (inputArquivo.files.length > 0) {
    statusArquivo.textContent = `Arquivo selecionado: ${inputArquivo.files[0].name}`;
  } else {
    statusArquivo.textContent = "Nenhum arquivo selecionado";
  }
});
// atualizar campos layout
function atualizarCamposInputs() {
  const tipoLayout = document.getElementById("tipoLayout").value;
  const optionsLayout = document.getElementById("optionsLayout");

  if (tipoLayout === "335") {
    optionsLayout.style.display = "none";
  } else {
    optionsLayout.style.display = "block";
  }
}

// Chama a função quando a opção é alterada
document
  .getElementById("tipoLayout")
  .addEventListener("change", atualizarCamposInputs);

// Chama a função para voltar para o estado inicial do layout
atualizarCamposInputs();

// atualizar campos link
function atualizarCamposRedirecionamento() {
  const tipoLink = document.getElementById("tipoLink").value;
  const optionsLink = document.getElementById("optionslink");
  const linkInput = document.getElementById("link");
  const idInput = document.getElementById("ID");

  if (tipoLink === "1") {
    // Oculta todos os campos
    optionsLink.style.display = "none";
    linkInput.required = false;
    idInput.required = false;
    idInput.parentElement.style.display = "none";
  } else if (tipoLink === "2") {
    // Mostra o campo de link e torna-o obrigatório
    optionsLink.style.display = "block";
    linkInput.required = true;
    idInput.parentElement.style.display = "none";
    linkInput.parentElement.style.display = "flex";
  } else if (tipoLink === "3") {
    optionsLink.style.display = "block";
    // Mostra o campo de ID e torna-o obrigatório
    linkInput.parentElement.style.display = "none";
    idInput.parentElement.style.display = "flex";
    idInput.required = true;
  }
}

// chama a função para atualizar o tipo de link
document
  .getElementById("tipoLink")
  .addEventListener("change", atualizarCamposRedirecionamento);

// atualiza os campos
atualizarCamposRedirecionamento();
