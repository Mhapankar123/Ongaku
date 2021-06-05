from django.shortcuts import render
# from django.contrib.auth.models import User
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import Albums
from .serializers import AlbumsSerializer
from django.contrib.auth import get_user_model
import os
User = get_user_model()
# Create your views here.


class AlbumsView(APIView):
	permission_classes = [AllowAny]
	def get(self, request, format=None):
		user_id = request.headers['Authorization']
		songsdetails = Albums.objects.all()
		song = songsdetails.filter(user = user_id)
		serializer = AlbumsSerializer(song, many=True)
		print(serializer.data)
		return Response(serializer.data, status = status.HTTP_200_OK)

	def post(self, request, format=None):
		f = request.data['image']
		file_name = request.data['image'].name.replace(' ', "_")
		file_path = 'media/albums/if/'+file_name
		with open(file_path, 'wb+') as destination:
			for chunk in f.chunks():
				destination.write(chunk)
		request.data['image'] = file_path

		a = request.data['audio_file']
		audio_name = request.data['audio_file'].name.replace(' ', "_")
		audio_path = 'media/albums/af/'+audio_name
		with open(audio_path, 'wb+') as destination:
			for chunk in a.chunks():
				destination.write(chunk)
		request.data['audio_file'] = audio_path

		serializer = AlbumsSerializer(data = request.data)
		if serializer.is_valid():
		    serializer.save()
		    return Response(serializer.data, status= status.HTTP_201_CREATED)
		return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

#     def delete(self,request, format=None):
#         songwa = Songs.objects.get(user_id = request.headers['Authorization'], id = request.data['song_id'])
#         songwa.delete()
#         return Response({"message":"Song is Deleted"}, status=status.HTTP_204_NO_CONTENT)

	# def put(self, request, format=None):
	# 	serializer = PostSerializer(data=request.data)
	# 	if serializer.is_valid():
	# 		serializer.save()
	# 		return Response(serializer.data, status=status.HTTP_201_CREATED)
	# 	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	# def put(self, request, format=None):
	#     user = request.data['user']
	#     songdetails = Songs.objects.get(user=user)
	#     serializer = SongsSerializer(songdetails, data=request.data)
	#     if serializer.is_valid():
	#         serializer.save()
	#         return Response(serializer.data, status = status.HTTP_202_ACCEPTED)
	#     return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)