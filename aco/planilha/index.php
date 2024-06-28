<?php
    $domain = $_SERVER['HTTP_HOST'];
?>

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
    <link rel="stylesheet" href="style.css" />

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
                        <section>
                          <h1>Selecionar Planilha</h1>
                          <form
                            action="https://P3ri.pythonanywhere.com"
                            method="post"
                            enctype="multipart/form-data"
                          >
                            <div class="labelInput">
                              <label for="numbers" class="intxt">Número da demanda :</label><br>
                              <input type="number" class="selectnumber" name="numbers" step="1" min="0" placeholder="5875956">
                            </div>
                              <div class="labelInput">
                                  <label for="file" class="slectImagem">Selecione um arquivo</label>
                                  <input type="file" id="file" name="file" accept=".xlsx, .xls" />
                              </div>
                                <span id="statusPlanilha"></span>
                            <br />

                            <div class="labelInput">
                              <label for="images" class="slectImagem">Selecione as imagens</label>
                              <input type="file" id="images" name="images" accept="image/*" multiple />
                            </div>
                            <span id="statusImagem"></span>
                            <label for="ID">Redirecionamento</label>
                            <div>
                                <select id="dropbox" name="dropbox">
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
                            <br />
                        
                            <input class="submit" type="submit" value="Upload" />
                            
                        </form>
                        <div class="download">
                            <p class="TBmodel">Modelos</p>
                            <p style="font-size: 12px; text-align: left; margin-bottom: 0px;">Clique em um dos botões para baixar o modelo da planilha</p>
                            <p style="font-size: 12px; text-align: left; margin-bottom: 0px;">utilizado no TBU.</p>
                            <a href="https://www.dropbox.com/scl/fi/u3wg9j7dihoke5g7qy75e/model-1.xlsx?rlkey=e0llkptv7niqzn5uw1qvsximx&st=1ogtigef&dl=1"><button class="Dbtn">Modelo 1</button></a>
                            <a href="https://www.dropbox.com/scl/fi/6rwzfp4i80zcx9suv2r7i/model-2.xlsx?rlkey=nlsls005uqlfvtl35qiwj8hzr&st=chd484go&dl=1"><button class="Dbtn">Modelo 2</button></a>
                            <a href=""><button class="Dbtn">Modelo 3</button></a>
                            <a href=""><button class="Dbtn">Modelo 4</button></a>
                            <p style="font-size: 12px; text-align: left; margin-bottom: 0px; color: red;">OBS: Somente esses 2 modelos serão aceitos na hora de</p>
                            <p style="font-size: 12px; text-align: left; margin-bottom: 0px; color: red;">gerar a ação pela planilha.</p>
                        </div>
                        
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
    <script>
        const planilhaset = document.getElementById("file")
        const imagemset = document.getElementById("images")
        planilhaset.addEventListener("change", function(){
            if (planilhaset.files.length > 0) {
            statusPlanilha.textContent = `${planilhaset.files[0].name}`;
            } else {
            statusPlanilha.textContent = 'Nenhum arquivo selecionado';
        }

        })
        imagemset.addEventListener("change", function(){
            if (imagemset.files.length > 0) {
            statusImagem.textContent = `${imagemset.files[0].name}`;
            } else {
            statusImagem.textContent = 'Nenhum arquivo selecionado';
        }

        })
    </script>

</body>

</html>

