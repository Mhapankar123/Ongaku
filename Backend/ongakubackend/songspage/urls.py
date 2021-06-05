from django.urls import path
from .views import SongsPageView
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', SongsPageView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)