
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>ACOWEB</title>

    <!-- Custom fonts for this template-->
    <link rel="icon" href="/img/TB_ico.ico" type="image/x-icon">
    <link href="../../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="../../css/sb-admin-2.min.css" rel="stylesheet">

    <style>

    </style>

</head>

<style>
  <?php
  include './style.css'
  ?>
  <?php
  include './stylepopup.css'
  ?>
</style>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- sidebar -->
        <?php
            include '../../sections/sidebar.php'
        ?>

        <!-- Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Conteúdo -->
            <div id="content">

                <!-- Início do conteúdo -->
                <div class="container-fluid">

                    <!-- Page TItulo -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800 mt-5">Criar ação Popup</h1>
                    </div>

                    <!-- Content Row -->
                    <div class="row">
                        <!-- ########################### -->
                        <section class="container">
                          <main>

                            <div class="grid-container">
                              <div class="esquerda">
                                <div class="inputInline">
                                  <div class="labelInput">
                                    <label for="numeroAcao">Ação</label>
                                    <input
                                      type="number"
                                      id="numeroAcao"
                                      step="0.01"
                                      required
                                      placeholder="00000"
                                    />
                                  </div>

                                  <div class="labelInput">
                                    <!-- <label for="imagem">Selecione uma imagem</label> -->
                                    <label for="imagem" class="slectImagem">Selecionar imagem</label>
                                    <input
                                      type="file"
                                      id="imagem"
                                      name="imagem"
                                      accept=".png, .jpeg, .jpg"
                                      required
                                      placeholder="Selecione uma imagem"
                                      value="Escolher arquivo"
                                    />
                                  </div>

                                  <script>
        document.getElementById('imagem').addEventListener('change', function() {
            const file = this.files[0]; // Obter o arquivo selecionado

            if (file) {
                const limiteTamanhoBytes = 100 * 1024; // Limite de 100KB em bytes

                // Verificar o tamanho do arquivo
                if (file.size > limiteTamanhoBytes) {
                    alert('O tamanho da imagem não pode ultrapassar 100KB.');
                    // Limpar o input file selecionado
                    this.value = ''; // Limpar o valor para permitir que o usuário selecione novamente
                }
            }
        });
    </script>
                                </div>

                                <div class="labelInput">
                                  <label for="tipoLayout">Tipo de layout</label>
                                  <select id="tipoLayout">
                                    <option value="333">
                                      POPUP COM IMAGEM SUPERIOR - TITULO, SUBTÍTULO, TEXTO CTA (BOTÃO)
                                    </option>
                                    <option value="334">
                                      POPUP COM IMAGEM INFERIOR - TITULO, SUBTÍTULO, TEXTO CTA (BOTÃO)
                                    </option>
                                    <option value="335">
                                      POPUP COM IMAGEM LIVRE (TEXTOS JÁ FIXOS NA IMAGEM)
                                    </option>
                                  </select>
                                </div>

                                <!-- área ocultada no layout 335 -->
                                <div id="optionsLayout">
                                  <div class="inputInline">
                                    <div class="labelInput1">
                                      <label for="titulo">Titulo</label>
                                      <input
                                        type="text"
                                        id="titulo"
                                        class="inputmax"
                                        placeholder="Escreva um titulo"
                                      />
                                    </div>
                                  </div>

                                  <div class="inputInline">
                                    <div class="inputInline">
                                      <div class="labelInput">
                                        <label for="tamanhoT">Tamanho do titulo</label>
                                        <select name="tamanhotit" id="tamanhoT">
                                          <option value="65">grande</option>
                                          <option value="40">pequeno</option>
                                          <option value="50">medio</option>
                                        </select>
                                      </div>

                                      <div class="labelInput">
                                        <label for="ccorTitulo">Cor do titulo</label>
                                        <input type="text" id="corTitulo" placeholder="#000000" />
                                      </div>
                                    </div>
                                  </div>

                                  <div class="inputInline">
                                    <div class="labelInput1">
                                      <label for="subtitulo">Subtítulo</label>
                                      <input
                                        type="text"
                                        id="subtitulo"
                                        class="inputmax"
                                        placeholder="Escreva um subtitulo"
                                      />
                                    </div>
                                  </div>

                                  <div class="inputInline">
                                    <div class="labelInput">
                                      <label for="tamanhoS">Tamanho do subtitulo</label>
                                      <select name="tamanhosub" id="tamanhoS">
                                        <option value="22">pequeno</option>
                                        <option value="28">medio</option>
                                        <option value="32">grande</option>
                                      </select>
                                    </div>

                                    <div class="labelInput">
                                      <label for="corSubtitulo">Cor do subtítulo</label>
                                      <input type="text" id="corSubtitulo" placeholder="#000000" />
                                    </div>
                                  </div>

                                  <div class="inputInline">
                                    <div class="labelInput">
                                      <label for="textoCTA">Texto CTA</label>
                                      <input type="text" id="textoCTA" placeholder="Escreva a CTA" />
                                    </div>

                                    <div class="labelInput">
                                      <label for="corTextoCTA">Cor do texto CTA</label>
                                      <input type="text" id="corTextoCTA" placeholder="#000000" />
                                    </div>
                                  </div>

                                  <!-- BG -->
                                  <div class="inputInline">
                                    <div class="labelInput">
                                      <label for="corInicio">Cor de início do fundo</label>
                                      <input type="text" id="corInicio" placeholder="#000000" />
                                    </div>

                                    <div class="labelInput">
                                      <label for="corFim">Cor de fim do fundo</label>
                                      <input type="text" id="corFim" placeholder="#000000" />
                                    </div>
                                  </div>

                                  <div class="inputInline">
                                    <div class="labelInput">
                                      <label for="corFundoCTA">Cor de fundo CTA</label>
                                      <input type="text" id="corFundoCTA" placeholder="#000000" />
                                    </div>

                                    <div class="labelInput">
                                      <label for="corBordaCTA">Cor da borda CTA</label>
                                      <input type="text" id="corBordaCTA" placeholder="#000000" />
                                    </div>
                                  </div>
                                  <!-- fim BG -->
                                </div>
                                <!-- fim inputs por layout -->

                                <div class="inputInline">
                                  <div class="labelInput">
                                    <label for="textoBtnFechar">Texto botão fechar</label>
                                    <input
                                      type="text"
                                      id="textoBtnFechar"
                                      placeholder="texto botão fechar"
                                    />
                                  </div>

                                  <div class="labelInput">
                                    <label for="corBtnFechar">Cor botão fechar</label>
                                    <input type="text" id="corBtnFechar" placeholder="#000000" />
                                  </div>
                                </div>

                                <!-- Tipos de redirecionamentos -->
                                <div class="inputInline">
                                  <div class="labelInput">
                                    <label for="tipolink">Link</label>
                                    <select id="tipoLink">
                                      <option value="3" selected>Push Deep Link</option>
                                      <!-- def -->
                                      <option value="1">Sem redirecionamento</option>
                                      <option value="2">Link</option>
                                    </select>
                                  </div>

                                  <div id="optionslink">
                                    <div class="labelInput" id="linkDiv">
                                      <label for="link">Link</label>
                                      <input
                                        type="text"
                                        id="link"
                                        required
                                        placeholder="Https://wwwmercantil.com.br"
                                      />
                                      <label for="codigo">codigo</label>
                                      <input type="text" id="codigo" required placeholder="123456" />
                                    </div>

                                    <div class="labelInput" id="idDiv">
                                      <label for="ID">Redirecionamento</label>
                                      <select id="ID">
                                        <option value="">Selecione</option>
                                        <option value="0">Home App</option>
                                        <option value="2">2 - Empréstimo Menu</option>
                                        <option value="3">3 - Emprestimo Produtos</option>
                                        <option value="4">4 - PIX Home</option>
                                        <option value="5">5 - CDB Pre-Fixado</option>
                                        <option value="6">6 - CDB Pós-Fixado</option>
                                        <option value="7">7 - Recarga Celular</option>
                                        <option value="8">8 - Débito Automatico Menu</option>
                                        <option value="9">9 - Extrato</option>
                                        <option value="10">10 - Pagamento Codigo Barras</option>
                                        <option value="11">11 - Pagamento Digitar Codigo Barras</option>
                                        <option value="12">12 - Pagamento PIX Chave</option>
                                        <option value="13">13 - Pagamento PIX QrCode</option>
                                        <option value="14">14 - Pagamento PIX Copia e cola</option>
                                        <option value="15">15 - PIX - receber QrCode</option>
                                        <option value="16">16 - Seguro Transferência Protegida</option>
                                        <option value="17">17 - Saque Cartão Consignado</option>
                                        <option value="18">18 - Desbloqueio de Cartão</option>
                                        <option value="19">19 - Empréstimo Saque Aniversário</option>
                                        <option value="20">20 - Faturas - Home Cartões</option>
                                        <option value="21">
                                          21 - Limites de Crédito - Home Cartões
                                        </option>
                                        <option value="22">22 - 1 Via de Cartão - Home Cartões</option>
                                        <option value="23">23 - Bloqueio - Home Cartões</option>
                                        <option value="24">24 - Desbloqueio - Home Cartões</option>
                                        <option value="25">25 - Recuperar Senha - Home Cartões</option>
                                        <option value="26">26 - Aviso de Viagem - Home Cartões</option>
                                        <option value="27">27 - Contactless - Home Cartões</option>
                                        <option value="28">28 - Empréstimo Combo de Crédito</option>
                                        <option value="29">
                                          29 - Atualização de Dados Cadastrais - Todos os dados
                                        </option>
                                        <option value="30">
                                          30 - Atualização de Dados Cadastrais - Telefones de contato
                                        </option>
                                        <option value="31">
                                          31 - Atualização de Dados Cadastrais - Endereço de
                                          correspondência
                                        </option>
                                        <option value="32">32 - Bloqueio de Cartão</option>
                                        <option value="33">33 - Investimentos Menu</option>
                                        <option value="38">38 - Perfil de investidor</option>
                                        <option value="39">39 - Informe de Rendimentos</option>
                                        <option value="40">40 - Minhas Chaves PIX</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <br />
                                <p id="statusArquivo"></p>
                              </div>

                              <div class="direita">
                                <div class="carregarpreview" id="previewsContainer">
                                  <!-- preview carregado por model inner.html -->
                                </div>
                                <button onclick="gerarScript()">Gerar script</button>
                              </div>
                            </div>
                            <!-- fim do grid -->
                          </main>
                        </section>

                        <!-- ########################### -->
                    </div>
                </div>
                <!-- /.container-fluid -->
            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <?php
                include '../../sections/footer.php'
            ?>
        </div>
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>


    <?php
        include '../../sections/modal-logout.php'
    ?>

    <!-- Bootstrap core JavaScript-->
    <script src="../../vendor/jquery/jquery.min.js"></script>
    <script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="../../js/sb-admin-2.min.js"></script>

    <!-- Page level plugins -->
    <script src="../../vendor/chart.js/Chart.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="../../js/demo/chart-area-demo.js"></script>
    <script src="../../js/demo/chart-pie-demo.js"></script>

    <script src="./script.js"></script>

</body>

</html>