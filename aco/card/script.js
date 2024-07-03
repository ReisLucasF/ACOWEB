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

function gerarScript(event) {
  event.preventDefault(); //previne a atualização da página para aproveitar os inputs já preenchidos
  const tipoLink = document.getElementById("tipoLink").value;
  let codigo = document.getElementById("codigo").value;
  const link = document.getElementById("link").value;
  let metodo = "";
  let idCAT = '';
  var imagemInput = document.getElementById("imagem");
  var imagem = imagemInput.files[0];
  let tipoLayout = document.getElementById("tipoLayout").value;

  let titulo = document.getElementById("titulo").value;
  let subtitulo = document.getElementById("subtitulo").value;
  let textoCTA = document.getElementById("textoCTA").value;
  let corTextoCTA = document.getElementById("corTextoCTA").value;
  let corFundoCTA = document.getElementById("corFundoCTA").value;
  let corBordaCTA = document.getElementById("corBordaCTA").value;
  let corTitulo = document.getElementById("corTitulo").value;
  let corSubtitulo = document.getElementById("corSubtitulo").value;

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
  titulo = document.getElementById("titulo").value;
  subtitulo = document.getElementById("subtitulo").value;
  if (titulo.length > 25) {
    alert(`O titulo não pode ultrapassar 25 caracteres!`);
    return;
  } else if (subtitulo.length > 90) {
    alert(`O subtitulo não pode ultrapassar 90 caracteres!`);
    return;
  }

  //  const corTextoCTA = document.getElementById('corTextoCTA').value;
  const corInicio = document.getElementById("corInicio").value;
  const corFim = document.getElementById("corFim").value;
  //  const corFundoCTA = document.getElementById('corFundoCTA').value;
  //  const corBordaCTA = document.getElementById('corBordaCTA').value;

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
    //campos que não podem conter espaço
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

  switch (tipoLayout) {
    case "320":
    case "323":
      subtitulo = "";
      corSubtitulo = "";
      break;

    case "321":
    case "324":
      titulo = "";
      corTitulo = "";
      break;

    case "271":
    case "275":
      textoCTA = "";
      corTextoCTA = "";
      corFundoCTA = "";
      corBordaCTA = "";
      break;
  }

  // Retorna as variáveis do formulário
  var reader = new FileReader();
  reader.onload = function (e) {

    
    idCAT = document.getElementById('ID').value;
    let linkValue = ''; // Define linkValue antes da lógica condicional

    if (tipoLink === '1') { // sem redirecionamento
      codigo = '0';
      idCAT = '0';
      metodo = '';
    } else if (tipoLink === '2') { // link
      idCAT = '0';
      metodo = 'Link';
      linkValue = link || '';
    } else if (tipoLink === '3') { // push deep link
      codigo = '';
      metodo = 'PshDpLink';
      if (!idCAT) {
        alert('É necessário informar um ID de redirecionamento.');
        return;
      }
    }



    const numeroAcao = document.getElementById("numeroAcao").value;
    const corInicio = document.getElementById("corInicio").value;
    const corFim = document.getElementById("corFim").value;
    const subtituloLimpo = removerCaracteresIndesejados(subtitulo);
    const tituloLimpo = removerCaracteresIndesejados(titulo);

    if (tipoLink === '2' && !link) {
      alert('É necessário informar um link de redirecionamento.');
      return;
    }

    // Carregar o modelo JSON a partir do arquivo
    fetch("modelo.json")
      .then((response) => response.json())
      .then((modelo) => {
        var imagemEmBase64 = e.target.result
          .replace(/^data:image\/[a-z]+;base64,/, "")
          .replace(/[^a-zA-Z0-9+/=]/g, "");
        var script = modelo.script
          .replace("${ImagemEmBase64}", imagemEmBase64)
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
          .replace("${idCAT}", idCAT)
          .replace("${metodo}", metodo);

        // Criar o arquivo de texto
        var blob = new Blob([script], { type: "text/plain" });
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        // Nome do arquivo
        link.download = "script_card_" + numeroAcao + ".txt";
        link.click();
      })
      .catch((error) =>
        console.error("Erro ao carregar o modelo JSON:", error)
      );
  };

  function removerCaracteresIndesejados(texto) {
    // Remove 'R$' apenas quando seguido por [, ], ', " ou ` mas sem espaço
    texto = texto.replace(/R\$(?=[\[\]'"`]\S)/g, "");

    // Remove os caracteres [, ], ', " e `
    return texto.replace(/[\[\]'"`]/g, "");
  }

  // Ler a imagem como base64
  reader.readAsDataURL(imagem);
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

  // layout1
  //   Estilização do titulo
  document.getElementById("tituloPreview").textContent = tituloValue;
  document.getElementById("tituloPreview").style.color = corTitulo;

  //   Estilização do subtitulo
  document.getElementById("subtituloPreview").textContent = subtituloValue;
  document.getElementById("subtituloPreview").style.color = corSubtitulo;

  //   estilização do CTA
  document.getElementById("textoCTAPreview").textContent = textoCTAValue;
  document.getElementById("textoCTAPreview").style.color = corTextoCTA;
  document.getElementById(
    "textoCTAPreview"
  ).style.backgroundColor = corFundoCTA;

  // layout2
  //   Estilização do titulo
  document.getElementById("tituloPreview2").textContent = tituloValue;
  document.getElementById("tituloPreview2").style.color = corTitulo;

  //   Estilização do subtitulo
  document.getElementById("subtituloPreview2").textContent = subtituloValue;
  document.getElementById("subtituloPreview2").style.color = corSubtitulo;

  //   estilização do CTA
  document.getElementById("textoCTAPreview2").textContent = textoCTAValue;
  document.getElementById("textoCTAPreview2").style.color = corTextoCTA;
  document.getElementById(
    "textoCTAPreview2"
  ).style.backgroundColor = corFundoCTA;

  //   verifica se a cor da borda da CTA está vazia
  if (!corBordaCTA) {
    // ...
  } else {
    document.getElementById(
      "textoCTAPreview"
    ).style.border = `solid 2px ${corBordaCTA}`;
  }

  document.getElementById(
    "cardPreview"
  ).style.backgroundImage = `linear-gradient(45deg, ${corInicio}, ${corFim})`;
  document.getElementById(
    "cardPreview2"
  ).style.backgroundImage = `linear-gradient(45deg, ${corInicio}, ${corFim})`;
}

function updateImagePreview() {
  const imagemElement = document.getElementById("imagem");
  const reader = new FileReader();

  reader.onloadend = () => {
    document.getElementById(
      "cardPreviewIMG"
    ).style.backgroundImage = `url(${reader.result})`;
    document.getElementById(
      "cardPreviewIMG2"
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

const inputArquivo = document.getElementById("imagem");
const statusArquivo = document.getElementById("statusArquivo");

inputArquivo.addEventListener("change", function () {
  if (inputArquivo.files.length > 0) {
    statusArquivo.textContent = `Arquivo selecionado: ${inputArquivo.files[0].name}`;
  } else {
    statusArquivo.textContent = "Nenhum arquivo selecionado";
  }
});

// Função para atualizar os campos com base na opção selecionada
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

// atualizar campos layout
function atualizarCamposInputs() {
  const tipoLayout = document.getElementById("tipoLayout").value;
  const optionsLayout = document.getElementById("cardPreview");
  const tituloPreviewControl = document.getElementById("tituloPreviewControl");
  const subtituloPreviewControl = document.getElementById(
    "subtituloPreviewControl"
  );
  const textoCTAControl = document.getElementById("textoCTAPreviewControl");

  const optionsLayout2 = document.getElementById("cardPreview2");
  const tituloPreviewControl2 = document.getElementById(
    "tituloPreviewControl2"
  );
  const subtituloPreviewControl2 = document.getElementById(
    "subtituloPreviewControl2"
  );
  const textoCTAControl2 = document.getElementById("textoCTAPreviewControl2");

  const titulo = document.getElementById("tituloControl");
  const subtitulo = document.getElementById("subtituloControl");
  const cta = document.getElementById("ctaControl");
  const ctaCor = document.getElementById("ctaCorControl");

  if (
    tipoLayout === "322" ||
    tipoLayout === "323" ||
    tipoLayout === "324" ||
    tipoLayout === "275"
  ) {
    optionsLayout.style.display = "none";
    optionsLayout2.style.display = "flex";
  } else {
    optionsLayout.style.display = "flex";
    optionsLayout2.style.display = "none";
  }

  if (tipoLayout === "319") {
    //inputs
    titulo.style.display = "flex";
    subtitulo.style.display = "flex";
    cta.style.display = "flex";
    ctaCor.style.display = "flex";
    //preview
    tituloPreviewControl.style.display = "block";
    subtituloPreviewControl.style.display = "block";
    textoCTAControl.style.display = "inline";
  } else if (tipoLayout === "320") {
    //inputs
    titulo.style.display = "flex";
    subtitulo.style.display = "none";
    cta.style.display = "flex";
    ctaCor.style.display = "flex";
    //preview
    tituloPreviewControl.style.display = "block";
    subtituloPreviewControl.style.display = "none";
    textoCTAControl.style.display = "inline";
  } else if (tipoLayout === "321") {
    //inputs
    titulo.style.display = "none";
    subtitulo.style.display = "flex";
    cta.style.display = "flex";
    ctaCor.style.display = "flex";
    //preview
    tituloPreviewControl.style.display = "none";
    subtituloPreviewControl.style.display = "block";
    textoCTAControl.style.display = "inline";
  } else if (tipoLayout === "271") {
    //inputs
    titulo.style.display = "flex";
    subtitulo.style.display = "flex";
    cta.style.display = "none";
    ctaCor.style.display = "none";
    //preview
    tituloPreviewControl.style.display = "block";
    subtituloPreviewControl.style.display = "block";
    textoCTAControl.style.display = "none";
  } else if (tipoLayout === "323") {
    //inputs
    titulo.style.display = "flex";
    subtitulo.style.display = "none";
    cta.style.display = "flex";
    ctaCor.style.display = "flex";
    //preview
    tituloPreviewControl2.style.display = "block";
    subtituloPreviewControl2.style.display = "none";
    textoCTAControl2.style.display = "inline";
  } else if (tipoLayout === "324") {
    //inputs
    titulo.style.display = "none";
    subtitulo.style.display = "flex";
    cta.style.display = "flex";
    ctaCor.style.display = "flex";
    //preview
    tituloPreviewControl2.style.display = "none";
    subtituloPreviewControl2.style.display = "block";
    textoCTAControl2.style.display = "inline;";
  } else if (tipoLayout === "323") {
    //inputs
    titulo.style.display = "flex";
    subtitulo.style.display = "flex";
    cta.style.display = "none";
    ctaCor.style.display = "none";
    //preview
    tituloPreviewControl2.style.display = "block;";
    subtituloPreviewControl2.style.display = "block;";
    textoCTAControl2.style.display = "none";
  } else if (tipoLayout === "275") {
    //inputs
    titulo.style.display = "flex";
    subtitulo.style.display = "flex";
    cta.style.display = "none";
    ctaCor.style.display = "none";
    //preview
    tituloPreviewControl2.style.display = "block;";
    subtituloPreviewControl2.style.display = "block;";
    textoCTAControl2.style.display = "none";
  } else {
    //inputs
    titulo.style.display = "flex";
    subtitulo.style.display = "flex";
    cta.style.display = "flex";
    ctaCor.style.display = "flex";
    //preview
    tituloPreviewControl.style.display = "block";
    subtituloPreviewControl.style.display = "block;";
    textoCTAControl.style.display = "inline";
  }
}

// Chama a função quando a opção é alterada
document
  .getElementById("tipoLayout")
  .addEventListener("change", atualizarCamposInputs);

// Chama a função para voltar para o estado inicial do layout
atualizarCamposInputs();

// Adicione um ouvinte de eventos ao select para chamar a função quando a opção for alterada
document
  .getElementById("tipoLink")
  .addEventListener("change", atualizarCamposRedirecionamento);

// Chame a função uma vez para configurar o estado inicial com base na opção inicial
atualizarCamposRedirecionamento();
