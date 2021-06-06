from django.urls import path
from .views import UploadView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', UploadView.as_view(), name= 'upload_page'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)