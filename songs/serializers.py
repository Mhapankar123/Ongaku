from rest_framework import serializers
from .models import Songs


class SongsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = ('user', 'title','artist','image','audio_file','duration',)
 