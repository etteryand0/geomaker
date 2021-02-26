from django.urls import path
from .views import generate

urlpatterns = [
    path('<float:start_point>/<int:scale>', generate),
]
