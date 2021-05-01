from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions, viewsets
from . import serializer
from .models import Buku, Kategori, Pelanggan, Transaksi

# Create view response Users api
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializer.UserSerializer

# Create view response Buku api
class BukuViewSet(viewsets.ModelViewSet):
    queryset = Buku.objects.all()
    serializer_class = serializer.BukuSerializer

# Create views response welcome to page api
@api_view(["GET"])
@permission_classes((permissions.AllowAny,))
def welcome(request):
    content = {
        "title": "API's library",
        "message": "Welcome to the library mini API's",
        "version": "v1",
        "author": "risyandi",
    }
    return JsonResponse(content)
