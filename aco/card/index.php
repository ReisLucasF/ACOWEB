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
                        <h1 class="h3 mb-0 text-gray-800 mt-5">Criar ação card</h1>
                    </div>

                    <!-- Content Row -->
                    <div class="row">
                        <!-- ########################### -->
                        <main>
                          <section>
                            <div id="formulario">
                              <form action="" method="get" id="acaoform">
                                <div class="inputInline">
                                  <div class="labelInput">
                                    <label for="numeroAcao">Ação</label>
                                    <input
                                      type="number"
                                      id="numeroAcao"
                                      step="0.01"
                                      required
                                      placeholder="0000"
                                    />
                                  </div>

                                  <div class="labelInput">
                                    <label for="imagem" class="slectImagem">Selecionar imagem</label>
                                    <input
                                      type="file"
                                      id="imagem"
                                      name="imagem"
                                      accept=".png, .jpeg, .jpg"
                                      placeholder="Selecione uma imagem"
                                      value="Escolher arquivo"
                                    />
                                  </div>
                                </div>

                                <div class="labelInput">
                                  <label for="tipoLayout">Tipo de layout</label>
                                  <select id="tipoLayout">
                                    <option value="319">
                                      cartão com imagem à esquerda - título, subtitulo e cta à direita
                                    </option>
                                    <option value="320">
                                      cartão com imagem à esquerda - titulo e cta à direita (sem subtitulo)
                                    </option>
                                    <option value="321">
                                      cartão com imagem à esquerda - subtitulo e cta à direita (sem titulo)
                                    </option>
                                    <option value="271">
                                      cartão com imagem à esquerda - título e subtítulo à direita (sem CTA)
                                    </option>
                                    <option value="322">
                                      cartão com imagem à direita - título, subtítulo e cta à esquerda (botão)
                                    </option>
                                    <option value="323">
                                      cartão com imagem à direita - título e cta à esquerda (sem subtitulo)
                                    </option>
                                    <option value="324">
                                      cartão com imagem à direita - subtítulo e cta à esquerda (sem titulo)
                                    </option>
                                    <option value="275">
                                      cartão com imagem à direita - título e subtítulo à esquerda (sem CTA)
                                    </option>
                                  </select>
                                </div>

                                <div class="inputInline" id="tituloControl">
                                  <div class="labelInput">
                                    <label for="titulo">Titulo</label>
                                    <input type="text" id="titulo" placeholder="Escreva um titulo" />
                                  </div>

                                  <div class="labelInput">
                                    <label for="corTitulo">Cor do título</label>
                                    <input
                                      type="text"
                                      id="corTitulo"
                                      placeholder="#000000"
                                      pattern="^\S+$"
                                    />
                                  </div>
                                </div>

                                <div class="inputInline" id="subtituloControl">
                                  <div class="labelInput">
                                    <label for="subtitulo">Subtítulo</label>
                                    <input
                                      type="text"
                                      id="subtitulo"
                                      placeholder="Escreva um subtitulo"
                                    />
                                  </div>

                                  <div class="labelInput">
                                    <label for="corSubtitulo">Cor do subtítulo</label>
                                    <input
                                      type="text"
                                      id="corSubtitulo"
                                      placeholder="#000000"
                                      pattern="^\S+$"
                                    />
                                  </div>
                                </div>

                                <div class="inputInline"  id="ctaControl">
                                  <div class="labelInput">
                                    <label for="textoCTA">Texto CTA</label>
                                    <input type="text" id="textoCTA" placeholder="Escreva a CTA" />
                                  </div>

                                  <div class="labelInput">
                                    <label for="corTextoCTA">Cor do texto CTA</label>
                                    <input
                                      type="text"
                                      id="corTextoCTA"
                                      minlength="7"
                                      placeholder="#000000"
                                      pattern="^\S+$"
                                    />
                                  </div>
                                </div>

                                <div class="inputInline">
                                  <div class="labelInput">
                                    <label for="corInicio">Cor de início do fundo</label>
                                    <input
                                      type="text"
                                      id="corInicio"
                                      minlength="7"
                                      placeholder="#000000"
                                      pattern="^\S+$"
                                    />
                                  </div>

                                  <div class="labelInput">
                                    <label for="corFim">Cor de fim do fundo</label>
                                    <input
                                      type="text"
                                      id="corFim"
                                      minlength="7"
                                      placeholder="#000000"
                                      pattern="^\S+$"
                                    />
                                  </div>
                                </div>

                                <div class="inputInline"  id="ctaCorControl">
                                  <div class="labelInput">
                                    <label for="corFundoCTA">Cor de fundo CTA</label>
                                    <input
                                      type="text"
                                      id="corFundoCTA"
                                      minlength="7"
                                      maxlength="7"
                                      placeholder="#000000"
                                      pattern="^\S+$"
                                    />
                                  </div>

                                  <div class="labelInput">
                                    <label for="corBordaCTA">Cor da borda CTA</label>
                                    <input
                                      class="cor"
                                      type="text"
                                      id="corBordaCTA"
                                      minlength="7"
                                      maxlength="7"
                                      placeholder="#000000"
                                      pattern="^\S+$"
                                    />
                                  </div>
                                </div>

                                <div class="inputInline">
                                  <div class="labelInput">
                                    <label for="tipolink">Link</label>
                                    <select id="tipoLink">
                                      <option value="3">Push Deep Link</option>
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
                                        placeholder="Https://www.mercantil.com.br"
                                      />
                                      <label for="codigo">codigo</label>
                                      <input type="text" id="codigo" required placeholder="123456" />
                                    </div>

                                    <div class="labelInput" id="idDiv">
                                      <label for="ID">Redirecionamento</label>
                                      <select id="ID">
                                        <option value="0">selecione</option>
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

                                <span id="statusArquivo"></span>
                                <button onclick="gerarScript(event)" id="submit">Gerar script</button>
                              </form>
                            </div>

                            <div class="prev1">
                              <h2 class="titPrev">Pré visualização</h2>

                              <!-- layout 1 -->
                              <div id="cardPreview" style="border: 1px solid #000">
                                <div id="cardPreviewIMG"></div>
                                <div  class="conteudo">
                                  <div id="tituloPreviewControl">
                                    <div id="tituloPreview">Escreva um titulo</div>
                                  </div>
                                  <div id="subtituloPreviewControl">
                                    <div id="subtituloPreview">Estreva um subtitulo</div>
                                  </div>
                                  <div id="textoCTAPreviewControl">
                                    <div id="textoCTAPreview">Escreva a CTA</div>
                                  </div>
                                </div>
                              </div>

                              <!-- layout 2 -->
                              <div id="cardPreview2" style="border: 1px solid #000">
                                <div id="cardPreviewIMG2"></div>
                                <div class="conteudo2">
                                  <div id="tituloPreviewControl2">
                                    <div id="tituloPreview2">Escreva um titulo</div>
                                  </div>
                                  <div id="subtituloPreviewControl2">
                                    <div id="subtituloPreview2">Estreva um subtitulo</div>
                                  </div>
                                  <div id="textoCTAPreviewControl2">
                                    <div id="textoCTAPreview2">Escreva a CTA</div>
                                  </div>

                                </div>
                              </div>

                              <!-- futuros layouts... -->
                            </div>
                          </section>
                        </main>
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