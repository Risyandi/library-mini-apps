from django.contrib import admin
from .models import Buku,Kategori,Pelanggan,Transaksi

# Register your models here.
allModels = [Buku, Kategori, Pelanggan, Transaksi]  # iterate list of models
admin.site.register(allModels)