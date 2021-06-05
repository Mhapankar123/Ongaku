from rest_framework import serializers
from .models import ArjitPage


class ArjitSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArjitPage
        fields = ('user', 'title','artist','image','audio_file',)
 