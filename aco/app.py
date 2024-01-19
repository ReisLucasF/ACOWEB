from flask import Flask, request, jsonify, Response
import pandas as pd
from ACOs import ACOs
import json
import zipfile
import base64
import io
import openpyxl

def load_images64(image_files):
    image_data_list = []
    for image_file in image_files:
        image_data = base64.b64encode(image_file.read()).decode("utf-8")
        image_data_list.append(image_data)
    return image_data_list

def construct_script(aco):
      with open("C:/wamp64/www/Anfer/aco/card/modelo.json", 'r') as f:
            data = f.read()
            data = data.replace("\\n", "\n").replace("\\", "").replace('{\n  "script": "', "").replace('"\n}', "")

            script = (data.replace("${ImagemEmBase64}", aco.Imagem).replace("${numeroAcao}", aco.num).replace("${tipoLayout}", aco.Banner)
                        .replace("${titulo}", aco.Titulo).replace("${corInicio}", aco.Cor_Fundo_Inicial)
                        .replace("${corFim}", aco.Cor_Fundo_Final).replace("${corTitulo}", aco.Titulo_Cor).replace("${corSubtitulo}", aco.Subtitulo_Cor)
                        .replace("${corTextoCTA}", aco.CTA_Cor).replace("${corFundoCTA}", aco.CTA_Cor_Fundo).replace("${corBordaCTA}", aco.CTA_Cor_Borda)
                        .replace("${subtitulo}", aco.Subtitulo).replace("${textoCTA}", aco.Texto_CTA).replace("${metodo}", aco.Método_Red).replace("${link}", aco.Link)
                        .replace("${codigo}", aco.Código_Red)).replace("${idCAT}", aco.IDcat)
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
    archive.rename(
            columns={"Unnamed: 3": "Titulo cor", "Unnamed: 5": "Subtitulo cor", "Unnamed: 7": "CTA cor",
                        "Unnamed: 9": "Cor fundo inicial",
                        "Unnamed: 10": "Cor fundo Final", "CTA": "CTA Cor do fundo",
                        "CTA.1": "CTA Cor da borda", "Fundo": "Imagem", "Redirecionamento externo": "Link"}, inplace=True)
    
# Realiza algum processamento com os dados (exemplo: converter para JSON)
    archive_json = archive.to_json(orient='records')
    archive_json = json.loads(archive_json)

# DELETA ÍNDICE 0 JSON
    del archive_json[0]

    return lines_ocults, archive_json

app = Flask(__name__)

@app.route('/', methods=['POST'])
def table():
    try:
        # Recebe a planilha do formulário
        file = request.files['file']
        image_files = request.files.getlist('images')
        image_names = [file_storage.filename for file_storage in image_files]

        list_acos = []
        list_scripts = []
        
        image_data_list = load_images64(image_files)

        lines_ocults, archive_json = archive_config(file)

        for index in range(len(archive_json)):
            if lines_ocults[index] == False:
                index_image = image_names.index(archive_json[index]["Imagem"])
                aco = ACOs(archive_json[index]["ACO"], archive_json[index]["Tipo de Layout"], archive_json[index]["Titulo"], archive_json[index]["Titulo cor"], archive_json[index]["Subtitulo"],
                        archive_json[index]["Subtitulo cor"], archive_json[index]["Texto CTA"], archive_json[index]["CTA cor"], image_data_list[index_image], archive_json[index]["Cor fundo inicial"], archive_json[index]["Cor fundo Final"],
                        archive_json[index]["CTA Cor da borda"], archive_json[index]["CTA Cor do fundo"], archive_json[index]["Link"], None, None, None, None)
                
                #-----VERIFICAÇÕES DE PLANILHA, PARA SEGUIR PADRÕES-----#
                if len(aco.Titulo) > 25:
                    raise ValueError(f"Título ultrapassando 25 caracteres")
                if len(aco.Subtitulo) > 90:
                    raise ValueError(f"Subtitulo ultrapassando 90 caracteres")
                if aco.Titulo_Cor and aco.Subtitulo_Cor == aco.Cor_Fundo_Final and aco.Cor_Fundo_Inicial:
                    raise ValueError(f"Cor de fundo do card é o mesmo da cor de fundo do titulo ou subtitulo")
                if aco.CTA_Cor == aco.CTA_Cor_Fundo:
                    raise ValueError(f"Cor de fundo do botão CTA é o mesmo da cor do texto do CTA")
                #-------------------------------------------------------#

                aco.defini_banner()
        
                #Monta o script   
                list_scripts.append(construct_script(aco))
                list_acos.append(aco)
        zip_memory = io.BytesIO()
        with zipfile.ZipFile(zip_memory, 'w') as zipf:
            for index, script in enumerate(list_scripts):
                zipf.writestr(f'script_card_{list_acos[index].num}.txt', script)

        zip_memory.seek(0)
        response = Response(zip_memory, mimetype='application/zip')
        response.headers['Content-Disposition'] = 'attachment; filename=scripts.zip'
        return response
    
    except Exception as e:
        return jsonify({'status': 'erro', 'mensagem': str(e)})

if __name__ == '__main__':
    app.run(port=5000)
