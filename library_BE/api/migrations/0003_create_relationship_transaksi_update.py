# Generated by Django 3.1.7 on 2021-05-06 05:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_create_relationship_transaksi'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaksi',
            name='buku',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='api.buku'),
        ),
        migrations.AlterField(
            model_name='transaksi',
            name='peminjam',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='api.pelanggan'),
        ),
    ]
