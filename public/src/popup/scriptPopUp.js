let scriptModelo;

window.onload = () => {
  fetch('../model/script_modelo_popup.json')
    .then(response => response.json())
    .then(data => {
      scriptModelo = data.script;
      carregarPreview();
    });
};

function gerarScript() {
  const tipoLink = document.getElementById('tipoLink').value;
  let link1 = '';
  let codigo1 = '';
  let metodo = '';
  let idCAT = '';
  let textoBtnFechar = '';
  let corBtnFechar = '';

  // tratamento de erros
  const imagemElement = document.getElementById('imagem');
  if (!imagemElement.files || imagemElement.files.length === 0) {
    alert('É necessário selecionar uma imagem.');
    return;
  }
  const numeroAcao = document.getElementById('numeroAcao').value;
  if (!numeroAcao) {
    alert('É necessário informar o numero de ação.');
    return;
  }

  const camposComEspaco = {//campos que não podem conter espaço em branco
    corBordaCTA: 'Cor da borda da CTA',
    corFundoCTA: 'Cor de fundo da CTA',
    corFim: 'Cor de fim do fundo',
    corInicio: 'Cor de início do fundo',
    corTextoCTA: 'Cor do texto da CTA',
    corSubtitulo: 'Cor do subtítulo',
    corTitulo: 'Cor do título'
  };

  for (const campoId in camposComEspaco) {
    const campo = document.getElementById(campoId);
    const valorCampo = campo.value.trim();


    if (valorCampo && valorCampo.includes(' ')) {
      alert(`O campo ${camposComEspaco[campoId]} não pode conter espaços em branco.`);
      return;
    }
  }

   //se ID de redirecionamento não for informado

   idCAT = document.getElementById('ID').value;
   let link = document.getElementById('link').value;


   if(tipoLink==3){
    if (idCAT == 'nulled') {
      alert('É necessário informar um ID de redirecionamento.');
      return;
    }
   }else if (tipoLink==2 && !link){
    alert('É necessário informar um link de redirecionamento.');

   }
   

  const fetchRedirecionamentos = () => {
    return fetch('http://localhost:3000/api/redirecionamentos')
      .then(response => response.json())
      .then(data => {
        const linkInput = document.getElementById('link').value;
        const redirecionamentoEncontrado = data.find(redirecionamento => redirecionamento.link === linkInput);

        if (redirecionamentoEncontrado) {
          link1 = redirecionamentoEncontrado.link;
          codigo1 = redirecionamentoEncontrado.codigo;
        } else {
          alert('Link não encontrado no banco de dados.');
        }
      });
  };

  const gerarScriptFinal = () => {
    const numeroAcao = document.getElementById('numeroAcao').value;
    const titulo = document.getElementById('titulo').value;
    const corInicio = document.getElementById('corInicio').value;
    const corFim = document.getElementById('corFim').value;
    const corTitulo = document.getElementById('corTitulo').value;
    const subtitulo = document.getElementById('subtitulo').value;
    const corSubtitulo = document.getElementById('corSubtitulo').value;
    const textoCTA = document.getElementById('textoCTA').value;
    const corTextoCTA = document.getElementById('corTextoCTA').value;
    const corFundoCTA = document.getElementById('corFundoCTA').value;
    const corBordaCTA = document.getElementById('corBordaCTA').value;
    const tipoLayout = document.getElementById('tipoLayout').value;
    const tituloTamanho = document.getElementById('tamanhoT').value;
    const subtituloTamanho = document.getElementById('tamanhoS').value;
    textoBtnFechar = document.getElementById('textoBtnFechar').value;
    corBtnFechar = document.getElementById('corBtnFechar').value;
    idCAT = document.getElementById('ID').value;

    const imagemElement = document.getElementById('imagem');
    const reader = new FileReader();

    // Exclui caracteres que podem ser interbretados pelo BD
    const subtituloLimpo = removerCaracteresIndesejados(subtitulo);
    const tituloLimpo = removerCaracteresIndesejados(titulo);

    // reseta o valor do ID para 0
    if (!idCAT){
      idCAT= 0;
    }else{
      // ...
    }

    // reseta o texto do botão fechar para #ffffff
    if (!textoBtnFechar){
      textoBtnFechar= "Apagar";
    }else{
      // ...
    }

    // reseta a cor do botão fechar para #ffffff
    if (!corBtnFechar){
      corBtnFechar= "#ffffff";
    }else{
      // ...
    }

    //define o valor de tamanhos do titulo e subtitulo para inclusão no json

    let setTamanhoTitulo = '';
    let setTamanhoSubtitulo = '';

      // titulo
    if (tituloTamanho==40){
      setTamanhoTitulo = 1;

    }else if(tituloTamanho==50){
      setTamanhoTitulo = 2;

    }else if(tituloTamanho==65){
      setTamanhoTitulo = 3;

    }

      // subtitulo
    if (subtituloTamanho==22){
      setTamanhoSubtitulo = 1;

    }else if(subtituloTamanho==28){
      setTamanhoSubtitulo = 2;

    }else if(subtituloTamanho==32){
      setTamanhoSubtitulo = 3;

    }

    reader.onloadend = () => {
      const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');

      let scriptFinalizado = scriptModelo
        .replaceAll('${numeroAcao}', numeroAcao)
        .replaceAll('${titulo}', tituloLimpo)
        .replaceAll('${corInicio}', corInicio)
        .replaceAll('${corFim}', corFim)
        .replaceAll('${corTitulo}', corTitulo)
        .replaceAll('${subtitulo}', subtituloLimpo)
        .replaceAll('${corSubtitulo}', corSubtitulo)
        .replaceAll('${textoCTA}', textoCTA)
        .replaceAll('${link}', link1)
        .replaceAll('${codigo}', codigo1)
        .replaceAll('${corTextoCTA}', corTextoCTA)
        .replaceAll('${corFundoCTA}', corFundoCTA)
        .replaceAll('${corBordaCTA}', corBordaCTA)
        .replaceAll('${tipoLayout}', tipoLayout)
        .replace('${ImagemEmBase64}', base64String)
        .replace('${idCAT}', idCAT)
        .replace('${metodo}', metodo)
        .replace('${tamanhotitulo}', setTamanhoTitulo)
        .replace('${tamanhosubtitulo}', setTamanhoSubtitulo)
        .replace('${textoBotaoFechar}', textoBtnFechar)
        .replace('${corBotaoFechar}', corBtnFechar);

      const blob = new Blob([scriptFinalizado], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'script_popup_' + numeroAcao + '.txt';
      link.click();
    };
    
    function removerCaracteresIndesejados(texto) {
      // Remove os caracteres indesejados: R$, {, }, [, ]
      return texto.replace(/R\$/g, '').replace(/[${}\[\]'"]/g, '');
    }

    reader.readAsDataURL(imagemElement.files[0]);
  };

  
  // Chama a função quando a opção é alterada
  document.getElementById('tipoLink').addEventListener('change', atualizarCamposRedirecionamento);

  // Chama a função para resetar para a opção inicial
  atualizarCamposRedirecionamento();

  if (tipoLink === '2') {
    metodo = 'link';
    fetchRedirecionamentos().then(gerarScriptFinal).catch(error => console.error(error));
  }else if (tipoLink === '3' ) {
    metodo = 'PshDpLink';
    gerarScriptFinal();
  } else {
    gerarScriptFinal();
  }
}
document.getElementById('tipoLayout').addEventListener('change', function () {
  carregarPreview();
  updatePreview();
});

function carregarPreview() {
  const tipoLayoutSelect = document.getElementById("tipoLayout");

  const tipoLayout = tipoLayoutSelect.options[tipoLayoutSelect.selectedIndex].value;
  let htmlLayout = '';

  // Tipos de layout
  if (tipoLayout === '333') {
    htmlLayout = `
    <div id="L333">
      <div id="cardPreview">
        <div id="btnFecharPreview">Apagar</div>
        <div id="cardPreviewIMG"></div>
        <div id="tituloPreview">Escreva um titulo</div>
        <div id="subtituloPreview">Escreva um subtitulo</div>
        <div id="textoCTAPreview">Escreva a CTA</div>
      </div>
    </div>
    `;
  } else if (tipoLayout === '334') {
    htmlLayout = `
    <div id="L334">
      <div id="cardPreview">
        <div id="btnFecharPreview">Apagar</div>
        <div id="tituloPreview">Escreva um titulo</div>
        <div id="subtituloPreview">Escreva um subtitulo</div>
        <div id="cardPreviewIMG"></div>
        <div id="textoCTAPreview">Escreva a CTA</div>
      </div>
    </div>
    `;
  } else if (tipoLayout === '335') {
    htmlLayout = `
    <div id="L335">
      <div id="cardPreview">
        <div id="cardPreviewIMG"></div>
      </div>
    </div>
    `;
  }

  // Faz o Inner na sessão reservada do HTML
  const previewsContainer = document.getElementById('previewsContainer');
  previewsContainer.innerHTML = htmlLayout;

  // Carrega o preview quando o layout é alterado: correção de bug
  carregarPreview();
}




function updatePreview() {
  const corInicio = document.getElementById('corInicio').value;
  const corFim = document.getElementById('corFim').value;
  
  const tituloValue = document.getElementById('titulo').value;
  const corTitulo = document.getElementById('corTitulo').value;
  const subtituloValue = document.getElementById('subtitulo').value;
  const corSubtitulo = document.getElementById('corSubtitulo').value;
  const textoCTAValue = document.getElementById('textoCTA').value;
  const corTextoCTA = document.getElementById('corTextoCTA').value;
  const corFundoCTA = document.getElementById('corFundoCTA').value;
  const corBordaCTA = document.getElementById('corBordaCTA').value;

  const textoBTNValue = document.getElementById('textoBtnFechar').value;
  const corBTNValue = document.getElementById('corBtnFechar').value;

  // tamanho das fontes
  const tamanhoTitulo = document.getElementById("tamanhoT").value;
  const tamanhoSubtitulo = document.getElementById("tamanhoS").value;

  //define o valor de tamanhos do titulo e subtitulo para inclusão no json

  

  let setTamanhoTitulo= '';
  let setTamanhoSubtitulo= '';

// titulo
if (tamanhoTitulo ==40){
  setTamanhoTitulo = 15;

}else if(tamanhoTitulo ==50){
  setTamanhoTitulo = 18;

}else if(tamanhoTitulo ==65){
  setTamanhoTitulo = 20;

}

// subtitulo
if (tamanhoSubtitulo ==22){
  setTamanhoSubtitulo = 13;

}else if(tamanhoSubtitulo ==28){
  setTamanhoSubtitulo = 14;

}else if(tamanhoSubtitulo ==32){
  setTamanhoSubtitulo = 15;

}


//   Estilização do titulo
const tituloPreview = document.getElementById('tituloPreview');
  tituloPreview.textContent = tituloValue;
  tituloPreview.style.color = corTitulo;
  tituloPreview.style.fontSize = `${setTamanhoTitulo}pt`;

// Estilização do subtitulo
const subtituloPreview = document.getElementById('subtituloPreview');
subtituloPreview.textContent = subtituloValue;
subtituloPreview.style.color = corSubtitulo;
subtituloPreview.style.fontSize = `${setTamanhoSubtitulo}pt`;

// Estilização do CTA
const textoCTAPreview = document.getElementById('textoCTAPreview');
textoCTAPreview.textContent = textoCTAValue;
textoCTAPreview.style.color = corTextoCTA;
textoCTAPreview.style.backgroundColor = corFundoCTA
  
// Estilização do BTN fechar
const btnFecharPreview = document.getElementById('btnFecharPreview');
btnFecharPreview.textContent = textoBTNValue;
btnFecharPreview.style.color = corBTNValue;

//   verifica se a cor da borda da CTA está vazia
  if(!corBordaCTA){
    // ...
  }else{
    document.getElementById('textoCTAPreview').style.border = `solid 2px ${corBordaCTA}`;
  }
  

  document.getElementById('cardPreview').style.backgroundImage = `linear-gradient(45deg, ${corInicio}, ${corFim})`;
}

function updateImagePreview() {
  const imagemElement = document.getElementById('imagem');
  const reader = new FileReader();

  reader.onloadend = () => {
    document.getElementById('cardPreviewIMG').style.backgroundImage = `url(${reader.result})`;
  };

  if (imagemElement.files && imagemElement.files[0]) {
    reader.readAsDataURL(imagemElement.files[0]);
  }
}

document.getElementById('titulo').addEventListener('input', updatePreview);
document.getElementById('corTitulo').addEventListener('input', updatePreview);
document.getElementById('subtitulo').addEventListener('input', updatePreview);
document.getElementById('corSubtitulo').addEventListener('input', updatePreview);
document.getElementById('textoCTA').addEventListener('input', updatePreview);
document.getElementById('corTextoCTA').addEventListener('input', updatePreview);
document.getElementById('corFundoCTA').addEventListener('input', updatePreview);
document.getElementById('imagem').addEventListener('change', updateImagePreview);
document.getElementById('corInicio').addEventListener('input', updatePreview);
document.getElementById('corFim').addEventListener('input', updatePreview);
document.getElementById('corBordaCTA').addEventListener('input', updatePreview);
document.getElementById('tamanhoT').addEventListener('change', updatePreview);
document.getElementById('tamanhoS').addEventListener('change', updatePreview);

document.getElementById('textoBtnFechar').addEventListener('input', updatePreview);
document.getElementById('corBtnFechar').addEventListener('input', updatePreview);

const inputArquivo = document.getElementById('imagem');
const statusArquivo = document.getElementById('statusArquivo');


inputArquivo.addEventListener('change', function () {
  if (inputArquivo.files.length > 0) {
    statusArquivo.textContent = `Arquivo selecionado: ${inputArquivo.files[0].name}`;
  } else {
    statusArquivo.textContent = 'Nenhum arquivo selecionado';
  }
});
// atualizar campos layout
function atualizarCamposInputs() {
  const tipoLayout = document.getElementById('tipoLayout').value;
  const optionsLayout = document.getElementById('optionsLayout');
  
  if (tipoLayout === '335') {
    optionsLayout.style.display = 'none';

  } else{
    optionsLayout.style.display = 'block';
  }
}

// Chama a função quando a opção é alterada
document.getElementById('tipoLayout').addEventListener('change', atualizarCamposInputs);

// Chama a função para voltar para o estado inicial do layout
atualizarCamposInputs();


// atualizar campos link
function atualizarCamposRedirecionamento() {
  const tipoLink = document.getElementById('tipoLink').value;
  const optionsLink = document.getElementById('optionslink');
  const linkInput = document.getElementById('link');
  const idInput = document.getElementById('ID');
  
  if (tipoLink === '1') {
    // Oculta todos os campos
  optionsLink.style.display = 'none';
  linkInput.required = false;
  idInput.required = false;
  idInput.parentElement.style.display = 'none';

  } else if (tipoLink === '2') {
    // Mostra o campo de link e torna-o obrigatório
    optionsLink.style.display = 'block';
    linkInput.required = true;
    idInput.parentElement.style.display = 'none';
    linkInput.parentElement.style.display = 'flex';
  }else if(tipoLink === '3') {
    optionsLink.style.display = 'block';
    // Mostra o campo de ID e torna-o obrigatório
    linkInput.parentElement.style.display = 'none';
    idInput.parentElement.style.display = 'flex';
    idInput.required = true;
  }
}

// chama a função para atualizar o tipo de link
document.getElementById('tipoLink').addEventListener('change', atualizarCamposRedirecionamento);

// atualiza os campos
atualizarCamposRedirecionamento();