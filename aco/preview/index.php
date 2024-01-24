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
            <div class="labelInput">
              <label for="file" class="slectImagem">Selecione um arquivo</label>
              <input type="file" id="file" name="file" accept=".txt" />
            </div>

            <div class="labelInput">
              <textarea
                name="loading_file"
                id="loading_file"
                cols="80"
                rows="30"
              ></textarea>
            </div>

            <span id="statusArquivo"></span>
            <button id="submit">Salvar</button>
          </form>
        </div>

        <div class="prev1">
          <h2 class="titPrev">Pré visualização</h2>

          <!-- layout 1 -->
          <div id="cardPreview" style="border: 1px solid #000">
            <div id="cardPreviewIMG"></div>
            <div>
              <div id="tituloPreview">Escreva um titulo</div>
              <div id="subtituloPreview">Estreva um subtitulo</div>
              <div id="textoCTAPreview">Escreva a CTA</div>
            </div>
          </div>

          <!-- layout 2 -->
          <div id="cardPreview2" style="border: 1px solid #000">
            <div id="cardPreviewIMG2"></div>
            <div class="titulo">
              <div id="tituloPreview2">Escreva um titulo</div>
              <div id="subtituloPreview2">Estreva um subtitulo</div>
              <div id="textoCTAPreview2">Escreva a CTA</div>
            </div>
          </div>

          <!-- popup -->
          <div id="L333">
            <div id="popupPreview">
              <div id="btnFecharPreview">Fechar</div>
              <div id="popupPreviewIMG"></div>
              <div id="popuptituloPreview">Escreva um titulo</div>
              <div id="popupsubtituloPreview">Escreva um subtitulo</div>
              <div id="popuptextoCTAPreview">Escreva a CTA</div>
            </div>
          </div>

          <div id="L334">
            <div id="popupPreview2">
              <div id="btnFecharPreview">Fechar</div>
              <div id="popuptituloPreview2">Escreva um titulo</div>
              <div id="popupsubtituloPreview2">Escreva um subtitulo</div>
              <div id="popupPreviewIMG2"></div>
              <div id="popuptextoCTAPreview2">Escreva a CTA</div>
            </div>
          </div>

          <div id="L335">
            <div id="btnFecharPreview">Fechar</div>
            <div id="popupPreview3">
              <div id="popupPreviewIMG3"></div>
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

<!-- <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <title>Document</title>
  </head>
  <body>
    
    <script src="script.js"></script>
  </body>
</html> -->
