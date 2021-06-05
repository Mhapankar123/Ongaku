from rest_framework import serializers
from .models import SongsPage


class SongsPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SongsPage
        fields = ('user', 'title','artist','image','audio_file',)
 