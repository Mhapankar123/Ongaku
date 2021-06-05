from rest_framework import serializers
from .models import Songz


class SongzSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songz
        fields = ('user','title','artist',)