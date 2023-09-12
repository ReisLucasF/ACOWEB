let scriptModelo;

window.onload = () => {
  fetch('../model/script_modelo.json')
    .then(response => response.json())
    .then(data => {
      scriptModelo = data.script;
    });
};

function gerarScript() {
  const tipoLink = document.getElementById('tipoLink').value;
  let link1 = '';
  let codigo1 = '';
  let metodo = '';
  let idCAT = '';

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
          alert('Link não encontrado.');
          throw new Error('Link não encontrado.');
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
    idCAT = document.getElementById('ID').value;

    const imagemElement = document.getElementById('imagem');
    const reader = new FileReader();

    if (!idCAT){
      idCAT= 0;
    }else{
      // ...
    }

    reader.onloadend = () => {
      const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');

      let scriptFinalizado = scriptModelo
        .replaceAll('${numeroAcao}', numeroAcao)
        .replaceAll('${titulo}', titulo)
        .replaceAll('${corInicio}', corInicio)
        .replaceAll('${corFim}', corFim)
        .replaceAll('${corTitulo}', corTitulo)
        .replaceAll('${subtitulo}', subtitulo)
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
        .replace('${metodo}', metodo);

      const blob = new Blob([scriptFinalizado], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'script_card_' + numeroAcao + '.txt';
      link.click();
    };
    reader.readAsDataURL(imagemElement.files[0]);
  };

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

//   Estilização do titulo
  document.getElementById('tituloPreview').textContent = tituloValue;
  document.getElementById('tituloPreview').style.color = corTitulo;

//   Estilização do subtitulo
  document.getElementById('subtituloPreview').textContent = subtituloValue;
  document.getElementById('subtituloPreview').style.color = corSubtitulo;

//   estilização do CTA
  document.getElementById('textoCTAPreview').textContent = textoCTAValue;
  document.getElementById('textoCTAPreview').style.color = corTextoCTA;
  document.getElementById('textoCTAPreview').style.backgroundColor = corFundoCTA;

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

const inputArquivo = document.getElementById('imagem');
const statusArquivo = document.getElementById('statusArquivo');


inputArquivo.addEventListener('change', function () {
  if (inputArquivo.files.length > 0) {
    statusArquivo.textContent = `Arquivo selecionado: ${inputArquivo.files[0].name}`;
  } else {
    statusArquivo.textContent = 'Nenhum arquivo selecionado';
  }
});

// Função para atualizar os campos com base na opção selecionada
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

// Adicione um ouvinte de eventos ao select para chamar a função quando a opção for alterada
document.getElementById('tipoLink').addEventListener('change', atualizarCamposRedirecionamento);

// Chame a função uma vez para configurar o estado inicial com base na opção inicial
atualizarCamposRedirecionamento();