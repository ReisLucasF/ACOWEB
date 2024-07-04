document
  .getElementById("tipoLink")
  .addEventListener("change", atualizarCamposRedirecionamento);

function atualizarCamposRedirecionamento() {
  const tipoLink = document.getElementById("tipoLink").value;
  const idInput = document.getElementById("dropbox");
  const lb = document.getElementById("lb");
  console.log(tipoLink);

  if (tipoLink === "3") {
    lb.style.display = "block";
    idInput.style.display = ""; // Deixe a propriedade de display em branco para restaurar o estilo CSS padrão
  } else {
    idInput.style.display = "none";
    lb.style.display = "none";
  }
}
