async function generatePDF() {
  const textInput = document.getElementById('textInput').value;
  const Numbers_zeros = [0,0,0,0,0,0,0,0,0,0];

  // agencia/conta
  // Data Vencimento
  // Exercício
  // REnavam
  // Lógica da cota/parcela sendo:
// 1= 1 parcela, 2,3; 9= cota única (com desconto). 4= Valor inferior ao mínimo (cota única sem desconto)
// 
// 

  // Extrair os dados do texto
  const valorDocumentoMatch = textInput.match(/Valor do documento\s*:\s*R\$\s*([\d,.]+)/i);
  const codigoBarrasMatch = textInput.match(/Codigo de Barras\s*:\s*(\d{44})/i);
  const dataMovimentoMatch = textInput.match(/Data do movimento\s*:\s*(\d{2})\/(\d{2})\/(\d{4})/i);
  const dataVencimentoMatch = textInput.match(/Data de vencimento\s*:\s*([^\n]+)\b/i);
  const nsuMatch = textInput.match(/Nsu\s*:\s*(\d+)/i);
  const agenciaRecebedoraMatch = textInput.match(/Agencia recebedora\s*:\s*(\d+)/i);
  const horarioCanalMatch = textInput.match(/Hora no Canal\s*:\s*(\d{2}:\d{2}:\d{2})/i);
  const NomeMatch = textInput.match(/Nome do cliente\s*:\s*(.+)/i);
  const agenciaMatch = textInput.match(/Agencia\s*:\s*(\d+)\s*-\s*([^\n]+)/i);
  const formaPagamentoMatch = textInput.match(/Forma de Recebimento\s*:\s*(\d+)\s*-\s*([^\n]+)\b/i);
  const contaMatch = textInput.match(/Conta para Debito\s*:\s*([^\n]+)\b/i);
  const exercicioMetch = textInput.match(/Ano de Exercicio\s*:\s*([^\n]+)\b/i);
  const renavamMetch = textInput.match(/Codigo RENAVAM\s*:\s*([^\n]+)\b/i);
  const cotaMetch = textInput.match(/Numero da Parcela \s*:\s*([^\n]+)\b/i);

  let cota = cotaMetch[1]
  //console.log(typeof(nsuMatch[1]))

  if (cota === '1') {
    cota = '1ª parcela'
  }
  else if (cota === '2'){
    cota = '2ª parcela'
  }
  else if (cota === '3'){
    cota = '3ª parcela'
  }
  else if (cota === '4'){
    cota = 'Valor inferior ao mínimo (cota única sem desconto)'
  }else{
    cota = 'Cota única (com desconto)'
  }
  
  const agenciaDescricao = agenciaMatch ? agenciaMatch[2] : 'N/A';
  // console.log(dataVencimentoMatch)
  const formaPagamentoDescricao = formaPagamentoMatch ? formaPagamentoMatch[2] : 'N/A';
 

  const valorDocumento = valorDocumentoMatch && valorDocumentoMatch[1] ? parseFloat(valorDocumentoMatch[1].replace(',', '.')) : 0;
  const valorDocumentoFormatado = valorDocumento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const codigoBarras = codigoBarrasMatch ? codigoBarrasMatch[1] : '';
  const diaPagamento = dataMovimentoMatch ? dataMovimentoMatch[1] : '';
  const mesPagamento = dataMovimentoMatch ? dataMovimentoMatch[2] : '';
  const anoPagamento = dataMovimentoMatch ? dataMovimentoMatch[3].slice(-4) : '';
  const nsu = nsuMatch ? nsuMatch[1].substr(-6) : '';
  const agenciaRecebedora = agenciaRecebedoraMatch ? agenciaRecebedoraMatch[1] : '';
  const horarioCanal = horarioCanalMatch ? horarioCanalMatch[1].substr(0, 5) : '';
  
  // Remover caracteres especiais (":") do horário
  const horarioCanalSemCaracteresEspeciais = horarioCanal.replace(/:/g, '');

  //Realiza os 0 amais do valor na autenticação
  const valordocNSU = valorDocumentoMatch[1].replace(',', '').split("");
  var aux = Numbers_zeros.length;
  for (let index = valordocNSU.length; index >= 0; index--) {
    Numbers_zeros[aux] = valordocNSU[index];
    aux--;
  }
  Numbers_zeros.pop()
  //console.log(Numbers_zeros);
  
  // Calculando a autenticação conforme a fórmula fornecida
  const valorPago = valorDocumento.toString().replace('.', '');
  const autenticacao = `${agenciaRecebedora}${anoPagamento}${mesPagamento}${diaPagamento}${horarioCanalSemCaracteresEspeciais}${Numbers_zeros.join("")}${nsuMatch[1]}`;

// Obter a data e hora atual no formato DD/MM/AAAA HH:mm
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
const yyyy = today.getFullYear();

const hours = String(today.getHours()).padStart(2, '0');
const minutes = String(today.getMinutes()).padStart(2, '0');


const dataEmissao = `${dd}/${mm}/${yyyy} ${hours}:${minutes}`;

// Carregar o conteúdo do HTML externo
const response = await fetch('table_template.html');
const htmlContent = await response.text();

//traz oo convênio
const convenio = document.getElementById('convenio').value;

  // Preencher os dados na tabela no HTML
  const modifiedHtmlContent = htmlContent
  .replace('<td id="codigoBarras"></td>', `<td class="foco" id="codigoBarras">${codigoBarras}</td>`)
  .replace('<td id="valorPago"></td>', `<td class="foco" id="valorPago">${valorDocumentoFormatado}</td>`)
  .replace('<td id="canalPagamento"></td>', `<td class="foco" id="canalPagamento">${agenciaDescricao.replace('_', ' ')}</td>`)
  .replace('<td id="formaPagamento"></td>', `<td class="foco" id="formaPagamento">${formaPagamentoDescricao}</td>`)
  .replace('<td id="dataMovimento"></td>', `<td class="foco" id="dataMovimento">${diaPagamento}/${mesPagamento}/${anoPagamento}</td>`)
  .replace('<td id="vencimento"></td>', `<td class="foco" id="vencimento">${dataVencimentoMatch[1]}</td>`)
  .replace('<td id="nsu"></td>', `<td class="foco" id="nsu">${nsuMatch[1]}</td>`)
  .replace('<td id="nomepagador"></td>', `<td class="foco" id="nomepagador">${NomeMatch[1]}</td>`)
  .replace('<td id="agenciaRecebedora"></td>', `<td class="foco" id="agenciaRecebedora">${agenciaRecebedora}</td>`)
  .replace('<td id="autenticacao"></td>', `<td class="foco" id="autenticacao">0389${autenticacao}</td>`)
  .replace('<td id="convenio"></td>', `<td class="foco" id="convenio">${convenio}</td>`)
  .replace('<td id="exercicio"></td>', `<td class="foco" id="exercicio">${exercicioMetch[1]}</td>`)
  .replace('<td id="renavam"></td>', `<td class="foco" id="renavam">${renavamMetch[1]}</td>`)
  .replace('<td id="cotaParcela"></td>', `<td class="foco" id="cotaParcela">${cota}</td>`)
  .replace('<span id="numerotransação"></span>', `<span id="numerotransação">${nsuMatch[1]}</span>`)
  .replace('<td id="agenciaconta"></td>', `<td class="foco" id="agenciaconta">${agenciaRecebedora}/${contaMatch[1]}</td>`)
  .replace('<td id="DataEmissão"></td>', `<td class="foco" id="DataEmissão">${dataEmissao}</td>`);




  // Criar um elemento temporário para armazenar a tabela
  const tempElement = document.createElement('div');
  tempElement.innerHTML = modifiedHtmlContent;

  // Converter a tabela HTML em PDF
  html2pdf(tempElement, {
    margin: [10, 10, 10, 10],
    filename: 'comprovante_'+nsuMatch[1]+'.pdf',
    html2canvas: { dpi: 600, scale: 4 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  });
}
