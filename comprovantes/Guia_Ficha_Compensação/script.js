async function generatePDF() {
  const textInput = document.getElementById('textInput').value;

  // Extrair os dados do texto
  const valorDocumentoMatch = textInput.match(/Valor do documento\s*:\s*R\$\s*([\d,.]+)/i);
  const codigoBarrasMatch = textInput.match(/Codigo de Barras\s*:\s*(\d{44})/i);
  const dataMovimentoMatch = textInput.match(/Data do movimento\s*:\s*(\d{2})\/(\d{2})\/(\d{4})/i);
  const nsuMatch = textInput.match(/Nsu\s*:\s*(\d+)/i);
  const agenciaRecebedoraMatch = textInput.match(/Agencia recebedora\s*:\s*(\d+)/i);
  const horarioCanalMatch = textInput.match(/Hora no Canal\s*:\s*(\d{2}:\d{2}:\d{2})/i);
  const NomeMatch = textInput.match(/Nome do cliente\s*:\s*(.+)/i);
  const agenciaMatch = textInput.match(/Agencia\s*:\s*(\d+)\s*-\s*([^\n]+)/i);
  const formaPagamentoMatch = textInput.match(/Forma de Pagamento\s*:\s*(\d+)\s*-\s*([^\n]+)\b/i);
  
  const agenciaDescricao = agenciaMatch ? agenciaMatch[2] : 'N/A';
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

  // Calculando a autenticação conforme a fórmula fornecida
  const valorPago = valorDocumento.toString().replace('.', '');
  const autenticacao = `${agenciaRecebedora}${anoPagamento}${mesPagamento}${diaPagamento}${horarioCanalSemCaracteresEspeciais}${valorDocumentoMatch[1].replace(',', '')}${nsuMatch[1]}`;

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

const cpfcnpjMatch = textInput.match(/CPF\/CNPJ do sacado\s*:\s*(\d+)/i);
const numero = cpfcnpjMatch[1];

let formato = '';
let numeroFormatado = '';

if (cpfcnpjMatch && cpfcnpjMatch[1]) {
  const numero = cpfcnpjMatch[1];

  if (/^\d{14}$/.test(numero) && /^[1-9]/.test(numero.substr(0, 3))) {
    // Se o número tem exatamente 14 dígitos e os três primeiros não são zero, é CNPJ
    formato = 'CNPJ';
    numeroFormatado = numero.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  } else {
    // Do contrário CPF ***Se levar em consideração que o LOG nunca erra
    formato = 'CPF';
    numeroFormatado = numero.substr(3).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
} else {
  console.log('CPF/CNPJ não encontrado no texto.');
}

  // Preencher os dados na tabela no HTML
  const modifiedHtmlContent = htmlContent
  .replace('<td id="codigoBarras"></td>', `<td id="codigoBarras">${codigoBarras}</td>`)
  .replace('<td id="valorPago"></td>', `<td id="valorPago">${valorDocumentoFormatado}</td>`)
  .replace('<td id="canalPagamento"></td>', `<td class="foco" id="canalPagamento">${agenciaDescricao.replace('_', ' ')}</td>`)
  .replace('<td id="formaPagamento"></td>', `<td class="foco" id="formaPagamento">${formaPagamentoDescricao}</td>`)
  .replace('<td id="dataMovimento"></td>', `<td id="dataMovimento">${diaPagamento}/${mesPagamento}/${anoPagamento}</td>`)
  .replace('<td id="nsu"></td>', `<td id="nsu">${nsuMatch[1]}</td>`)
  .replace('<td id="nomepagador"></td>', `<td id="nomepagador">${NomeMatch[1]}</td>`)
  .replace('<td id="cpfcnpj"></td>', `<td id="cpfcnpj">${numeroFormatado}</td>`)
  .replace('<td id="agenciaRecebedora"></td>', `<td id="agenciaRecebedora">${agenciaRecebedora}</td>`)
  .replace('<td id="autenticacao"></td>', `<td id="autenticacao">0389${autenticacao}</td>`)
  .replace('<td id="convenio"></td>', `<td id="convenio">${convenio}</td>`)
  .replace('<td id="DataEmissão"></td>', `<td id="DataEmissão">${dataEmissao}</td>`);



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
