from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions

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
