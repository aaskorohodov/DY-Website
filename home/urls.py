from django.urls import path
from .views import Home, ContentManager


urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('content-manager', ContentManager.as_view(), name='content_manager')
]
