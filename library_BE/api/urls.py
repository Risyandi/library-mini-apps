from django.urls import include, path
from rest_framework import viewsets, routers
from . import views, serializer

# Routers provide a way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'bukus', views.BukuViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', views.welcome),
    path('v1/', include(router.urls)),
]