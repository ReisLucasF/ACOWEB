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



<style>
/* switch settings 👇 */

.container {
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
}

.ui-switch {
  /* switch */
  --switch-bg: rgb(135, 150, 165);
  --switch-width: 48px;
  --switch-height: 20px;
  /* circle */
  --circle-diameter: 32px;
  --circle-bg: rgb(0, 56, 146);
  --circle-inset: calc((var(--circle-diameter) - var(--switch-height)) / 2);
}

.ui-switch input {
    display: none;
}

.slider {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: var(--switch-width);
  height: var(--switch-height);
  background: var(--switch-bg);
  border-radius: 999px;
  position: relative;
  cursor: pointer;
}

.slider .circle {
    top: calc(var(--circle-inset) * -1);
    left: 0;
    width: var(--circle-diameter);
    height: var(--circle-diameter);
    position: absolute;
    background: var(--circle-bg);
    border-radius: inherit;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHdpZHRoPSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiCiAgICAgICAgZD0iTTkuMzA1IDEuNjY3VjMuNzVoMS4zODlWMS42NjdoLTEuMzl6bS00LjcwNyAxLjk1bC0uOTgyLjk4Mkw1LjA5IDYuMDcybC45ODItLjk4Mi0xLjQ3My0xLjQ3M3ptMTAuODAyIDBMMTMuOTI3IDUuMDlsLjk4Mi45ODIgMS40NzMtMS40NzMtLjk4Mi0uOTgyek0xMCA1LjEzOWE0Ljg3MiA0Ljg3MiAwIDAwLTQuODYyIDQuODZBNC44NzIgNC44NzIgMCAwMDEwIDE0Ljg2MiA0Ljg3MiA0Ljg3MiAwIDAwMTQuODYgMTAgNC44NzIgNC44NzIgMCAwMDEwIDUuMTM5em0wIDEuMzg5QTMuNDYyIDMuNDYyIDAgMDExMy40NzEgMTBhMy40NjIgMy40NjIgMCAwMS0zLjQ3MyAzLjQ3MkEzLjQ2MiAzLjQ2MiAwIDAxNi41MjcgMTAgMy40NjIgMy40NjIgMCAwMTEwIDYuNTI4ek0xLjY2NSA5LjMwNXYxLjM5aDIuMDgzdi0xLjM5SDEuNjY2em0xNC41ODMgMHYxLjM5aDIuMDg0di0xLjM5aC0yLjA4NHpNNS4wOSAxMy45MjhMMy42MTYgMTUuNGwuOTgyLjk4MiAxLjQ3My0xLjQ3My0uOTgyLS45ODJ6bTkuODIgMGwtLjk4Mi45ODIgMS40NzMgMS40NzMuOTgyLS45ODItMS40NzMtMS40NzN6TTkuMzA1IDE2LjI1djIuMDgzaDEuMzg5VjE2LjI1aC0xLjM5eiIgLz4KPC9zdmc+");
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    -o-transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    ;
}

.slider .circle::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  background: rgba(255, 255, 255, 0.75);
  border-radius: inherit;
  -webkit-transition: all 500ms;
  -o-transition: all 500ms;
  transition: all 500ms;
  opacity: 0;
}

/* actions */

.ui-switch input:checked+.slider .circle {
    left: calc(100% - var(--circle-diameter));
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHdpZHRoPSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiCiAgICAgICAgZD0iTTQuMiAyLjVsLS43IDEuOC0xLjguNyAxLjguNy43IDEuOC42LTEuOEw2LjcgNWwtMS45LS43LS42LTEuOHptMTUgOC4zYTYuNyA2LjcgMCAxMS02LjYtNi42IDUuOCA1LjggMCAwMDYuNiA2LjZ6IiAvPgo8L3N2Zz4=");
}

.ui-switch input:active+.slider .circle::before {
  -webkit-transition: 0s;
  -o-transition: 0s;
  transition: 0s;
  opacity: 1;
  width: 0;
  height: 0;
}
/*Dark theme*/

.container-fluid.dark-theme,
#formulario.dark-theme,
label.dark-theme,
select.dark-theme,
input.dark-theme,
#tituloPreview.dark-theme,
#subtituloPreview.dark-theme,
#textoCTAPreview.dark-theme,
#cardPreview.dark-theme {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.container-fluid.dark-theme{
  background-color: #1f1f1f;
  color: #ffffff;
}
#formulario.dark-theme {
  background-color: #262626;
  color: #ffffff;
},

label.dark-theme {
  color: #ffffff;
}
select.dark-theme{
    background-color: #121212;
    color: #858796;
    border: 1px solid #35353a; /* Define a cor e o estilo da borda */
}
input.dark-theme{
    background-color: #121212;
    color: #858796;
    border: 1px solid #35353a; /* Define a cor e o estilo da borda */
}
input.dark-theme:focus {
    background-color: #121212; /* Mantém a cor de fundo escura ao focar */
    color: #858796; /* Mantém a cor do texto ao focar */
    border: 1px solid #858796; /* Mantém a cor da borda ao focar */
    outline: none; /* Remove a borda de foco padrão do navegador, se desejado */
}

/* Estilo para o estado de foco de elementos select com a classe dark-theme */
select.dark-theme:focus {
    background-color: #121212; /* Mantém a cor de fundo escura ao focar */
    color: #858796; /* Mantém a cor do texto ao focar */
    border: 1px solid #858796; /* Mantém a cor da borda ao focar */
    outline: none; /* Remove a borda de foco padrão do navegador, se desejado */
}

#tituloPreview.dark-theme {
  font-size: 15px;
  margin-bottom: 1.5px;
  margin-left: 125px;
  font-weight: 600;
  margin-top: -10px;
  color: #FFFFFF;
}

#subtituloPreview.dark-theme {
  font-size: 12px;
  margin-bottom: 3px;
  margin-left: 125px;
  color: #FFFFFF;
}

#textoCTAPreview.dark-theme {
  font-size: 15px;
  text-align: center;
  display: inline-block;
  padding: 1px 4%;
  margin-left: 120px;
  border-radius: 5px;
  margin-bottom: 0px;
  background-color: white;
  color: #000000;
  background-color: #FFFFFF;
}

#textarea.dark-theme{
    background-color: #262626;
    color: #858796;
    border: 1px solid #35353a; /* Define a cor e o estilo da borda */
}
#textarea.dark-theme:focus {
    background-color: #262626; /* Mantém a cor de fundo escura ao focar */
    color: #858796; /* Mantém a cor do texto ao focar */
    border: 1px solid #858796; /* Mantém a cor da borda ao focar */
    outline: none; /* Remove a borda de foco padrão do navegador, se desejado */
}
</style>
<script>
function darktheme() {
    var checkbox = document.getElementById('switch');
    var formulario = document.getElementById('formulario');
    var titulo = document.getElementById('tituloPreview');
    var subtitulo = document.getElementById('subtituloPreview');
    var textcta = document.getElementById('textoCTAPreview');
    var cardpreview = document.getElementById('cardPreview');
    var container = document.querySelector('.container-fluid');
    var labels = document.querySelectorAll('label');
    var inputs = document.querySelectorAll('input');
    var selects = document.querySelectorAll('select');
    var txtarea = document.getElementById('textarea');

    if (checkbox.checked) {
        container.classList.add('dark-theme');
        formulario.classList.add('dark-theme');
        cardpreview.classList.add('dark-theme');

        titulo.classList.add('dark-theme');
        subtitulo.classList.add('dark-theme');
        textcta.classList.add('dark-theme');

        labels.forEach(label => label.classList.add('dark-theme'));
        inputs.forEach(input => input.classList.add('dark-theme'));
        selects.forEach(select => select.classList.add('dark-theme'));
        txtarea.classList.add('dark-theme');

        localStorage.setItem('theme', 'dark'); // Salva o estado como 'dark'
    } else {
        container.classList.remove('dark-theme');
        formulario.classList.remove('dark-theme');
        cardpreview.classList.remove('dark-theme');
        
        titulo.classList.remove('dark-theme');
        subtitulo.classList.remove('dark-theme');
        textcta.classList.remove('dark-theme');

        labels.forEach(label => label.classList.remove('dark-theme'));
        inputs.forEach(input => input.classList.remove('dark-theme'));
        selects.forEach(select => select.classList.remove('dark-theme'));
        txtarea.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light'); // Salva o estado como 'light'
    }
}
// function loadTheme() {
//     var theme = localStorage.getItem('theme');
//     var checkbox = document.getElementById('switch');
//     var formulario = document.getElementById('formulario');
//     var container = document.querySelector('.container-fluid');
//     var labels = document.querySelectorAll('label');

//     if (theme === 'dark') {
//         checkbox.checked = true;
//         container.classList.add('dark-theme');
//         if (formulario) {
//             formulario.classList.add('dark-theme');
//         }
//         labels.forEach(label => label.classList.add('dark-theme'));
//     } else {
//         checkbox.checked = false;
//         container.classList.remove('dark-theme');
//         if (formulario) {
//             formulario.classList.remove('dark-theme');
//         }
//         labels.forEach(label => label.classList.remove('dark-theme'));
//     }
// }

// // Carrega o tema ao carregar a página
// window.onload = loadTheme;

</script>
</ul>
<!-- End of Sidebar -->