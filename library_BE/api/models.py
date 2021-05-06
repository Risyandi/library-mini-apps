from django.db import models

# Create models pelanggan
class Pelanggan(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    address = models.CharField(max_length=100)
    handphone = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    join_date = models.CharField(max_length=25)
    end_date = models.CharField(max_length=25)

    class Meta:
        db_table = 'pelanggan'
        verbose_name = "pelanggan"

# Create models buku
class Buku(models.Model):
    title = models.CharField(max_length=100)
    isbn_code = models.CharField(max_length=20)
    author = models.CharField(max_length=25)
    publisher = models.CharField(max_length=30)
    year_publish = models.CharField(max_length=25)

    class Meta:
        db_table = 'buku'
        verbose_name = "buku"

# Create models kategori buku
class Kategori(models.Model):
    isbn_code = models.CharField(max_length=20)
    title = models.CharField(max_length=30)
    name_category = models.CharField(max_length=30)
    
    class Meta:
        db_table = 'kategori'
        verbose_name = "kategori buku"

# Create models kategori transaksi peminjaman
class Transaksi(models.Model):
    start_date_borrow = models.CharField(max_length=25)
    end_date_borrow = models.CharField(max_length=25)
    date_return = models.CharField(max_length=25)
    buku = models.ForeignKey(Buku, on_delete=models.CASCADE, default="")
    peminjam = models.ForeignKey(Pelanggan, on_delete=models.CASCADE, default="")
    
    class Meta:
        db_table = 'transaksi'
        verbose_name = "transaksi buku"