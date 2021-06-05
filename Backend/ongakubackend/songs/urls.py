from django.urls import path
from .views import SongsView
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', SongsView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)