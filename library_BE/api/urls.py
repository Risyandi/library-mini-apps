from django.urls import include, path
from . import views

urlpatterns = [
    path('v1', views.welcome)
]