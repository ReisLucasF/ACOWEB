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
    idInput.style.display = "block"; // Mostrar novamente se não for 1
  } else {
    idInput.style.display = "none"; // Esconder se for 1
    lb.style.display = "none";
  }
}
