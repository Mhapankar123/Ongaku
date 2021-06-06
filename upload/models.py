from django.db import models

# Create your models here.

class Upload(models.Model):
    title = models.CharField(max_length=50, blank=True)
    artist = models.CharField(max_length=50, blank=True)
    image = models.ImageField(upload_to="uploaded_song/")
    audio_file = models.FileField(upload_to="uploaded_song/")

    def __str__(self):
        return self.title
