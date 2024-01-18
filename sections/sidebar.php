<?php
    $domain = $_SERVER['HTTP_HOST'];
?>

<!-- Sidebar -->
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<!-- Sidebar - Brand -->
<a class="sidebar-brand d-flex align-items-center justify-content-center" href="https://<?php echo $domain; ?>">
    <div class="sidebar-brand-icon rotate-n-15">
        <!-- <i class="fas fa-laugh-wink"></i> -->
    </div>
    <div class="sidebar-brand-text mx-3">TB Utilities</div>
</a>

<!-- Divider -->
<hr class="sidebar-divider my-0">

<!-- Nav Item - Dashboard -->
<li class="nav-item active">
    <a class="nav-link" href="https://<?php echo $domain; ?>">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Painel</span></a>
</li>

<!-- Divider -->
<hr class="sidebar-divider">

<!-- Heading -->
<div class="sidebar-heading">
    Ferramentas
</div>

<!-- Nav Item - Pages Collapse Menu -->
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fas fa-fw fa-cubes"></i>
        <span>ACO_SQC</span>
    </a>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Criar:</h6>
            <a class="collapse-item" href="https://<?php echo $domain; ?>/aco/card/index.php">Card</a>
            <a class="collapse-item" href="https://<?php echo $domain; ?>/aco/popup/index.php">Popup</a>
        </div>
    </div>
</li>


<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fas fa-fw fa-print"></i>
        <span>Comprovantes</span>
    </a>
    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Tipo:</h6>
                <a class="collapse-item" href="https://<?php echo $domain; ?>/comprovantes/Guia_Conta_Consumo/">Conta Consumo</a>
                <a class="collapse-item" href="https://<?php echo $domain; ?>/comprovantes/Guia_Ficha_Compensação/">Ficha Compensação</a>
                <a class="collapse-item" href="https://<?php echo $domain; ?>/comprovantes/Guia_Previdência_Social_GPS/">Previdência - GPS</a>
                <a class="collapse-item" href="https://<?php echo $domain; ?>/comprovantes/Guia_Tributo_Municipal/">Tributo Municipal</a>
         </div>
    </div>
</li>

<!-- Divider -->
<hr class="sidebar-divider d-none d-md-block">

<!-- Sidebar Toggler (Sidebar) -->
<div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
</div>

<!-- Sidebar Message -->
<div class="sidebar-card d-none d-lg-flex">
    <img class="sidebar-card-illustration mb-2" src="../../img/undraw_rocket.svg" alt="...">
    <p class="text-center mb-2"><strong>TB Utilities</strong> Nosso novo HUB de soluções!</p>
    <!-- <a class="btn btn-success btn-sm" href=""></a> -->
</div>

</ul>
<!-- End of Sidebar -->