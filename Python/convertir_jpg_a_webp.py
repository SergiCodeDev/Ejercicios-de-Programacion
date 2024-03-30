import tkinter as tk
from tkinter import filedialog
from PIL import Image
import os

root = tk.Tk()
root.withdraw()

input_files = filedialog.askopenfilenames(filetypes=[("JPG files", "*.jpg")])

for input_file in input_files:
    output_file = filedialog.asksaveasfilename(initialfile=os.path.splitext(os.path.basename(input_file))[0], defaultextension=".webp", filetypes=[("WEBP files", "*.webp")])
    img = Image.open(input_file)
    img = img.convert('RGBA')
    img.save(output_file, format='WEBP')