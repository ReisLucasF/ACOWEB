$(document).ready(function () {
    let scriptCounter = 0;
    let modeloScript = '';

    // Carregar o modelo do script do arquivo JSON
    $.getJSON('modelo.json', function (data) {
        modeloScript = data.script;
    });

    function createScriptBlock() {
        scriptCounter++;
        return `
            <div class="script-block" id="script-block-${scriptCounter}">
                <button type="button" class="remove-script-btn" onclick="removeScriptBlock(${scriptCounter})">x</button>
                <div class="form-group">
                    <label for="numero-demanda-${scriptCounter}">Número da Demanda</label>
                    <input type="text" class="form-control" id="numero-demanda-${scriptCounter}" required>
                </div>
                <div class="form-group">
                    <label for="agencia-${scriptCounter}">Agência</label>
                    <input type="text" class="form-control" id="agencia-${scriptCounter}" required>
                </div>
                <div class="form-group">
                    <label for="conta-${scriptCounter}">Conta</label>
                    <input type="text" class="form-control" id="conta-${scriptCounter}" required>
                </div>
                <div class="form-group">
                    <label for="id-machine-${scriptCounter}">ID Machine</label>
                    <input type="text" class="form-control" id="id-machine-${scriptCounter}" required>
                </div>
                <div class="form-group">
                    <label for="nome-solicitante-${scriptCounter}">Nome do Solicitante</label>
                    <input type="text" class="form-control" id="nome-solicitante-${scriptCounter}" required>
                </div>
            </div>
        `;
    }

    $('#add-script-btn').click(function () {
        $('#scripts-container').append(createScriptBlock());
    });

    $('#generate-btn').click(function () {
        let scripts = [];
        for (let i = 1; i <= scriptCounter; i++) {
            if ($(`#script-block-${i}`).length) {
                let nomeSolicitante = $(`#nome-solicitante-${i}`).val();
                let idMachine = $(`#id-machine-${i}`).val();
                let agencia = $(`#agencia-${i}`).val();
                let conta = $(`#conta-${i}`).val();
                let numeroDemanda = $(`#numero-demanda-${i}`).val();

                let idMachinePrimeiros8 = idMachine.slice(0, 8);
                let idMachineResto = idMachine.slice(8);

                let script = modeloScript
                    .replace(/\${nome_do_solicitante}/g, nomeSolicitante)
                    .replace(/\${numero_do_id_machine}/g, idMachine)
                    .replace(/\${numero_da_demanda}/g, numeroDemanda)
                    .replace(/\${id_machine_primeiros_8_digitos}/g, idMachinePrimeiros8)
                    .replace(/\${id_machine_resto}/g, idMachineResto)
                    .replace(/\${agencia}/g, agencia)
                    .replace(/\${conta}/g, conta);

                scripts.push(script);
            }
        }

        let blob = new Blob([scripts.join("\n\n")], { type: "text/plain;charset=utf-8" });
        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "scripts.txt";
        link.click();
    });
});

function removeScriptBlock(id) {
    $(`#script-block-${id}`).remove();
}
