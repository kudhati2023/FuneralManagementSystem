from django.db import models

class DeceasedRecord(models.Model):
    name = models.CharField(max_length=200)
    next_of_kin = models.CharField(max_length=200)
    removal_date = models.DateTimeField()
    removal_place = models.CharField(max_length=200)
    burial_order_number = models.CharField(max_length=100, unique=True)
    cause_of_death = models.TextField()
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    coffin_type = models.CharField(max_length=100)
    burial_date = models.DateField()
    burial_location = models.CharField(max_length=200)
    collection_day = models.CharField(max_length=50)
    mortician_name = models.CharField(max_length=200)
    hearse_driver_name = models.CharField(max_length=200)
    
    def __str__(self):
        return f"{self.name} ({self.burial_order_number})"
