import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace with your actual API key (don't share this publicly)
const API_KEY = "AIzaSyCqEZNw9TsxKb8SRhvriIFwQEdPOBgSR48"; // Get your API key from https://cloud.google.com/ai/generative-ai

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro-latest" });
const userInputElement = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
//----------------------------------------------------//
const subtitulo = document.getElementById("subtitulo");
const titulo = document.getElementById("titulo");
const textoCTA = document.getElementById("textoCTA");
const corTitulo = document.getElementById("corTitulo");
const corSubtitulo = document.getElementById("corSubtitulo");
const corTextoCTA = document.getElementById("corTextoCTA");
const corFundoCTA = document.getElementById("corFundoCTA");
const corBordaCTA = document.getElementById("corBordaCTA");
const corInicio = document.getElementById("corInicio");
const corFim = document.getElementById("corFim");
//----------------------------------------------------//
sendButton.addEventListener("click", async () => {
  const userInput = userInputElement.value.trim();

  if (userInput) {
    // userInputElement.value = ""; // Clear input field after sending

    try {
      do {
        const response = await model.generateContent(
          `Gere uma ação comercial ` +
            userInput +
            `Essa ação tem que ter apenas um título com no maximo 25 caracteres e uma cor de texto, 
          um subtítulo com no maximo 90 caracteres e uma cor de texto, um texto de call to action 
          com no maximo 18 caracteres, uma cor de texto, uma cor de fundo e 
          uma cor de borda e a ação tem que ter uma cor de fundo.
          A resposta tem que está nesse formato de exemplo abaixo:
        {
          "titulo": {
            "texto": "titulo texto"",
            "cor": "cor escolhida"
          },
          "subtitulo": {
            "texto": "subtitulo texto",
            "cor": "cor escolhida"
          },
          "call_to_action": {
            "texto": "call to action texto",
            "cor_texto": "cor escolhida",
            "cor_fundo": "cor escolhida"
          },
          "fundo": {
            "cor": "cor escolhida"
          }
        }
        Utilize essas cores bases: #1526FF, #0066FC, #86888C, #E1E2E0, #FFFFFF, #00D6FF.`
        );
        var text = response.response.text();
        console.log(text);
      } while (text[0] == "`");
      let resposta = JSON.parse(text);
      const response = await model.generateContent(
        `Com base nos nomes das seguintes imagens: Cartao consignado.png, Cartao de cradito incentivo desbloqueio.png, Cartao multiplo desbloqueio.png, Cartoes disponiveis.png, Consulta de limites.png,
        Debito automatico.png, Deposito a prazo_CDB.png Emprestimo beneficio antecipado.png, Emprestimo consignado INSS.png, Emprestimo mais credito.png, Emprestimo programado.png, Emprestimo.png, Emprestimo-Consignado.png,
        FGTS saque aniversario.png, Fim de ciclo anuidade.png, Funcionalidade.png, Incentivo ao desbloqueio com insecao de anuidade.png, Investimentos.png, Invista em nosso CDB.png, Pacotes de servicos essenciais.png,
        Pagamento de contas e boleto.png, Pix parcelado incentivo generico.png, Pix parcelado oferta generica.png, Pix parcelado.png, Porcentagem icone.png, Portabilidade consignado.png, Seguranca biometria.png e Seguro transferencia protegida.png. 
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
      subtitulo.value = resposta.subtitulo.texto;
      corSubtitulo.value = resposta.subtitulo.cor;
      textoCTA.value = resposta.call_to_action.texto;
      corTextoCTA.value = resposta.call_to_action.cor_texto;
      corFundoCTA.value = resposta.call_to_action.cor_fundo;
      corBordaCTA.value = resposta.call_to_action.cor_fundo;
      corInicio.value = resposta.fundo.cor;
      corFim.value = resposta.fundo.cor;
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
