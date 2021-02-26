from django.urls import path
from django.urls import include

urlpatterns = [
    path('api/v1/georoutes/', include('georoutes.urls')),
]
