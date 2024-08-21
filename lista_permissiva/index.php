
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
    <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="../css/sb-admin-2.css" rel="stylesheet">

    <style>
        .script-block {
            border: 2px solid #007bff;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            position: relative;
        }

        .remove-script-btn {
            position: absolute;
            top: -10px;
            right: -10px;
            background-color: #dc3545;
            color: white;
            border: none;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            line-height: 22px;
            text-align: center;
            cursor: pointer;
        }
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
            include '../sections/sidebar.php'
        ?>

        <!-- Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Conteúdo -->
            <div id="content">

                <!-- Início do conteúdo -->
                <div class="container-fluid mt-5">
                        <h1>Liberação de Dispositivos</h1>
                        <form id="form-demanda">
                            <button type="button" class="btn btn-primary mt-3" id="add-script-btn">Adicionar script</button>
                            <button type="button" class="btn btn-success mt-3" id="generate-btn">Gerar Script</button>
                            <div id="scripts-container">
                                <!-- Os blocos de script serão inseridos aqui -->
                            </div>
                        </form>
                </div>
                <!-- /.container-fluid -->
            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <?php
                include '../sections/footer.php'
            ?>
        </div>
    </div>
    <!-- End of Page Wrapper -->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <?php
        include '../sections/modal-logout.php'
    ?>

    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>
    <script src="../js/sb-admin-2.js"></script>
    <script src="../vendor/chart.js/Chart.min.js"></script>
    <script src="../js/demo/chart-area-demo.js"></script>
    <script src="../js/demo/chart-pie-demo.js"></script>

    <script src="./script.js"></script>
</body>

</html>