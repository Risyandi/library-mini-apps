from django.shortcuts import render
from django.http import JsonResponse

# Create views response homepage
def homepage(request):
    content = {
        "title" : "homepage",
        "message": "Hello folks!",
        "year": "2021",
    }
    return JsonResponse(content)
