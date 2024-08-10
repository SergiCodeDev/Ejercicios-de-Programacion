import base64

# Abre la imagen en modo binario
with open("imagen.webp", "rb") as image_file:
    # Lee el contenido de la imagen y codifícalo en Base64
    base64_encoded = base64.b64encode(image_file.read()).decode('utf-8')

    # Imprime la cadena Base64
    print(base64_encoded)
