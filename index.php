<?php
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
?>

<!DOCTYPE html>
<html lang="Pt-Br">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

    <title>Tools Bank</title>

    <!-- Custom fonts for this template-->
    <link rel="icon" href="/img/TB_ico.ico" type="image/x-icon">
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.css" rel="stylesheet">
    <link rel="stylesheet" href="css/cards.css">

    <!-- intro -->
    <link rel="stylesheet" href="css/intro.css">
    <script src="js/intro.js"></script>


</head>

<style>
    h2, .h2{
        font-size: 23px;
    }
    p{
        font-size: 15px;
    }
    .logoindex{
        height: 10rem;
    }
</style>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- sidebar -->
        <?php
            include './sections/sidebar.php'
        ?>

        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Conteúdo -->
            <div id="content">
                <!-- Início do conteúdo -->
                <div class="container-fluid">

                    <!-- Page TItulo -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    </div>

                    <!-- Content Row -->
                    <div class="row">
                        <main>
                            <img src="https://<?php echo $domain; ?>/img/teste.png" class="logoindex" alt="">
                            <h1>Bem vindo ao Tools Bank</h1>
                            <p>De uma solução, para um Hub de soluções!</p><br>

                            <!-- Botão para iniciar o tour -->
                            <button onclick="iniciarTour()" class="button">Iniciar Tour</button>
                            
                            <p>Nossas ultimas feats:</p>
                            <div class="card-container">
                                 <div class="card">
                                    <h2 class="titulocard">Registros de erros</h2>
                                    <p>Agora o programa tem um registro de erros comuns que ocorrem nos canais digitais e orientações na resolução. 
                                    </p>
                                </div>

                                <div class="card">
                                    <h2>Ajuda e Dicas TB</h2>
                                    <p>Com nova funcionalidade, agora o TB possui ajuda dinamica com base em vídeos, os usuários podem assisti-los para vizualizar e aperfeiçoar no uso das ferramentas envolvidas. <span style="color: red;">
                                        <br>*Em desenvolvimento, funcionando apenas para ações card.
                                    </span>
                                    </p>
                                </div>

                                <div class="card">
                                    <h2>Tema dark</h2>
                                    <p>Para os amantes de temas escuros, adicionamos a funcionalidade de alternar entre tema claro/escuro.
                                        Basta alterar o switch na bara lateral esquerda e ver a mágica acontecer.
                                    </p>
                                </div>
                                
                                <!-- mais cards, se necessário -->

                            </div><br><br>

                            <p>Próximas atualizações:</p>
                            <div class="card-container">
                                <div class="card">
                                    <h2>Geração popup planilhas</h2>
                                    <p>Possibilitar a geração por planilhas para popup, assim como está para card. </p>
                                </div>
                            </div>
                        </main>
                    </div>

                </div>

            </div>
            <?php
                include './sections/footer.php'
            ?>
        </div>
    </div>

    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>


    <?php
        include './sections/modal-logout.php'
    ?>

    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <script src="js/sb-admin-2.js"></script>

    <script src="vendor/chart.js/Chart.min.js"></script>

    <script src="js/demo/chart-area-demo.js"></script>
    <script src="js/demo/chart-pie-demo.js"></script>

    <script>
        function iniciarTour() {
            introJs().start();
        }
    </script>


</body>

</html>