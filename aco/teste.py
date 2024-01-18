import openpyxl
import pandas as pd

# Abre o arquivo Excel
wb = openpyxl.load_workbook('planilha.xlsx')

# Obtém a planilha
sheet = wb.active

# Obtém as linhas ocultas
ocultas = []
for i in range(sheet.max_row + 1):
    if sheet.row_dimensions[i].hidden:
        ocultas.append(i)

# Desabilita a ocultação das linhas
for i in ocultas:
    sheet.row_dimensions[i].hidden = False

# Obtém o caminho do arquivo Excel
filename = wb.path  # Usando o atributo 'path'

# Cria um dataframe com os dados da planilha
df = pd.read_excel(filename)

# Imprime o dataframe
print(df)