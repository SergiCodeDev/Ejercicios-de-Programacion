from moviepy.editor import *

videoclip = VideoFileClip("video.mp4")
audioclip = AudioFileClip("audio.mp3")

new_audioclip = CompositeAudioClip([videoclip.audio, audioclip])
videoclip.audio = new_audioclip
videoclip.write_videofile("output.mp4")
