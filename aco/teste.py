import base64

image_path = "C:/Users/uriel/Desktop/ACOWEB/aco/Captura de tela 2024-01-08 134829.png"
        
print (image_path)

with open(image_path, "rb") as image:
    image_data = image.read()
    image_data = base64.b64encode(image_data).decode("utf-8")

print(image_data)