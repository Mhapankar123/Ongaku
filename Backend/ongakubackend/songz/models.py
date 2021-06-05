from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Songz(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50, blank=True)
    artist = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.title

