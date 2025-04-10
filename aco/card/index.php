
<!DOCTYPE html>
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
                    <div id="tittle" class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="mb-0 mt-5">Criar ação card</h1>
                    </div>

                    <!-- Content Row -->
                    <div class="row">
                        <!-- ########################### -->
                        <main id="cardct">
                          <section>
                            <div class="grid-container" id="formulario">
                              <form action="" method="get" id="acaoform">
                                <div class="form-row mb-1">
                                  <div class="col-md-6">
                                    <label for="numeroAcao">Ação</label>
                                    <input
                                      type="number"
                                      id="numeroAcao"
                                      class="form-control"
                                      step="0.01"
                                      required
                                      placeholder="0000"
                                    />
                                  </div>

                                  <div class="col-md-6 d-flex align-items-end">
                                    <label for="imagem" class="btn btn-primary w-100">Selecionar imagem</label>
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

                                <div class="form-group mb-1">
                                  <label for="tipoLayout">Tipo de layout</label>
                                  <select id="tipoLayout" class="form-control">
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

                                <div class="form-row mb-1" id="tituloControl">
                                  <div class="col-md-6">
                                    <label for="titulo">Titulo</label>
                                    <input type="text" id="titulo" class="form-control" placeholder="Escreva um titulo" maxlength="25" />
                                  </div>

                                  <div class="col-md-6">
                                    <label for="corTitulo">Cor do título</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      id="corTitulo"
                                      placeholder="#000000"
                                      pattern="^\S+$"
                                    />
                                  </div>
                                </div>

                                <div class="form-row mb-1" id="subtituloControl">
                                  <div class="col-md-6">
                                    <label for="subtitulo">Subtítulo</label>
                                    <input
                                    class="form-control"
                                      type="text"
                                      id="subtitulo"
                                      placeholder="Escreva um subtitulo"
                                      class="form-control"
                                      
                                      maxlength="90"
                                    />
                                  </div>

                                  <div class="col-md-6">
                                    <label for="corSubtitulo">Cor do subtítulo</label>
                                    <input
                                    class="form-control"
                                      type="text"
                                      id="corSubtitulo"
                                      placeholder="#000000"
                                      pattern="^\S+$"
                                      
                                    />
                                  </div>
                                </div>

                                <div class="form-row mb-1"  id="ctaControl">
                                  <div class="col-md-6">
                                    <label for="textoCTA">Texto CTA</label>
                                    <input type="text" id="textoCTA" class="form-control" placeholder="Escreva a CTA" />
                                  </div>

                                  <div class="col-md-6">
                                    <label for="corTextoCTA">Cor do texto CTA</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      id="corTextoCTA"
                                      minlength="7"
                                      placeholder="#000000"
                                      pattern="^\S+$"
                                    />
                                  </div>
                                </div>

                                <div class="form-row mb-1">
                                  <div class="col-md-6">
                                    <label for="corInicio">Cor de início do fundo</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      id="corInicio"
                                      minlength="7"
                                      placeholder="#000000"
                                      pattern="^\S+$"
                                    />
                                  </div>

                                  <div class="col-md-6">
                                    <label for="corFim">Cor de fim do fundo</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      id="corFim"
                                      minlength="7"
                                      placeholder="#000000"
                                      pattern="^\S+$"
                                    />
                                  </div>
                                </div>

                                <div class="form-row mb-1"  id="ctaCorControl">
                                  <div class="col-md-6">
                                    <label for="corFundoCTA">Cor de fundo CTA</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      id="corFundoCTA"
                                      minlength="7"
                                      maxlength="7"
                                      placeholder="#000000"
                                      pattern="^\S+$"
                                    />
                                  </div>

                                  <div class="col-md-6">
                                    <label for="corBordaCTA">Cor da borda CTA</label>
                                    <input
                                      class="form-control"
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

                                <div class="form-row mb-1">
                                  <div class="col-md-6">
                                    <label for="tipolink">Link</label>
                                    <select id="tipoLink" class="form-control">
                                      <option value="3">Push Deep Link</option>
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
                                        </select>
                                    </div>
                                  </div>
                                </div>

                                <span id="statusArquivo"></span>
                                <div class="row">
                                  <div class="col-11 pr-0">
                                    <button class="btn btn-primary" onclick="gerarScript(event)" id="submit">Baixar script</button>
                                  </div>
                                  <div class="col-1 d-flex align-items-center">
                                    <button id="help1" onmouseover="init_ajuda()" onmouseout="stop_ajuda()"><strong>?</strong></button>
                                    <video id="video1" autoplay muted loop width="500">
                                      <source src="videos/Card_Ajuda.mp4" type="video/mp4">
                                      Seu navegador não suporta o elemento de vídeo.
                                    </video>
                                  </div>
                                </div>
                              </form>
                              <div class="AIGenerative">
                                <p class="tittleia">Ação por IA Generativa</p>
                                <p class="text_info">Agora você pode gerar ações comerciais com a ajuda da inteligencia artificial.
                                  </p>
                                  <p class="text_info">Para isso basta informar detalhes da ação comercial que deseja gerar e clicar no botão gerar ação.
                                    </p>
                                    <textarea class="form-control mx-auto mb-2" cols="52" rows="2" name="teste" id="user-input" placeholder="Fale sobre sua ação"></textarea>
                                    <div class="row">
                                      <div class="col-11 pr-0">
                                        <button  class="btn btn-primary w-100" id="send-button">Gerar por IA</button>
                                      </div>
                                      <div class="col-1 d-flex align-items-center">
                                        <button id="help2" onmouseover="init_ajuda_AI()" onmouseout="stop_ajuda_AI()"><strong>?</strong></button>
                                        <video id="video2" autoplay muted loop width="500">
                                          <source src="videos/Card_Ajuda_AI.mp4" type="video/mp4">
                                          Seu navegador não suporta o elemento de vídeo.
                                        </video>
                                      </div>
                                    </div>
                                  </div>
                                  <script type="importmap">
                                    {
                                      "imports": {
                                        "@google/generative-ai": "https://esm.run/@google/generative-ai"
                                      }
                                    }
                                  </script>
                                </div>

                              <!-- layout 1 -->
                              <div id="cardPreview">
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
                              <div id="cardPreview2">
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

    <script>
      const jsonUrl = '../redirecionamentos.json';

      function loadOptions() {
        fetch(jsonUrl)
          .then(response => response.json())
          .then(data => {
            const selectElement = document.getElementById('ID');
            data.forEach(option => {
              const opt = document.createElement('option');
              opt.value = option.value;
              opt.text = `${option.value} - ${option.text}`;
              selectElement.add(opt);
            });
          })
          .catch(error => console.error('Erro ao carregar JSON:', error));
      }

      document.addEventListener('DOMContentLoaded', loadOptions);
    </script>

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
    <script src="../../js/sb-admin-2.js"></script>

    <!-- Page level plugins -->
    <script src="../../vendor/chart.js/Chart.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="../../js/demo/chart-area-demo.js"></script>
    <script src="../../js/demo/chart-pie-demo.js"></script>

    <script src="./script.js"></script>
    <script type="module" src="./AI_Generative.js"></script>


</body>

</html>