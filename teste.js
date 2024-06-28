// Captura o botão e a imagem pelo ID
const changeImageBtn = document.getElementById("changeImageBtn");
const myImage = document.getElementById("myImage");

// Define um array com os caminhos das imagens que você deseja alternar
const imagePaths = [
  "aco/test_img/carro.png",
  "aco/test_img/moto.png",
  "aco/test_img/pessoa.png",
];

let currentImageIndex = 0;

// Define a função para mudar a imagem quando o botão for clicado
changeImageBtn.addEventListener("click", function () {
  currentImageIndex = (currentImageIndex + 1) % imagePaths.length; // Avança para o próximo índice circularmente
  myImage.src = imagePaths[currentImageIndex]; // Atualiza o src da imagem com o novo caminho
});
