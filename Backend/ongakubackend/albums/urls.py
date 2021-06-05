from django.urls import path
from .views import AlbumsView
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', AlbumsView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)