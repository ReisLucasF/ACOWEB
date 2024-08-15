import { GoogleGenerativeAI } from "@google/generative-ai";

fetch('../../get-api-key.php')
  .then(response => response.json())
  .then(data => {
    const apiKey = data.apiKey;

    const genAI = new GoogleGenerativeAI(apiKey);
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
    const imagemInput = document.getElementById("imagem");
    //----------------------------------------------------//
    sendButton.addEventListener("click", async () => {
      const userInput = userInputElement.value.trim();

      if (userInput) {
        try {
          do {
            const response = await model.generateContent(
              `Gere uma ação comercial ` +
              userInput +
              `Essa ação tem que ter apenas um título com no máximo 25 caracteres e uma cor de texto, 
          um subtítulo com no máximo 90 caracteres e uma cor de texto, um texto de call to action 
          com no máximo 18 caracteres, uma cor de texto, uma cor de fundo e 
          uma cor de borda e a ação tem que ter uma cor de fundo.
          A resposta tem que estar nesse formato de exemplo abaixo:
        {
          "titulo": {
            "texto": "titulo texto",
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
          const imageResponse = await model.generateContent(
            `Com base nos nomes das seguintes imagens: Cartao consignado.png, Cartao de cradito incentivo desbloqueio.png, Cartao multiplo desbloqueio.png, Cartoes disponiveis.png, Consulta de limites.png,
        Debito automatico.png, Deposito a prazo_CDB.png Emprestimo beneficio antecipado.png, Emprestimo consignado INSS.png, Emprestimo mais credito.png, Emprestimo programado.png, Emprestimo.png, Emprestimo-Consignado.png,
        FGTS saque aniversario.png, Fim de ciclo anuidade.png, Funcionalidade.png, Incentivo ao desbloqueio com insecao de anuidade.png, Investimentos.png, Invista em nosso CDB.png, Pacotes de servicos essenciais.png,
        Pagamento de contas e boleto.png, Pix parcelado incentivo generico.png, Pix parcelado oferta generica.png, Pix parcelado.png, Porcentagem icone.png, Portabilidade consignado.png, Seguranca biometria.png,
        Comunicado.png, Deposito a prazo CDB.png, Indica ai.png, Atualizar perfil investidor.png e Seguro transferencia protegida.png
        Escolha uma imagem que combine com a ação comercial` +
            userInput +
            `A resposta tem que estar nesse formato de exemplo abaixo:
        {
          "imagemacao": { 
            "img": "nome da imagem escolhida"
          }
        }`
          );
          const nomeAcaoImagem = JSON.parse(imageResponse.response.text());
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

          // Carregar a imagem no preview e simular a seleção da imagem
          carregarImagemNoInput(caminhoImg, imagemInput);
          updatePreview();
        } catch (error) {
          console.error("Error:", error);
          alert(
            "An error occurred while communicating with Gemini. Please try again later."
          );
        }
      }
    });

  })
  .catch(error => console.error('Erro ao obter a chave da API:', error));

function carregarImagemNoInput(caminhoImg, imagemInput) {
  fetch(caminhoImg)
    .then(response => response.blob())
    .then(blob => {
      const file = new File([blob], caminhoImg.split('/').pop(), { type: blob.type });
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      imagemInput.files = dataTransfer.files;

      // Atualizar o preview com a imagem carregada
      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById("cardPreviewIMG").style.backgroundImage = `url(${e.target.result})`;
      };
      reader.readAsDataURL(file);
    })
    .catch(error => console.error("Erro ao carregar a imagem:", error));
}

function attPreview(caminhoImg) {
  const reader = new FileReader();

  reader.onloadend = () => {
    document.getElementById(
      "cardPreviewIMG"
    ).style.backgroundImage = `url(${reader.result})`;
  };

  if (typeof caminhoImg === "string") {
    fetch(caminhoImg)
      .then((response) => response.blob())
      .then((blob) => {
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        console.error("Erro ao carregar a imagem:", error);
      });
  } else if (caminhoImg instanceof Blob) {
    reader.readAsDataURL(caminhoImg);
  } else {
    console.error(
      "O parâmetro caminhoImg não é um caminho válido ou um objeto Blob."
    );
  }
}
