from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Buku, Kategori, Pelanggan, Transaksi

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']

class BukuSerializer(serializers.ModelSerializer):

    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Buku 
        fields = '__all__'

class KategoriSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kategori
        fields = '__all__'

class PelangganSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pelanggan
        fields = '__all__'

class TransaksiSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    # initial
    detailBuku = serializers.SerializerMethodField()
    detailPeminjam = serializers.SerializerMethodField()

    class Meta:
        model = Transaksi
        fields = '__all__'

    # get data from per model filter by id
    def get_detailBuku(self, obj):
        dataBuku = Buku.objects.filter(id=obj.buku.id) #buku foreign key
        return BukuSerializer(dataBuku, many=True).data

    def get_detailPeminjam(self, obj):
        dataPeminjam = Pelanggan.objects.filter(id=obj.peminjam.id) #peminjam foreign key
        return PelangganSerializer(dataPeminjam, many=True).data