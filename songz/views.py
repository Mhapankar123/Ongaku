from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import Songz
from .serializers import SongzSerializer

class SongView(APIView):
    permission_classes = [AllowAny]
    def get(self, request, format=None):
        print(request.headers)
        return Response(200)

    def post(self, request, format=None):
        print(request.data)
        return Response(200)