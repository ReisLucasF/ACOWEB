<?php
    $domain1 = $_SERVER['HTTP_HOST'];
    $domain = $domain1;
?>
<style>
    .TBLogo{
  width: 80%;
  height: auto;
  margin: 20px 0;
}
.sidebar .sidebar-brand {
    margin-top: 5px;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .05rem;
    z-index: 1;
}


</style>
<!-- Sidebar -->
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<!-- Sidebar - Brand -->
<a class="sidebar-brand d-flex align-items-center justify-content-center" href="https://<?php echo $domain; ?>">
    <div class="sidebar-brand-icon">
        <img class="TBLogo"  src="https://<?php echo $domain; ?>/img/TB_Logo.png" alt="">
    </div>
    <!-- <div class="sidebar-brand-text mx-3">TB Utilities</div> -->
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
            <h6 class="collapse-header">Criar ações:</h6>
            <a class="collapse-item" href="https://<?php echo $domain; ?>/aco/card/index.php">Card</a>
            <a class="collapse-item" href="https://<?php echo $domain; ?>/aco/popup/index.php">Popup</a>
            <h6 class="collapse-header">Criar ações por planilha:</h6>
            <a class="collapse-item" href="https://<?php echo $domain; ?>/aco/planilha/index.php">Card</a>
            <h6 class="collapse-header">Testes de scripts:</h6>
            <a class="collapse-item" href="https://<?php echo $domain; ?>/aco/preview/">Card e Popup</a>
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
                <a class="collapse-item" href="https://<?php echo $domain; ?>/comprovantes/Guia_IPVAMG/">IPVA MG</a>
                <a class="collapse-item" href="https://<?php echo $domain; ?>/comprovantes/Guia_DARESP/">DARE SP</a>
                <a class="collapse-item" href="https://<?php echo $domain; ?>/comprovantes/Guia_GARE/">GARE</a>
                <a class="collapse-item" href="https://<?php echo $domain; ?>/comprovantes/Guia_DARF/">DARF</a>
                <a class="collapse-item" href="https://<?php echo $domain; ?>/comprovantes/Guia_DAS/">DAS</a>
                <a class="collapse-item" href="https://<?php echo $domain; ?>/comprovantes/Guia_DAE/">DAE</a>
                <a class="collapse-item" href="https://<?php echo $domain; ?>/comprovantes/Guia_FGTS/">FGTS</a>
         </div>
    </div>
</li>

<li class="nav-item">
    <a class="nav-link" href="https://<?php echo $domain; ?>/error">
        <i class="fas fa-fw fa-exclamation-triangle"></i>
        <span>Filtros de erros</span>
    </a>
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
    <p class="text-center mb-2"><strong>Tools Bank Utilities</strong> Nosso novo HUB de soluções!</p>
    <!-- <a class="btn btn-success btn-sm" href=""></a> -->
</div>

<div class="container">
  <label class="ui-switch">
    <input type="checkbox" id="switch" onclick="darktheme()">
    <div class="slider">
      <div class="circle"></div>
    </div>
  </label>
</div>

<style id="light">
    :root {
  --blue: #4e73df;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #e74a3b;
  --orange: #fd7e14;
  --yellow: #f6c23e;
  --green: #1cc88a;
  --teal: #20c9a6;
  --cyan: #36b9cc;
  --white: #fff;
  --gray: #858796;
  --gray-dark: #5a5c69;
  --primary: #4f0ea5;
  --secondary: #858796;
  --success: #1cc88a;
  --info: #36b9cc;
  --warning: #f6c23e;
  --danger: #e74a3b;
  --light: #f8f9fc;
  --dark: #5a5c69;
  --cor-primária: #0020d3;
  --cor-hover-btn: #041eb3;
  --cor-de-fundo: #fafafa;
  --cor-de-fundo2: #f0f0f0;
  --cor-intermediaria: #4f4f4f;
  --cor-texto-btn-vermelho: #ffffff;
  --cor-texto-btn-amarelo: #ffffff;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --cor-texto-dropdown: #000000;
  --cor-texto-dropdown-hover: #ffffff;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: "Nunito", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
    --cor-fonte: #000000;
    --cor-fonte-offset: #000000;
    --cor-fonte-offset2: #ffffff;
}
</style>

<style id="dark">
    :root {
  --blue: #4e73df;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #e74a3b;
  --orange: #fd7e14;
  --yellow: #f6c23e;
  --green: #1cc88a;
  --teal: #20c9a6;
  --cyan: #36b9cc;
  --white: #fff;
  --gray: #858796;
  --gray-dark: #5a5c69;
  --primary: #4f0ea5;
  --secondary: #858796;
  --success: #1cc88a;
  --info: #36b9cc;
  --warning: #f6c23e;
  --danger: #e74a3b;
  --light: #f8f9fc;
  --dark: #5a5c69;
  --cor-primária: #0020d3;
  --cor-hover-btn: #041eb3;
  --cor-de-fundo: #1f1f1f;
  --cor-de-fundo2: #262626;
  --cor-intermediaria: #4f4f4f;
  --cor-texto-btn-vermelho: #ffffff;
  --cor-texto-btn-amarelo: #ffffff;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --cor-texto-dropdown: #000000;
  --cor-texto-dropdown-hover: #000000;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: "Nunito", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
    --cor-fonte: #ffffff;
    --cor-fonte-offset: #ffffff;
}
</style>
<script>
document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.getElementById('switch');
    var storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark') {
        checkbox.checked = true;
        document.getElementById('light').disabled = true; 
        document.getElementById('dark').disabled = false;
    } else {
        checkbox.checked = false;
        document.getElementById('light').disabled = false; 
        document.getElementById('dark').disabled = true; 
    }
    checkbox.addEventListener('change', darktheme);
});

function darktheme() {
    var checkbox = document.getElementById('switch');
    
    if (checkbox.checked) {
        localStorage.setItem('theme', 'dark'); 
        document.getElementById('light').disabled = true; 
        document.getElementById('dark').disabled = false;
    } else {
        localStorage.setItem('theme', 'light');
        document.getElementById('light').disabled = false; 
        document.getElementById('dark').disabled = true; 
    }
}
</script>
</ul>