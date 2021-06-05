from django.db import models
from django.contrib.auth import get_user_model
from django.conf import settings

User = get_user_model()


class Songs(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    title = models.CharField(max_length=50, blank=True)
    artist = models.CharField(max_length=50, blank=True)
    image = models.CharField(max_length=5000, blank=True)
    audio_file = models.CharField(max_length=5000, blank=True)
    duration = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.title
