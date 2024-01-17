from flask import Flask, request, jsonify, Response
import base64
import pandas as pd
from ACOs import ACOs
import json

def load_images64(image_files):
    image_data_list = []
    for image_file in image_files:
        image_data = base64.b64encode(image_file.read()).decode("utf-8")
        image_data_list.append(image_data)
    return image_data_list

def construct_script(aco, image_data_list):
      with open("C:/wamp64/www/Anfer/aco/card/modelo.json", 'r') as f:
            data = f.read()

            script = (data.replace("${ImagemEmBase64}", aco.Imagem).replace("${numeroAcao}", aco.num).replace("${tipoLayout}", aco.Banner)
                        .replace("${titulo}", aco.Titulo).replace("${corInicio}", aco.Cor_Fundo_Inicial)
                        .replace("${corFim}", aco.Cor_Fundo_Final).replace("${corTitulo}", aco.Titulo_Cor).replace("${corSubtitulo}", aco.Subtitulo_Cor)
                        .replace("${corTextoCTA}", aco.CTA_Cor).replace("${corFundoCTA}", aco.CTA_Cor_Fundo).replace("${corBordaCTA}", aco.CTA_Cor_Borda)
                        .replace("${subtitulo}", aco.Subtitulo).replace("${textoCTA}", aco.Texto_CTA).replace("${metodo}", aco.Método_Red).replace("${link}", aco.Link)
                        .replace("${codigo}", aco.Código_Red)).replace("${idCAT}", "38").replace("\\n", "\n").replace("\\", "")
      return script

app = Flask(__name__)

@app.route('/table', methods=['POST'])
def table():
    try:
        # Recebe a planilha do formulário
        file = request.files['file']
        image_files = request.files.getlist('images')

        image_data_list = load_images64(image_files)
        
        list_acos = []
        list_scripts = []

        # Processa a planilha (exemplo: lê como DataFrame)
        archive = pd.read_excel(file)
        
        archive.rename(
            columns={"Unnamed: 3": "Titulo cor", "Unnamed: 5": "Subtitulo cor", "Unnamed: 7": "CTA cor",
                        "Unnamed: 9": "Cor fundo inicial",
                        "Unnamed: 10": "Cor fundo Final", "CTA": "CTA Cor do fundo",
                        "CTA.1": "CTA Cor da borda", "Fundo": "Imagem", "Redirecionamento externo": "Link"}, inplace=True)
        
        # Realiza algum processamento com os dados (exemplo: converter para JSON)
        archive_json = archive.to_json(orient='records')
        archive_json = json.loads(archive_json)

        del archive_json[0]

        for index in range(len(archive_json)):
            aco = ACOs(str(archive_json[index]["ACO"]).replace(".0", ""), archive_json[index]["Tipo de Layout"], archive_json[index]["Titulo"], archive_json[index]["Titulo cor"], archive_json[index]["Subtitulo"],
                       archive_json[index]["Subtitulo cor"], archive_json[index]["Texto CTA"], archive_json[index]["Texto CTA"], image_data_list[0], archive_json[index]["Cor fundo inicial"], archive_json[index]["Cor fundo Final"],
                       archive_json[index]["CTA Cor da borda"], archive_json[index]["CTA Cor do fundo"], archive_json[index]["Link"], None, None, None)
            aco.defini_banner()

        #Monta o script   
            list_scripts.append(construct_script(aco, image_data_list))
            list_acos.append(aco)

        # Retorna o txt como resposta e define cabeçalho para download
        response = Response(list_scripts, content_type='application/json')
        response.headers['Content-Disposition'] = 'attachment; filename=dados.txt'

        return response
    except Exception as e:
        return jsonify({'status': 'erro', 'mensagem': str(e)})

if __name__ == '__main__':
    app.run()
