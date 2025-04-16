# Generated by Django 5.2 on 2025-04-14 12:30

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('mortuary', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BurialOrder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_number', models.CharField(max_length=100, unique=True)),
                ('funeral_date', models.DateTimeField()),
                ('service_type', models.CharField(max_length=100)),
                ('funeral_location', models.CharField(max_length=200)),
                ('additional_services', models.TextField(blank=True)),
                ('status', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('deceased', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mortuary.deceasedrecord')),
            ],
        ),
    ]
