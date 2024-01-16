<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

    <title>TB Utilities</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/cards.css">


</head>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- sidebar -->
        <?php
            include './sections/sidebar.php'
        ?>

        <!-- Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Conteúdo -->
            <div id="content">
                <!-- Início do conteúdo -->
                <div class="container-fluid">

                    <!-- Page TItulo -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <!--<h1 class="h3 mb-0 text-gray-800">Dashboard</h1>-->
                    </div>

                    <!-- Content Row -->
                    <div class="row">
                        <main>
                            <h1>Bem vindo ao TB Utilities</h1>
                            <p>De uma solução, para um Hub de soluções!</p><br>
                            
                            <p>Nossas ultimas feats:</p>
                            <div class="card-container">
                                <div class="card">
                                    <h2>Novas Funções</h2>
                                    <p>Agora o programa deixa de ser apenas uma solução, para agrupar diversas funções!<br>
                                    Gere cards, popups e comprovantes de pagamento em apenas um lugar. 
                                    </p>
                                </div>
                                
                                <div class="card">
                                    <h2>Card</h2>
                                    <p>Agora o preview pode apresentar cards com imagem à direita.</p>
                                </div>

                                <div class="card">
                                    <h2>Novas regras!</h2>
                                    <p>O programa agora exclui automaticamente as variáveis como 'R$', '[' e ']' dos scripts quando estão juntas. No entanto, ele mantém apenas o R$, caso esteja separado dos outros caracteres especiais.</p>
                                </div>

                                <!-- <div class="card">
                                    <h2>Titulo do card</h2>
                                    <p>Descrição do card.</p>
                                    <a href="#">Visualizar</a>
                                </div> -->

                                <!-- mais cards, se necessário -->

                            </div><br><br>

                            <p>Próximas atualizações:</p>
                            <div class="card-container">
                                <div class="card">
                                    <h2>Planilhas excel</h2>
                                    <p>Estamos estudando a possibilidade de criar scripts a partir de um arquivo xlsx para a geração de scripts de forma automática.</p>
                                </div>

                                <!-- <div class="card">
                                    <h2>Titulo do card</h2>
                                    <p>Descrição do card.</p>
                                    <a href="#">Visualizar</a>
                                </div> -->

                                <!-- mais cards, se necessário -->

                            </div>
                        </main>
                    </div>

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <?php
                include './sections/footer.php'
            ?>
        </div>
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>


    <?php
        include './sections/modal-logout.php'
    ?>

    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>

    <!-- Page level plugins -->
    <script src="vendor/chart.js/Chart.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="js/demo/chart-area-demo.js"></script>
    <script src="js/demo/chart-pie-demo.js"></script>

</body>

</html>