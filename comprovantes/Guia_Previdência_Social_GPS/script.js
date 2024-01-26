async function generatePDF() {
  const textInput = document.getElementById('textInput').value;

  // Extrair os dados do texto
  const valorDocumentoMatch = textInput.match(/Valor liquido a debitar\s*:\s*R\$\s*([\d,.]+)/i);
  const agenciaMatch = textInput.match(/Agencia\s*:\s*(\d+)\s*-\s*([^\n]+)/i);
  const formaPagamentoMatch = textInput.match(/Forma de Pagamento\s*:\s*(\d+)\s*-\s*([^\n]+)\b/i);
  const codigoBarrasMatch = textInput.match(/Codigo de Barras\s*:\s*(\d{44})/i);
  const dataMovimentoMatch = textInput.match(/Data do movimento\s*:\s*(\d{2})\/(\d{2})\/(\d{4})/i);
  const dataVencimentoMatch = textInput.match(/Data de vencimento\s*:\s*(\d{2})\/(\d{2})\/(\d{4})/i);
  const agenciaRecebedoraMatch = textInput.match(/Agencia recebedora\s*:\s*(\d+)/i);
  const nsuMatch = textInput.match(/Nsu\s*:\s*(\d+)/i);
  const horarioCanalMatch = textInput.match(/Hora no Canal\s*:\s*(\d{2}:\d{2}:\d{2})/i);
  
  const valorDocumento = valorDocumentoMatch && valorDocumentoMatch[1] ? parseFloat(valorDocumentoMatch[1].replace(',', '.')) : 0;
  const valorDocumentoFormatado = valorDocumento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const codigoBarras = codigoBarrasMatch ? codigoBarrasMatch[1] : '';
  const nsu = nsuMatch ? nsuMatch[1].substr(-6) : '';
  const agenciaRecebedora = agenciaRecebedoraMatch ? agenciaRecebedoraMatch[1] : '';
  const horarioCanal = horarioCanalMatch ? horarioCanalMatch[1].substr(0, 5) : '';
  
  const agenciaDescricao = agenciaMatch ? agenciaMatch[2] : 'N/A';
  const agenciaDescricaoFloat = parseFloat(agenciaDescricao);
  const formaPagamentoDescricao = formaPagamentoMatch ? formaPagamentoMatch[2] : 'N/A';
  
  console.log(formaPagamentoDescricao)

  // retorna o array da data de pagamento
  const diaPagamento = dataMovimentoMatch ? dataMovimentoMatch[1] : '';
  const mesPagamento = dataMovimentoMatch ? dataMovimentoMatch[2] : '';
  const anoPagamento = dataMovimentoMatch ? dataMovimentoMatch[3].slice(-4) : '';

  // retorna o array da data de vencimento
  const diaVencimento = dataVencimentoMatch ? dataVencimentoMatch[1] : '';
  const mesVencimento = dataVencimentoMatch ? dataVencimentoMatch[2] : '';
  const anoVencimento = dataVencimentoMatch ? dataVencimentoMatch[3] : '';


  //  constroi a data de vencimento
  const dataVencimento = `${diaVencimento}/${mesVencimento}/${anoVencimento}`;

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

  //  Constroi a data de emissão para a tabela
  const dataEmissao = `${dd}/${mm}/${yyyy} ${hours}:${minutes}`;

  //Tem código de barras?
  const possuiCodigo = document.getElementById('possuiCodigo').value;

  // Carregar o conteúdo do HTML externo
  const response = await fetch('table_template.html');
  const htmlContent = await response.text();

  
  // Preencher os dados na tabela no HTML
  const modifiedHtmlContent = htmlContent

  .replace('<td id="canalPagamento"></td>', `<td class="foco" id="canalPagamento">${agenciaDescricao.replace('_', ' ')}</td>`)
  .replace('<td id="formaPagamento"></td>', `<td class="foco" id="formaPagamento">${formaPagamentoDescricao}</td>`)
  .replace('<td id="valorPago"></td>', `<td class="foco" id="valorPago">${valorDocumentoFormatado}</td>`)
  .replace('<td id="dataMovimento"></td>', `<td class="foco" id="dataMovimento">${diaPagamento}/${mesPagamento}/${anoPagamento}</td>`)
  .replace('<td id="dataVencimento"></td>', `<td class="foco" id="dataVencimento">${dataVencimento}</td>`)
  .replace('<td id="nsu"></td>', `<td class="foco" id="nsu">${nsuMatch[1]}</td>`)
  .replace('<td id="agenciaRecebedora"></td>', `<td class="foco" id="agenciaRecebedora">${agenciaRecebedora}</td>`)
  .replace('<td id="autenticacao"></td>', `<td class="foco" id="autenticacao">0389${autenticacao}</td>`)
  .replace('<td id="DataEmissão"></td>', `<td class="foco" id="DataEmissão">${dataEmissao}</td>`);

  // Se possui código, adiciona. Do contrário, oculta a linha.
  if (possuiCodigo === 'sim') {
    modifiedHtmlContent = htmlContent.replace('<td id="codigoBarras"></td>', `<td class="foco" id="codigoBarras">${codigoBarras}</td>`);
  } else {
    modifiedHtmlContent = htmlContent.replace('<td>Código de Barras</td>','');
  }


  // Oculta a linha de código de barras
  const codigoBarrasRow = document.getElementById('codigo');
  if (possuiCodigo !== 'sim') {
    codigoBarrasRow.style.display = 'none';
  }

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
