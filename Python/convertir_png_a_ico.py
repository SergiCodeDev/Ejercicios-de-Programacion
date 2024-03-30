from PIL import Image

# Abre la imagen PNG
img = Image.open('./logo.png')

# Convierte la imagen a formato RGBA
img = img.convert('RGBA')

# Guarda la imagen en formato ICO
img.save('./logoo.ico', format='ICO')