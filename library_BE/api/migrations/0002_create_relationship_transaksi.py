# Generated by Django 3.1.7 on 2021-05-06 05:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_create_new_table'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaksi',
            name='buku',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.SET_DEFAULT, to='api.buku'),
        ),
        migrations.AddField(
            model_name='transaksi',
            name='peminjam',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.SET_DEFAULT, to='api.pelanggan'),
        ),
    ]
