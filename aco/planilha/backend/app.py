import traceback
from flask import Flask, request, jsonify, Response, redirect, url_for, render_template
import pandas as pd
from ACOs import ACOs
import json
import zipfile
import base64
import io
import openpyxl
import warnings

# Ignora os warnings especificos
warnings.filterwarnings("ignore", category=UserWarning)
warnings.filterwarnings("ignore", category=FutureWarning)

def load_images64(image_files):
    image_data_list = []
    for image_file in image_files:
        image_data = base64.b64encode(image_file.read()).decode("utf-8")
        image_data_list.append(image_data)
    return image_data_list

def construct_script(aco):
      #print(aco.Link)
      with open("D:/Wamp64/www/ACOWEB/aco/card/modelo.json", 'r') as f:
            data = f.read()
            data = data.replace("\\n", "\n").replace("\\", "").replace('{\n  "script": "', "").replace('"\n}', "")

            script = (data.replace("${ImagemEmBase64}", aco.Imagem).replace("${numeroAcao}", aco.num).replace("${tipoLayout}", aco.Banner)
                        .replace("${titulo}", aco.Titulo).replace("${corInicio}", aco.Cor_Fundo_Inicial)
                        .replace("${corFim}", aco.Cor_Fundo_Final).replace("${corTitulo}", aco.Titulo_Cor).replace("${corSubtitulo}", aco.Subtitulo_Cor)
                        .replace("${corTextoCTA}", aco.CTA_Cor).replace("${corFundoCTA}", aco.CTA_Cor_Fundo).replace("${corBordaCTA}", aco.CTA_Cor_Borda)
                        .replace("${subtitulo}", aco.Subtitulo).replace("${textoCTA}", aco.Texto_CTA).replace("${metodo}", aco.Metodo_Red).replace("${link}", aco.Link)
                        .replace("${codigo}", aco.Codigo_Red)).replace("${idCAT}", aco.IDcat)
      return script

def archive_config(file):
    archive = pd.read_excel(file)
    lines_ocults = []

    workbook = openpyxl.load_workbook(file)
    sheet = workbook.active
# LINHA OCULTAS
    for index in range(len(archive)+2):
        if index > 2:
            lines_ocults.append(sheet.row_dimensions[index].hidden)
    workbook.close()

# RANAME COLUNAS
    print(archive)
    #print(archive.columns[2])
    #print(archive.columns[10])

    if archive.columns[2].upper() == "TITULO" and archive.columns[10].upper() == "FUNDO":
        archive.rename(
                columns={"Unnamed: 3": "Titulo cor", "Unnamed: 5": "Subtitulo cor", "Unnamed: 7": "CTA cor",
                            "Unnamed: 8": "CTA Cor do fundo", "Unnamed: 9": "CTA Cor da borda",
                            "Unnamed: 12": "Cor fundo Final", "Unnamed: 11": "Cor fundo inicial",
                            "Fundo": "Imagem", "Redirecionamento externo": "Link", "Redirecionamento": "Link"}, inplace=True)
    elif archive.columns[2].upper() == "BANNER" and archive.columns[11].upper() == "FUNDO":
        print("este")
        archive.rename(
                columns={"Unnamed: 3": "Titulo cor", "Unnamed: 5": "Subtitulo cor", "Unnamed: 8": "CTA cor",
                            "Unnamed: 9": "CTA Cor do fundo", "Unnamed: 10": "CTA Cor da borda",
                            "Unnamed: 13": "Cor fundo Final", "Unnamed: 12": "Cor fundo inicial",
                            "Fundo": "Imagem", "Redirecionamento externo": "Link", "Redirecionamento": "Link"}, inplace=True)
    if archive.columns[2].upper() == "BANNER":
        archive.rename(
                columns={"Unnamed: 4": "Titulo cor", "Unnamed: 6": "Subtitulo cor", "Unnamed: 8": "CTA cor",
                            "Unnamed: 10": "Cor fundo inicial",
                            "Unnamed: 11": "Cor fundo Final", "CTA": "CTA Cor do fundo",
                            "CTA.1": "CTA Cor da borda", "Fundo": "Imagem", "Redirecionamento externo": "Link", "Redirecionamento": "Link"}, inplace=True)
    if archive.columns[2].upper() == "TITULO":
        archive.rename(
                columns={"Unnamed: 3": "Titulo cor", "Unnamed: 5": "Subtitulo cor", "Unnamed: 7": "CTA cor",
                            "Unnamed: 9": "Cor fundo inicial",
                            "Unnamed: 10": "Cor fundo Final", "CTA": "CTA Cor do fundo",
                            "CTA.1": "CTA Cor da borda", "Fundo": "Imagem", "Redirecionamento externo": "Link", "Redirecionamento": "Link"}, inplace=True)
# Realiza algum processamento com os dados (exemplo: converter para JSON)
    archive.fillna('', inplace=True)
    archive_json = archive.to_json(orient='records')
    archive_json = json.loads(archive_json)

# DELETA ÍNDICE 0 JSON
    del archive_json[0]
    #print(archive_json)
    return lines_ocults, archive_json

app = Flask(__name__)

@app.route('/', methods=['POST'])
def table():
    try:
        source_file = request.form.get('source_file')
        print(source_file)
        # Recebe a planilha do formulário
        demand_number = request.form.get("numbers")
        pshDeepLink = request.form["dropbox"]
        op_selecionada = request.form['tipoLink']
        if demand_number =="":
            raise ValueError("Preencha todos os dados")
        if op_selecionada == "3" and pshDeepLink == "":
            raise ValueError("Gentileza informar o PshDeepLink da(s) acao(oes) selecionada(s)")
        list_scripts = []
        print(demand_number)
        print(pshDeepLink)
        print(op_selecionada)
        file = request.files['file']
        image_files = request.files.getlist('images')
        image_names = [file_storage.filename for file_storage in image_files]

        list_acos = []
        print(file)
        print(image_files)
        image_data_list = load_images64(image_files)

        lines_ocults, archive_json = archive_config(file)
        #return archive_json
        #print(lines_ocults)
        for index in range(len(archive_json)):
            if lines_ocults[index] == False and archive_json[index]["ACO"] != "":
                #print(archive_json[index]["ACO"])
                # VARIAVEIS INFORMATIVAS-------------------------------------------
                num_acao = str(archive_json[index]["ACO"])[:5].replace(".", "")
                tam_title = len(archive_json[index]["Titulo"])
                tam_subtitle = len(archive_json[index]["Subtitulo"])
                # -------------------------------------------------------------------
                #-----VERIFICAÇÕES DE PLANILHA, PARA SEGUIR PADRÕES. E VERIFICAÇÕES DE ERROS PRE PROCESSAMENTO-----#
                if archive_json[index]["Imagem"][-4:] != ".png":
                    archive_json[index]["Imagem"] = archive_json[index]["Imagem"] + ".png"
                    # print(archive_json[index]["Imagem"])
                if len(archive_json[index]["Titulo"]) > 25:
                    raise ValueError(f"Título da acao {num_acao} esta com {tam_title} caracteres, ultrapassando o limite de 25.")
                if len(archive_json[index]["Subtitulo"]) > 90:
                    raise ValueError(f"Subtitulo da acao {num_acao} esta com {tam_subtitle} caracteres, ultrapassando o limite de 90.")
                if (archive_json[index]["Titulo cor"] == archive_json[index]["Cor fundo Final"] or archive_json[index]["Titulo cor"] == archive_json[index]["Cor fundo inicial"]):
                    raise ValueError(f"Cor de fundo do card da acao {num_acao} e o mesmo da cor do titulo.")
                if (archive_json[index]["Subtitulo cor"] == archive_json[index]["Cor fundo Final"] or archive_json[index]["Subtitulo cor"] == archive_json[index]["Cor fundo inicial"]):
                    raise ValueError(f"Cor de fundo do card da acao {num_acao} e o mesmo da cor do subtitulo.")
                if (archive_json[index]["CTA cor"] == archive_json[index]["CTA Cor do fundo"]):
                    raise ValueError(f"Cor de fundo do botao CTA da acao {num_acao} e o mesmo da cor do texto do CTA.")
                if op_selecionada == "2" and archive_json[index]["Link"] == "":
                    raise ValueError("A acao {num_acao} esta sem link de redirecionamento, favor colocar o link na planilha.")
                archive_json[index]["Subtitulo"] = archive_json[index]["Subtitulo"].replace("R$ {", "").replace("R$ [", "").replace("}", "").replace("{", "").replace("]", "").replace("[", "")
                archive_json[index]["Titulo"] = archive_json[index]["Titulo"].replace("R$ {", "").replace("R$ [", "").replace("}", "").replace("{", "").replace("]", "").replace("[", "")
                #---------------------------------------------------------------------------------------------------#
                index_image = image_names.index(archive_json[index]["Imagem"])
                aco = ACOs(archive_json[index]["ACO"], archive_json[index]["Tipo de Layout"], archive_json[index]["Titulo"], archive_json[index]["Titulo cor"], archive_json[index]["Subtitulo"],
                        archive_json[index]["Subtitulo cor"], archive_json[index]["Texto CTA"], archive_json[index]["CTA cor"], image_data_list[index_image], archive_json[index]["Cor fundo inicial"], archive_json[index]["Cor fundo Final"],
                        archive_json[index]["CTA Cor da borda"], archive_json[index]["CTA Cor do fundo"], pshDeepLink, op_selecionada, archive_json[index]["Link"])
                aco.defini_banner()
                #-----VERIFICAÇÕES DE PLANILHA, PARA SEGUIR PADRÕES. E VERIFICAÇÕES DE ERROS POS PROCESSAMENTO-----#
                if (aco.Banner==0):
                    raise ValueError(f"Layout da acao {aco.num} nao reconhecido")
                #--------------------------------------------------------------------------------------------------#
                #print(aco.print())
                #Monta o script   
                list_scripts.append(construct_script(aco))
                list_acos.append(aco)
        if source_file == "test_backend.html":
            print(list_acos)

            return render_template('index.php', acos=list_acos, demand_number=demand_number, pshDeepLink=pshDeepLink, op_selecionada=op_selecionada, image_files=image_files, file=file)
        zip_memory = io.BytesIO()
        with zipfile.ZipFile(zip_memory, 'w') as zipf:
            for index, script in enumerate(list_scripts):
                zipf.writestr(f'script_card_{list_acos[index].num}.txt', script)

        zip_memory.seek(0)
        response = Response(zip_memory, mimetype='application/zip')
        response.headers['Content-Disposition'] = f'attachment; filename={demand_number}.zip'
        return response
    
    except Exception as e:
        traceback.print_exc()
        return jsonify({'status': 'erro', 'mensagem': str(e)})

if __name__ == '__main__':
    app.run(port=5000)
