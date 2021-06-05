from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
    path("songs/", include("songs.urls"), name="songs"),
    path("songspage/", include("songspage.urls"), name="songspage"),
    path("arjit/", include("arjit.urls"), name="arjitpage"),
    path("albums/", include("albums.urls"), name="albumpage"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns += [re_path(r"^.*", TemplateView.as_view(template_name="index.html"))]
