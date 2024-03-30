import tkinter as tk
from tkinter import filedialog
import moviepy.editor as moviepy

root = tk.Tk()
root.withdraw()

input_file = filedialog.askopenfilename(filetypes=[("WebM files", "*.webm")])
output_file = filedialog.asksaveasfilename(defaultextension=".mp4", filetypes=[("MP4 files", "*.mp4")])

clip = moviepy.VideoFileClip(input_file)
clip.write_videofile(output_file)