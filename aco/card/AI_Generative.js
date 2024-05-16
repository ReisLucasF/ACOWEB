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
      let list_aco = [];
      do {
        const response = await model.generateContent(
          `Gere uma ação comercial ` +
            userInput +
            ` A ação comercial em quetão tem que ter apenas titulo, subtitulo e call to action. Tendo
          respetctivamente 25 caracteres + sua cor em hexadecimal, 90 caracteres + sua cor em hexadecimal, 18 caracteres + sua cor de texto + sua cor de fundo, também a ação possui uma cor de fundo! 
          Lembre-se que os espaços também são contados como caracteres e escolha cores que não sejam a mesma do fundo para os textos ao mesmo tempo que incentiva o cliente.
          Pode deixar a resposta sempre nesse formato de exemplo:
          **Título:**Pix em até 12x!**#2E86C1**
          **Subtítulo:**Divida suas compras online e pague em parcelas sem juros.**#FFFFFF**
          **Call to Action:**Experimente agora!**#FFFFFF**#2E86C1**
          **Cor de Fundo:**Corfundo em hexadecimal**`
        );
        const text = response.response.text();
        list_aco = text.split("*");
        // console.log(text);
        console.log(list_aco);
        console.log(list_aco.length);
      } while (list_aco.length != "33");
      //-------------------------------------------//
      titulo.value = list_aco[4];
      corTitulo.value = list_aco[6];
      subtitulo.value = list_aco[12];
      corSubtitulo.value = list_aco[14];
      textoCTA.value = list_aco[20];
      corTextoCTA.value = list_aco[22];
      corFundoCTA.value = list_aco[24];
      corBordaCTA.value = list_aco[24];
      corInicio.value = list_aco[30];
      corFim.value = list_aco[30];
      //-------------------------------------------//

      updatePreview();
    } catch (error) {
      console.error("Error:", error);
      alert(
        "An error occurred while communicating with Gemini. Please try again later."
      );
    }
  }
});
