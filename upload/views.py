from django.shortcuts import render

from django.conf import settings
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from .models import Upload
from .serializers import UploadSerializer

class UploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        uploads = Upload.objects.all()
        serializer = UploadSerializer(uploads, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        posts_serializer = UploadSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
