import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace with your actual API key (don't share this publicly)
const API_KEY = "AIzaSyCqEZNw9TsxKb8SRhvriIFwQEdPOBgSR48"; // Get your API key from https://cloud.google.com/ai/generative-ai

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.0-pro-latest",
});
const userInputElement = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
//----------------------------------------------------//
const subtitulo = document.getElementById("subtitulo");
const titulo = document.getElementById("titulo");
const textoCTA = document.getElementById("textoCTA");
const corTitulo = document.getElementById("corTitulo");
const corSubtitulo = document.getElementById("corSubtitulo");
const tamTitulo = document.getElementById("tamanhoT");
const tamSubtitulo = document.getElementById("tamanhoS");
const corTextoCTA = document.getElementById("corTextoCTA");
const corFundoCTA = document.getElementById("corFundoCTA");
const corBordaCTA = document.getElementById("corBordaCTA");
const corInicio = document.getElementById("corInicio");
const corFim = document.getElementById("corFim");
const corFechar = document.getElementById("corBtnFechar");
const textFechar = document.getElementById("textoBtnFechar");
//----------------------------------------------------//
sendButton.addEventListener("click", async () => {
  const userInput = userInputElement.value; //.trim();

  if (userInput) {
    // userInputElement.value = ""; // Clear input field after sending

    try {
      do {
        const response = await model.generateContent(
          `Gere uma ação comercial ` +
            userInput +
            `Essa ação tem que ter um titulo com uma cor e um tamanho, também um subtítulo com uma cor e um tamanho, 
          tem que ter um call to action com uma cor, uma cor de fundo e 
          uma cor de borda. Além disso a ação tem que ter uma cor de fundo e uma cor do botão fechar.
          Os tamanhos são definidos como: 1 (pequeno), 2 (medio), 3 (grande))
          A resposta tem que está nesse formato de exemplo abaixo:
          {
            "titulo": {
              "texto": "titulo texto",
              "cor": "cor escolhida"
              "tamanho": "tamanho escolhido"
            },
            "subtitulo": {
              "texto": "subtitulo texto",
              "cor": "cor escolhida"
              "tamanho": "tamanho escolhido"
            },
            "call_to_action": {
              "texto": "call to action texto",
              "cor_texto": "cor escolhida",
              "cor_fundo": "cor escolhida"
            },
            "fundo": {
              "cor": "cor escolhida"
            }
            "fechar": {
              "cor": "cor escolhida"
            }
          }
          Utilize essas cores bases: #1526FF, #0066FC, #86888C, #E1E2E0, #FFFFFF, #00D6FF.`
        );
        var text = response.response.text();
        console.log(text);
      } while (text[0] == "`");
      const resposta = settings(text);
      const response = await model.generateContent(
        `Com base nos nomes das seguintes imagens: Consignado INSS.png, Emprestimo imediato.png e Seguro transferencia protegida.png. 
        Escolha uma imagem que combine com a ação comercial` +
          userInput +
          `A resposta tem que está nesse formato de exemplo abaixo:
        {
          "imagemacao": { 
            "img": "nome da imagem escolhida"
          }
        }`
      );
      console.log(response.response.text());
      const nomeAcaoImagem = JSON.parse(response.response.text());
      const caminhoImg = "imgs/" + nomeAcaoImagem.imagemacao.img;
      console.log(caminhoImg);
      //-------------------------------------------//
      titulo.value = resposta.titulo.texto;
      corTitulo.value = resposta.titulo.cor;
      tamTitulo.value = resposta.titulo.tamanho.toString();
      subtitulo.value = resposta.subtitulo.texto;
      corSubtitulo.value = resposta.subtitulo.cor;
      tamSubtitulo.value = resposta.subtitulo.tamanho.toString();
      textoCTA.value = resposta.call_to_action.texto;
      corTextoCTA.value = resposta.call_to_action.cor_texto;
      corFundoCTA.value = resposta.call_to_action.cor_fundo;
      corBordaCTA.value = resposta.call_to_action.cor_fundo;
      corInicio.value = resposta.fundo.cor;
      corFim.value = resposta.fundo.cor;
      corFechar.value = resposta.fechar.cor;
      textFechar.value = "Fechar";
      //-------------------------------------------//
      attPreview(caminhoImg);
      updatePreview();
    } catch (error) {
      console.error("Error:", error);
      alert(
        "An error occurred while communicating with Gemini. Please try again later."
      );
    }
  }
});

function settings(text) {
  let resposta = JSON.parse(text);
  if (resposta.subtitulo.tamanho == 1) {
    resposta.subtitulo.tamanho = 22;
  } else if (resposta.subtitulo.tamanho == 2) {
    resposta.subtitulo.tamanho = 28;
  } else if (resposta.subtitulo.tamanho == 3) {
    resposta.subtitulo.tamanho = 32;
  }
  if (resposta.titulo.tamanho == 1) {
    resposta.titulo.tamanho = 40;
  } else if (resposta.titulo.tamanho == 2) {
    resposta.titulo.tamanho = 50;
  } else if (resposta.titulo.tamanho == 3) {
    resposta.titulo.tamanho = 65;
  }
  return resposta;
}

function attPreview(caminhoImg) {
  const reader = new FileReader();

  reader.onloadend = () => {
    document.getElementById(
      "cardPreviewIMG"
    ).style.backgroundImage = `url(${reader.result})`;
  };

  // Verifica se caminhoImg é uma string (assumindo que seja um caminho local)
  if (typeof caminhoImg === "string") {
    fetch(caminhoImg)
      .then((response) => response.blob()) // Converte a resposta em um Blob
      .then((blob) => {
        reader.readAsDataURL(blob); // Passa o Blob para readAsDataURL
      })
      .catch((error) => {
        console.error("Erro ao carregar a imagem:", error);
      });
  } else if (caminhoImg instanceof Blob) {
    // Verifica se caminhoImg já é um Blob
    reader.readAsDataURL(caminhoImg); // Passa o Blob para readAsDataURL
  } else {
    console.error(
      "O parâmetro caminhoImg não é um caminho válido ou um objeto Blob."
    );
  }
}

// function updateImagePreview(caminhoImg) {
//   const reader = new FileReader();

//   reader.onloadend = () => {
//     document.getElementById("cardPreviewIMG").style.backgroundImage = `url(${reader.result})`;
//   };

//   // Carrega o arquivo como Blob usando XMLHttpRequest
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', caminhoImg);
//   xhr.responseType = 'blob';

//   xhr.onload = function() {
//     if (xhr.status === 200) {
//       const blob = xhr.response;
//       reader.readAsDataURL(blob); // Passa o Blob para readAsDataURL
//     } else {
//       console.error('Falha ao carregar o arquivo.');
//     }
//   };

//   xhr.onerror = function() {
//     console.error('Erro de rede ao tentar carregar o arquivo.');
//   };

//   xhr.send();
// }
