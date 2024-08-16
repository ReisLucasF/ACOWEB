
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
    <link href="../../css/sb-admin-2.css" rel="stylesheet">

    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">


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
    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- sidebar -->
        <?php include '../../sections/sidebar.php'; ?>

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Container Fluid -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800 mt-5">Criar ação Popup</h1>
                    </div>

                    <!-- Content Row -->
                    <div class="row">
                        
                        <!-- Esquerda -->
                        <section class="col-md-7">
                          <main>
                            <div class="esquerda">
                              <div class="form-row mb-1">
                                <div class="col-md-6">
                                  <label for="numeroAcao">Ação</label>
                                  <input type="number" class="form-control" id="numeroAcao" step="0.01" required placeholder="00000" />
                                </div>

                                <div class="col-md-6 d-flex align-items-center">
                                  <label for="imagem" class="slectImagem btn btn-primary">Selecionar imagem</label>
                                  <input type="file" id="imagem" name="imagem" accept=".png, .jpeg, .jpg" required class="d-none" />
                                </div>
                              </div>

                              <div class="form-group mb-1">
                                <label for="tipoLayout">Tipo de layout</label>
                                <select id="tipoLayout" class="form-control">
                                  <option value="333">POPUP COM IMAGEM SUPERIOR - TÍTULO, SUBTÍTULO, TEXTO CTA (BOTÃO)</option>
                                  <option value="334">POPUP COM IMAGEM INFERIOR - TÍTULO, SUBTÍTULO, TEXTO CTA (BOTÃO)</option>
                                  <option value="335">POPUP COM IMAGEM LIVRE (TEXTOS JÁ FIXOS NA IMAGEM)</option>
                                </select>
                              </div>

                              <!-- Inputs por layout -->
                              <div id="optionsLayout">
                                <div class="form-row mb-1">
                                  <div class="col-md-12">
                                    <label for="titulo">Título</label>
                                    <input type="text" id="titulo" class="form-control inputmax" placeholder="Escreva um título" />
                                  </div>
                                </div>

                                <div class="form-row mb-1">
                                  <div class="col-md-6">
                                    <label for="tamanhoT">Tamanho do título</label>
                                    <select name="tamanhotit" id="tamanhoT" class="form-control">
                                      <option value="65">Grande</option>
                                      <option value="40">Pequeno</option>
                                      <option value="50">Médio</option>
                                    </select>
                                  </div>
                                  <div class="col-md-6">
                                    <label for="corTitulo">Cor do título</label>
                                    <input type="text" id="corTitulo" class="form-control" placeholder="#000000" />
                                  </div>
                                </div>

                                <div class="form-row mb-1">
                                  <div class="col-md-12">
                                    <label for="subtitulo">Subtítulo</label>
                                    <input type="text" id="subtitulo" class="form-control inputmax" placeholder="Escreva um subtítulo" />
                                  </div>
                                </div>

                                <div class="form-row mb-1">
                                  <div class="col-md-6">
                                    <label for="tamanhoS">Tamanho do subtítulo</label>
                                    <select name="tamanhosub" id="tamanhoS" class="form-control">
                                      <option value="22">Pequeno</option>
                                      <option value="28">Médio</option>
                                      <option value="32">Grande</option>
                                    </select>
                                  </div>
                                  <div class="col-md-6">
                                    <label for="corSubtitulo">Cor do subtítulo</label>
                                    <input type="text" id="corSubtitulo" class="form-control" placeholder="#000000" />
                                  </div>
                                </div>

                                <div class="form-row mb-1">
                                  <div class="col-md-6">
                                    <label for="textoCTA">Texto CTA</label>
                                    <input type="text" id="textoCTA" class="form-control" placeholder="Escreva a CTA" />
                                  </div>
                                  <div class="col-md-6">
                                    <label for="corTextoCTA">Cor do texto CTA</label>
                                    <input type="text" id="corTextoCTA" class="form-control" placeholder="#000000" />
                                  </div>
                                </div>

                                <!-- BG -->
                                <div class="form-row mb-1">
                                  <div class="col-md-6">
                                    <label for="corInicio">Cor de início do fundo</label>
                                    <input type="text" id="corInicio" class="form-control" placeholder="#000000" />
                                  </div>
                                  <div class="col-md-6">
                                    <label for="corFim">Cor de fim do fundo</label>
                                    <input type="text" id="corFim" class="form-control" placeholder="#000000" />
                                  </div>
                                </div>

                                <div class="form-row mb-1">
                                  <div class="col-md-6">
                                    <label for="corFundoCTA">Cor de fundo CTA</label>
                                    <input type="text" id="corFundoCTA" class="form-control" placeholder="#000000" />
                                  </div>
                                  <div class="col-md-6">
                                    <label for="corBordaCTA">Cor da borda CTA</label>
                                    <input type="text" id="corBordaCTA" class="form-control" placeholder="#000000" />
                                  </div>
                                </div>
                              </div>
                              <!-- fim inputs por layout -->

                              <div class="form-row mb-1">
                                <div class="col-md-6">
                                  <label for="textoBtnFechar">Texto botão fechar</label>
                                  <input type="text" id="textoBtnFechar" class="form-control" placeholder="Texto botão fechar" />
                                </div>
                                <div class="col-md-6">
                                  <label for="corBtnFechar">Cor botão fechar</label>
                                  <input type="text" id="corBtnFechar" class="form-control" placeholder="#000000" />
                                </div>
                              </div>

                              <!-- Tipos de redirecionamentos -->
                              <div class="form-row mb-1">
                                <div class="col-md-6">
                                  <label for="tipolink">Link</label>
                                  <select id="tipoLink" class="form-control">
                                    <option value="3" selected>Push Deep Link</option>
                                    <option value="1">Sem redirecionamento</option>
                                    <option value="2">Link</option>
                                  </select>
                                </div>

                                <div class="col-md-6" id="optionslink">
                                    <div id="linkDiv">
                                      <label for="link">Link</label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="link"
                                        required
                                        placeholder="Https://www.mercantil.com.br"
                                      />
                                      <label for="codigo">codigo</label>
                                      <input type="text" class="form-control" id="codigo" required placeholder="123456" />
                                    </div>

                                    <div class="col-md-12" id="idDiv">
                                      <label for="ID">Redirecionamento</label>
                                      <select id="ID" class="form-control">
                                        <option value="">Selecione</option>
                                        <option value="0">0 - Home App</option>
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
                                        <option value="21">21 - Limites de Crédito - Home Cartões</option>
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

                              <div class="AIGenerative mt-4">
                                <p class="tittleia">Ação por IA Generativa</p>
                                <p class="text_info">Agora você pode gerar ações comerciais com a ajuda da inteligência artificial.</p>
                                <textarea cols="52" rows="2" name="teste" id="user-input" class="form-control" placeholder="Fale sobre sua ação"></textarea>
                                <button id="send-button" class="btn btn-primary mt-3 w-100">Gerar por IA</button>
                              </div>
                            </div>
                          </main>
                        </section>
                        <!-- Fim Esquerda -->
                              
                        <!-- Direita -->
                        <section class="col-md-5">
                          <p id="statusArquivo"></p>
                          <div class="carregarpreview" id="previewsContainer">
                            <!-- preview carregado por model inner.html -->
                          </div>
                          <button onclick="gerarScript()" id="baixarbtn" class="btn btn-primary mt-3">Baixar Script</button>
                        </section>
                        <!-- Fim Direita -->
                    
                    </div>
                    <!-- End Content Row -->

                </div>
                <!-- End Container Fluid -->

            </div>
            <!-- End Main Content -->

        </div>
        <!-- End Content Wrapper -->

    </div>
    <!-- End Page Wrapper -->

    <script type="importmap">
      {
        "imports": {
          "@google/generative-ai": "https://esm.run/@google/generative-ai"
        }
      }
    </script>

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
    <script src="../../js/sb-admin-2.js"></script>

    <!-- Page level plugins -->
    <script src="../../vendor/chart.js/Chart.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="../../js/demo/chart-area-demo.js"></script>
    <script src="../../js/demo/chart-pie-demo.js"></script>

    <script src="./script.js"></script>
    <script type="module" src="./AI_Generative.js"></script>
     <!-- Footer -->

</body>

</html>