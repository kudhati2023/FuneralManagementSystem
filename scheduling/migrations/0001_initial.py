# Generated by Django 5.2 on 2025-04-14 12:30

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('drivers', '0001_initial'),
        ('mortuary', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pickup_time', models.DateTimeField()),
                ('pickup_location', models.CharField(max_length=200)),
                ('destination', models.CharField(max_length=200)),
                ('status', models.CharField(max_length=50)),
                ('notes', models.TextField(blank=True)),
                ('deceased', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mortuary.deceasedrecord')),
                ('driver', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='drivers.driver')),
                ('vehicle', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='drivers.vehicle')),
            ],
        ),
    ]
