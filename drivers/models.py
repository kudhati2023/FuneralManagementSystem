from django.db import models

class Driver(models.Model):
    name = models.CharField(max_length=200)
    license_number = models.CharField(max_length=50, unique=True)
    phone_number = models.CharField(max_length=20)
    email = models.EmailField()
    status = models.CharField(max_length=50)  # available, on-duty, off-duty
    
    def __str__(self):
        return self.name

class Vehicle(models.Model):
    vehicle_number = models.CharField(max_length=50, unique=True)
    model = models.CharField(max_length=100)
    vehicle_type = models.CharField(max_length=50)
    capacity = models.IntegerField()
    status = models.CharField(max_length=50)  # available, in-use, maintenance
    
    def __str__(self):
        return f"{self.model} - {self.vehicle_number}"
