const errors = [
    {
        "Erro": "MBR100",
        "Causa": "Foi detectado algum programa malicioso no dispositivo do cliente",
        "Orientação": "Abrir demanda ou designar a demanda para o GR_FRAUDES_ELETRONICAS",
        "Grupo Resolvedor": "GR_FRAUDES_ELETRONICAS",
        "": ""
    },
    {
        "Erro": "MFAM044I",
        "Causa": "Cliente com foto ausente cadastrada para a realização do reconhecimento facial.",
        "Orientação": "Solicitar ao cliente para que compareça em um PA para atualizar sua foto",
        "Grupo Resolvedor": "GR_Redecall(IBK ou APP)",
        "": ""
    },
    {
        "Erro": "SECMO12E",
        "Causa": "proveniente do sistema SEC, se dá quando o cliente não consegue mais enviar por e-mail o recibo de transação efetuado via \" Internet Banking \" ",
        "Orientação": "Estamos orientando  a salvar como pdf e enviar por email.\nPrezados(as), bom dia!\nEstá havendo instabilidade com o envio de e-mails. Gentileza orientar o cliente a realizar o download do comprovante em formato PDF e encaminhar o arquivo para o email desejado. O caminho para gerar o arquivo é serviços de apoio > Controle de transações > Consulta e recibos de transações.\nAtenciosamente,\nCoordenação Canais Digitais (APPMB/IBK)\n",
        "Grupo Resolvedor": "GR_Redecall(IBK ou APP)",
        "": ""
    },
    {
        "Erro": "FEP 755",
        "Causa": "Bloqueio por inserir senha incorreta",
        "Orientação": "O desbloqueio é realizado automaticamente após 24h, mas também pode ser feito no GIB: Suporte> Usuário> Desbloqueio de Cartão",
        "Grupo Resolvedor": "*Atender*",
        "": ""
    },
    {
        "Erro": "IBKE236E - Não existe estação passivel de liberação",
        "Causa": "Erro quando tenta liberar um dispositivo pelo gib ou PLA",
        "Orientação": "Encaminhar a demanda para o GR responsavel mencionando o erro ocorrido",
        "Grupo Resolvedor": "GR_Fraudes_Eletrônicas",
        "": ""
    },
    {
        "Erro": "IBKM221E",
        "Causa": "Cliente está tentando acessar de um dispositivo bloqueado",
        "Orientação": "Realizar o desbloqueio do dispositivo mediante a IP e ID caso apareça ao usuário (REDCALL - para realizar IP e identificar o ID)",
        "Grupo Resolvedor": "GR_Canais_AppMB",
        "": ""
    },
    {
        "Erro": "CCR2193E",
        "Causa": "É um erro de fatura de cartão",
        "Orientação": "Mandar para o GR responsavel pelos cartões",
        "Grupo Resolvedor": "Gr_Canais_Cartões",
        "": ""
    },
    {
        "Erro": "GRPM51E",
        "Causa": "É um erro no PIX",
        "Orientação": "Mandar para o GR responsavel pelo pix informando o erro",
        "Grupo Resolvedor": "Gr_Produto_PIX",
        "": ""
    },
    {
        "Erro": "SICM796E",
        "Causa": "Ao realizar contratação do empréstimo pessoal que está disponível no aplicativo apresenta o erro.",
        "Orientação": "Buscar orientação com a Juliana Marinho",
        "Grupo Resolvedor": "Buscar orientação com a Juliana Marinho",
        "": ""
    },
    {
        "Erro": "SFMB21",
        "Causa": "Ele está tentando acessar de um dispositivo bloqueado",
        "Orientação": "Realizar o desbloqueio do dispositivo mediante a IP e ID caso apareça ao usuário (REDCALL - para realizar IP e identificar o ID)",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "ACESSO BLOQUEADO",
        "Causa": "Se dá quando o usuário não bloqueou o seu acesso po exceder o limite de senhas incorretas",
        "Orientação": "Solicitar a exclusão de usuário para novo cadastro de senha ou desbloqueio de usuário caso o cliente queira tentar novamente a mesma senha",
        "Grupo Resolvedor": "GR_Canais_AppMB",
        "": ""
    },
    {
        "Erro": "Erro interno desconhecido",
        "Causa": "Erro desconhecido",
        "Orientação": "Normalmente se resolve após uma limpeza de dados completa do App",
        "Grupo Resolvedor": "*Atender*",
        "": ""
    },
    {
        "Erro": "Alguns dados necessários para conclusão da ação solicitada não constam em nosso cadastro...",
        "Causa": "Na tentativa de exclusão de usuário pelo GIB",
        "Orientação": "Manutenção no banco de dados (PLANEJAR E INFORMAR A JU)",
        "Grupo Resolvedor": "GR_Canais_AppMB",
        "": ""
    },
    {
        "Erro": "Versão do contrato inválida",
        "Causa": "ERRO NO GIB",
        "Orientação": "CHAMAR A JU",
        "Grupo Resolvedor": "GR_Canais_AppMB",
        "": ""
    },
    {
        "Erro": "170-pessoa com situação cancelada e cadastrada no IPC",
        "Causa": "Na tentativa de tornar pix seguro, o erro mencionado ocorre",
        "Orientação": "Solicitar que o redecall realize o procedimento padrão para tertar evitar o erro",
        "Grupo Resolvedor": "GR_Redecall(IBK ou APP)",
        "": ""
    },
    {
        "Erro": "Código 20027 e 20026",
        "Causa": "Na tentativa de extratos de meses anteriores do Benefício do INSS",
        "Orientação": "Informar cliente que o extrato do beneficio também pode ser retirado no Meu INSS e informar para uma nova tentativa no APP.",
        "Grupo Resolvedor": "GR_Redecall(IBK ou APP) ou ATENDER",
        "": ""
    },
    {
        "Erro": "GIB0101 ou 22961",
        "Causa": "Tentativa de acesso a dispositivo bloqueado manualmente na PLA",
        "Orientação": "Verificar o ID Único correspondente ao dispositivo e realizar a IP rigorosa para liberação. Ou orientar na liberação no ponto de atendimento. ",
        "Grupo Resolvedor": "GR_Canais_AppMB",
        "": ""
    },
    {
        "Erro": "Manutenção não permitida para Conta Vinculada ao Contrato ",
        "Causa": "ERRO NO GIB",
        "Orientação": "liberação",
        "Grupo Resolvedor": "GR_Canais_AppMB",
        "": ""
    },
    {
        "Erro": "SICM444E",
        "Causa": "CLIENTE TENTA REALIZAR UM CREDITO NO APP MB, QUANDO CHEGOU NA FINALIZAÇÃO APARECE O ERRO",
        "Orientação": "só encaminhar para o GR_Ativo_Sistema_Integrado_Credito",
        "Grupo Resolvedor": "GR_Ativo_Sistema_Integrado_Credito",
        "": ""
    },
    {
        "Erro": "SICM411E",
        "Causa": "CLIENTE TENTA REALIZAR UM CREDITO NO APP MB, QUANDO CHEGOU NA FINALIZAÇÃO APARECE O ERRO",
        "Orientação": "NESSE CASO O ERRO NÃO É DE NOSSO OUSADA SENDO UM PROBLEMA DE OUTRA ÁREA, GR PRODUTOS OPERACIONAL CREDITO PESSOAL",
        "Grupo Resolvedor": "GR PRODUTOS OPERACIONAL CREDITO PESSOAL",
        "": ""
    },
    {
        "Erro": "GRPM001E",
        "Causa": "Cliente digitou o código de barras incorretamente, ou o MB não tem convênio para recebimento",
        "Orientação": "- Solicitar que cliente confira o código de barras informado (digitou o código de barras correto, entrou na opção de pagamento certa, etc)\n- Se ele estiver certo, neste caso, a demanda sempre deverá ser direcionada a gerência de produtos e serviços para verificação GR_Produto_Convenios.\n- Ao redirecionar, sempre informe o código de barras e o nome do convênio (empresa).\n",
        "Grupo Resolvedor": "GR_Produto_Convenios, GR_Redecall(IBK ou APP)",
        "": ""
    },
    {
        "Erro": "RC6003",
        "Causa": "Erro relacionado ao PIX, ocorre em uma tentativa do cliente fazer o pix em uma plataforma por Qr code, no pix geral",
        "Orientação": "Designar a demanda para o GR_produto_pix",
        "Grupo Resolvedor": "GR_produto_pix",
        "": ""
    },
    {
        "Erro": "GRPM001E",
        "Causa": "em pagamento codigo de barras indica que o convênio não pode ser recebido para pagamento no Mercantil.",
        "Orientação": "Prezados(as), bom dia!O código GRPM001E indica que o convênio não pode ser recebido para pagamento no Mercantil.Atenciosamente,Coordenação Canais Digitais",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23004",
        "Causa": "Ops! Não conseguimos te reconhecer. Tente novamente.",
        "Orientação": "Não conseguiu fazer a prova de vida com sucesso (reconhecer uma pessoa na câmera).",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23005",
        "Causa": "Ops! Não é possível acessar mais contas neste dispositivo.",
        "Orientação": "Usuário conseguiu sucedir a prova de vida e o reconhecimento facial, mas já tem 3 contas liberadas para o mesmo dispositivo que está tentando liberar a 4°.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23006",
        "Causa": "Ops! No momento não é possível realizar a liberação deste dispositivo.",
        "Orientação": "2° Regra de Segurança (Fluxo alto e médio)\n3° Regra de Segurança (Fluxo alto e médio)\n4° Regra de Segurança (Fluxo alto e médio)",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23007",
        "Causa": "Ops! Não foi possível realizar a liberação deste dispositivo. Tente novamente mais tarde.",
        "Orientação": "3° Regra de Segurança (Fluxo alto e médio) No início do fluxo",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23008",
        "Causa": "Ops! Não foi possível realizar a liberação deste dispositivo. Por favor, visite um de nossos pontos de atendimento e fale com os nossos atendentes.",
        "Orientação": "Usuário caiu na classificação baixa da Único, teve retorno similar da Topaz e a conta bloqueada no SIF.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23037",
        "Causa": "Ops! Não foi possível realizar a liberação deste dispositivo. Por favor, visite um de nossos pontos de atendimento e fale com os nossos atendentes.",
        "Orientação": "Usuário caiu na classificação baixa da Único, teve retorno não similar da Topaz e o dispositivo bloqueado no SIF.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23009",
        "Causa": "Não foi possível prosseguir com a liberação pois seus dados estão desatualizados.<br><br>Procure a agência mais próxima de você para regularizar o seu cadastro.",
        "Orientação": "Usuário teve erro ou divergência genérica na Único.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23010",
        "Causa": "Agora você pode acessar os serviços e vantagens do aplicativo Mercantil.",
        "Orientação": "Mensagem de sucesso no fluxo alto",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23011",
        "Causa": "Conta bloqueado no fluxo de Classificação Baixa pela liberação de dispositivo.",
        "Orientação": "CONTROLE INTERNO (NÃO EXIBE PARA O USUÁRIO)",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23012",
        "Causa": "Dispositivo bloqueado na liberação de dispositivo por facespoofing.",
        "Orientação": "CONTROLE INTERNO (NÃO EXIBE PARA O USUÁRIO)",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23013",
        "Causa": "Dispositivo bloqueado no fluxo de Classificação Baixa pela liberação de dispositivo.",
        "Orientação": "CONTROLE INTERNO (NÃO EXIBE PARA O USUÁRIO)",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23022",
        "Causa": "Ocorreu um erro desconhecido ao liberar o dispositivo. Tente novamente mais tarde. Caso o erro persista, contate a Central de Atendimento MB.",
        "Orientação": "Mensagem genérica para erros não tratados pelo serviço (Ex.: Serviços fora do ar)",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23032",
        "Causa": "Ops! Não foi possível realizar a liberação deste dispositivo. Por favor, visite uma de nossas agências e fale com os nossos atendentes.",
        "Orientação": "Cenário desativado com a nova liberação, padronizar com mensagem 23008.\nMensagem realocada para ser exibida ao usuário que não tem foto na topaz",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23033",
        "Causa": "Conta bloqueada. Código 23033.",
        "Orientação": "Usuário selecionou ou informou uma agência e conta que está bloqueada no SIF (Sistema de Informações de Fraudes)",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23034",
        "Causa": "Dispositivo bloqueado. Código 23034",
        "Orientação": "Usuário informou a senha de acesso a partir de um dispositivo que está bloqueado no SIF (Sistema de Informações de Fraudes)",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23030",
        "Causa": "Usuário se deparou com selfling da Único",
        "Orientação": "",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23033",
        "Causa": "Usuário digitou agência e conta, clicou em continuar e a conta está no SIF",
        "Orientação": "Ops! Não foi possível prosseguir. Informe o código SIF0201, através do WhatsApp 0800 7070 398 (no menu Aplicativo, opção Relatar Problemas e Erros) ou procure uma de nossas agências mais próximas. ",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23034",
        "Causa": "Usuário digitou agência e conta, clicou em continuar e o aparelho está no SIF",
        "Orientação": "Ops! Não foi possível prosseguir. Informe o código SIF0202, através do WhatsApp 0800 7070 398 (no menu Aplicativo, opção Relatar Problemas e Erros) ou procure uma de nossas agências mais próximas. ",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23109",
        "Causa": "Usuário digitou agência e conta, clicou em continuar e a Tag e o Score do Risk impedem o 1° acesso",
        "Orientação": "Ops! Não foi possível prosseguir com seu cadastro. Informe o código MBR100, através do WhatsApp 0800 7070 398 (no menu Aplicativo, opção Relatar Problemas e Erros) ou procure uma de nossas agências mais próximas. ",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23110",
        "Causa": "Usuário digitou agência e conta, clicou em continuar e a Tag e o Score do Risk impedem o 1° acesso e  bloqueiam o IDMachine",
        "Orientação": "Ops! Não foi possível prosseguir com seu cadastro. Informe o código SIF0603, através do WhatsApp 0800 7070 398 (no menu Aplicativo, opção Relatar problemas e erros) ou procure uma de nossas agências mais próximas. ",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23111",
        "Causa": "Usuário fez a prova de vida da Único e obteve erro que não permite uma nova tentativa (DeepFake)",
        "Orientação": "Ops! Não foi possível prosseguir com seu cadastro. Tente novamente em alguns instantes e, se não conseguir, nos chame WhatsApp 0800 7070 398 (no menu Aplicativo, opção Relatar Problemas e erros)",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23112",
        "Causa": "Usuário fez a prova de vida da Único e excedeu o n° de tentativas",
        "Orientação": "Ops! Não foi possível prosseguir com seu cadastro. Tente novamente em alguns instantes e, se não conseguir, nos chame WhatsApp 0800 7070 398 (no menu Aplicativo, opção Relatar Problemas e erros)",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23113",
        "Causa": "Usuário entrou na classificação baixa da Único e teve o retorno similar da Topaz - bloqueia IDMachine",
        "Orientação": "Ops! Não foi possível prosseguir com seu cadastro. Informe o código SIF0601, através do WhatsApp 0800 7070 398 (no menu Aplicativo, opção Relatar problemas e erros) ou procure uma de nossas agências mais próximas. ",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23114",
        "Causa": "Usuário entrou na classificação baixa da Único e teve o retorno não similar da Topaz - bloqueia IDMachine",
        "Orientação": "Ops! Não foi possível prosseguir com seu cadastro. Informe o código SIF0602, através do WhatsApp 0800 7070 398 (no menu Aplicativo, opção Relatar problemas e erros) ou procure uma de nossas agências mais próximas. ",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23115",
        "Causa": "Usuário entrou na classificação média da Único e teve o retorno não similar da Topaz - bloqueia IDMachine",
        "Orientação": "",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "SIF0602",
        "Causa": "Ops! Não foi possível prosseguir com seu cadastro. Acesse o Menu Ajuda pelo Aplicativo e informe no WhatsApp Menu Aplicativo, opção Relatar Problemas o código SIF0602.",
        "Orientação": "",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23116",
        "Causa": "Ops! Não foi possível prosseguir com seu cadastro. Acesse o Menu Ajuda pelo Aplicativo e informe no WhatsApp Menu Aplicativo, opção Relatar Problemas o código SIF0602.",
        "Orientação": "",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23117",
        "Causa": "Ops! Não foi possível prosseguir com seu cadastro. Acesse o Menu Ajuda pelo Aplicativo e informe no WhatsApp Menu Aplicativo, opção Relatar Problemas o código SIF0602.",
        "Orientação": "",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23118",
        "Causa": "Usuário entrou na classificação média da Único e teve o retorno não similar da Topaz - bloqueia IDMachine",
        "Orientação": "Ops! Não foi possível prosseguir com seu cadastro. Informe o código SIF0602, através do WhatsApp 0800 7070 398 (no menu Aplicativo, opção Relatar problemas e erros) ou procure uma de nossas agências mais próximas. ",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23119",
        "Causa": "Usuário criou a senha de acesso mas o aparelho já acessa 3 ou mais contas",
        "Orientação": "Ops! Você atingiu o limite de contas liberadas para este dispositivo e por esse motivo não será possível prosseguir.  ",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23120",
        "Causa": "Usuário criou a senha de acesso mas está tentando liberar contas pela 4° vez no mesmo IDMachine - bloqueia IDMachine",
        "Orientação": "Ops! Seu usuário foi cadastrado mas identificamos um erro no seu aparelho. Informe o código SIF0605, através do WhatsApp 0800 7070 398 (no menu Aplicativo, opção Relatar problemas e erros) ou procure uma de nossas agências mais próximas. ",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23121",
        "Causa": "Usuário criou a senha de acesso mas está tentando liberar a mesma conta pela 4° vez em IDMachines diferentes",
        "Orientação": "Ops! Seu usuário foi cadastrado mas identificamos um erro no seu aparelho. Informe o código SIF 0606, através do WhatsApp 0800 7070 398 (no menu Aplicativo, opção Relatar problemas e erros) ou procure uma de nossas agências mais próximas. ",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23122",
        "Causa": "Usuário digitou agência e conta, clicou em continuar e o dispositivo está bloqueado no GIB. (Mensagem de erro não existe)",
        "Orientação": "Ops! Não foi possível prosseguir. Informe o código GIB 0102, através do WhatsApp 0800 7070 398 (no menu Aplicativo, opção Relatar Problemas e Erros) ou procure uma de nossas agências mais próximas. ",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23123",
        "Causa": "Usuário digitou agência e conta, clicou em continuar e a conta está bloqueado no GIB. (Mensagem de erro já existe)",
        "Orientação": "Ops! Não foi possível prosseguir. Informe o código GIB 0101, através do WhatsApp 0800 7070 398 (no menu Aplicativo, opção Relatar Problemas e Erros) ou procure uma de nossas agências mais próximas. ",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23137",
        "Causa": "Usuário caiu no fluxo médio ou baixo da Único e não possui foto na Topaz",
        "Orientação": "Ops! Não foi possível prosseguir com seu cadastro. Acesse o Menu Ajuda pelo Aplicativo e informe no WhatsApp (Menu Aplicativo, opção Relatar Problemas) o código MFAM044I.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "23136",
        "Causa": "Usuário caiu no fluxo médio ou baixo da Único, possui foto cadastrado e visualizou alerta de redirecionamento",
        "Orientação": "Ops! Não foi possível confirmar a sua identidade e precisamos tentar novamente. Siga as instruções que aparecem na tela quando for posicionar o seu rosto.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "SAFM500E",
        "Causa": "Qualidade da imagem baixa",
        "Orientação": "Rosto na imagem não identificado. Possíveis causas: qualidade da imagem, posicionamento, iluminação ambiente.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "SAFM502E",
        "Causa": "Rosto muito longe",
        "Orientação": "O rosto da pessoa está muito longe da câmera.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "SAFM503E",
        "Causa": "Rosto muito perto",
        "Orientação": "O rosto da pessoa está muito perto da câmera.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "SAFM504E",
        "Causa": "Iluminação muito clara ou muito escura",
        "Orientação": "A iluminação da imagem é muito ruim. No entanto, um rosto foi encontrado. Possíveis causas: muito claro ou muito escuro.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "SAFM505E",
        "Causa": "Imagem embaçada ou sem foco",
        "Orientação": "Imagem borrada ou qualidade muito baixa.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "SAFM507E",
        "Causa": "Rosto inclinado",
        "Orientação": "O rosto está inclinado. Tire a foto com o rosto em posição reta para a câmera.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "SAFM508E",
        "Causa": "Rosto de lado",
        "Orientação": "O rosto está de lado. Tire a foto com o rosto em posição reta para a câmera.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "SAFM511E",
        "Causa": "Face falsa",
        "Orientação": "Não é possível identificar se é uma imagem ao vivo.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "SAFM512E",
        "Causa": "Óculos",
        "Orientação": "Óculos não são permitidos.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "SAFM514E",
        "Causa": "Imagem embaçada",
        "Orientação": "Imagem embaçada.",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "SIF0201",
        "Causa": "Bloqueio no SIF",
        "Orientação": "Solicitar e anexar foto do cliente e de sua documentação à demanda",
        "Grupo Resolvedor": "GR_Fraudes_Eletrônicas",
        "": ""
    },
    {
        "Erro": "SIF0202",
        "Causa": "Bloqueio no SIF",
        "Orientação": "Solicitar e anexar foto do cliente e de sua documentação à demanda",
        "Grupo Resolvedor": "GR_Fraudes_Eletrônicas",
        "": ""
    },
    {
        "Erro": "MBR100",
        "Causa": "Bloqueio no SIF",
        "Orientação": "Abrir demanda ou designar a demanda para o GR_FRAUDES_ELETRONICAS",
        "Grupo Resolvedor": "GR_FRAUDES_ELETRONICAS",
        "": ""
    },
    {
        "Erro": "MFAM044I",
        "Causa": "Cliente com foto ausente cadastrada para a realização do reconhecimento facial.",
        "Orientação": "Solicitar ao cliente para que compareça em um PA para atualizar sua foto",
        "Grupo Resolvedor": "GR_Redecall(IBK ou APP)",
        "": ""
    },
    {
        "Erro": "FEP 755",
        "Causa": "Bloqueio por inserir senha incorreta",
        "Orientação": "O desbloqueio é realizado automaticamente após 24h, mas também pode ser feito no GIB: Suporte> Usuário> Desbloqueio de Cartão",
        "Grupo Resolvedor": "*Atender*",
        "": ""
    },
    {
        "Erro": "IBKE236E - Não existe estação passivel de liberação",
        "Causa": "Erro quando tenta liberar um dispositivo pelo gib ou PLA",
        "Orientação": "Encaminhar a demanda para o GR responsavel mencionando o erro ocorrido",
        "Grupo Resolvedor": "GR_Fraudes_Eletrônicas",
        "": ""
    },
    {
        "Erro": "IBKM221E",
        "Causa": "Cliente está tentando acessar de um dispositivo bloqueado",
        "Orientação": "Realizar o desbloqueio do dispositivo mediante a IP e ID caso apareça ao usuário (REDCALL - para realizar IP e identificar o ID)",
        "Grupo Resolvedor": "GR_Canais_AppMB",
        "": ""
    },
    {
        "Erro": "CCR2193E",
        "Causa": "É um erro de fatura de cartão",
        "Orientação": "Mandar para o GR responsavel pelos cartões",
        "Grupo Resolvedor": "Gr_Canais_Cartões",
        "": ""
    },
    {
        "Erro": "GRPM51E",
        "Causa": "É um erro no PIX",
        "Orientação": "Mandar para o GR responsavel pelo pix informando o erro",
        "Grupo Resolvedor": "Gr_Produto_PIX",
        "": ""
    },
    {
        "Erro": "SFMB21",
        "Causa": "Ele está tentando acessar de um dispositivo bloqueado",
        "Orientação": "Realizar o desbloqueio do dispositivo mediante a IP e ID caso apareça ao usuário (REDCALL - para realizar IP e identificar o ID)",
        "Grupo Resolvedor": "",
        "": ""
    },
    {
        "Erro": "ACESSO BLOQUEADO",
        "Causa": "Se dá quando o usuário bloqueou o seu acesso por exceder o limite de senhas incorretas",
        "Orientação": "Solicitar a exclusão de usuário para novo cadastro de senha ou desbloqueio de usuário caso o cliente queira tentar novamente a mesma senha",
        "Grupo Resolvedor": "GR_Canais_AppMB",
        "": ""
    },
    {
        "Erro": "Erro interno desconhecido",
        "Causa": "Erro desconhecido",
        "Orientação": "Normalmente se resolve após uma limpeza de dados completa do App",
        "Grupo Resolvedor": "*Atender*",
        "": ""
    },
    {
        "Erro": "20026",
        "Causa": "Na tentativa de extratos de meses anteriores do Benefício do INSS",
        "Orientação": "Informar cliente que o extrato do beneficio também pode ser retirado no Meu INSS e orientar em uma nova tentativa no APP.",
        "Grupo Resolvedor": "GR_Redecall(IBK ou APP) ou ATENDER",
        "": ""
    },
    {
        "Erro": "20027",
        "Causa": "Na tentativa de extratos de meses anteriores do Benefício do INSS",
        "Orientação": "Informar cliente que o extrato do beneficio também pode ser retirado no Meu INSS e orientar em uma nova tentativa no APP.",
        "Grupo Resolvedor": "GR_Redecall(IBK ou APP) ou ATENDER",
        "": ""
    },
    {
        "Erro": "GIB0101",
        "Causa": "Tentativa de acesso a dispositivo bloqueado manualmente na PLA",
        "Orientação": "Verificar o ID Único correspondente ao dispositivo e realizar a IP rigorosa para liberação. Ou orientar na liberação no ponto de atendimento. ",
        "Grupo Resolvedor": "GR_Canais_AppMB",
        "": ""
    },
    {
        "Erro": "22961",
        "Causa": "Tentativa de acesso a dispositivo bloqueado manualmente na PLA",
        "Orientação": "Verificar o ID Único correspondente ao dispositivo e realizar a IP rigorosa para liberação. Ou orientar na liberação no ponto de atendimento. ",
        "Grupo Resolvedor": "GR_Canais_AppMB",
        "": ""
    }
];

function searchError() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const similarErrors = errors.filter(e => e.Erro.toLowerCase().includes(input));

    if (similarErrors.length === 1) {
        const error = similarErrors[0];
        document.getElementById('errorCode').textContent = error.Erro;
        document.getElementById('errorCause').textContent = error.Causa;
        document.getElementById('errorGuidance').textContent = error.Orientação;
        document.getElementById('errorGroup').textContent = error['Grupo Resolvedor'];
        document.getElementById('resultModal').style.display = 'block';
    } else if (similarErrors.length > 1) {
        const errorList = similarErrors.map(e => `<li id="li" onclick="selectError('${e.Erro}')">${e.Erro}</li>`).join('');
        document.getElementById('errorList').innerHTML = `<ul id="ul">${errorList}</ul>`;
        document.getElementById('selectionModal').style.display = 'block';
    } else {
        alert('Erro não encontrado');
    }
}

function selectError(errorCode) {
    const error = errors.find(e => e.Erro === errorCode);
    document.getElementById('errorCode').textContent = error.Erro;
    document.getElementById('errorCause').textContent = error.Causa;
    document.getElementById('errorGuidance').textContent = error.Orientação;
    document.getElementById('errorGroup').textContent = error['Grupo Resolvedor'];
    document.getElementById('selectionModal').style.display = 'none';
    document.getElementById('resultModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
    document.getElementById('selectionModal').style.display = 'none';
}



    