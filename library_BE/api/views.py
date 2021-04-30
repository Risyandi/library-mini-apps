from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view

# create views response welcome to page api
@api_view(["GET"])
def welcome(request):
    content = {"message": "Welcome to the library mini API's"}
    return JsonResponse(content)
