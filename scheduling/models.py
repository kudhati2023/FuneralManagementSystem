from django.db import models

class Schedule(models.Model):
    deceased = models.ForeignKey('mortuary.DeceasedRecord', on_delete=models.CASCADE)
    driver = models.ForeignKey('drivers.Driver', on_delete=models.CASCADE)
    vehicle = models.ForeignKey('drivers.Vehicle', on_delete=models.CASCADE)
    pickup_time = models.DateTimeField()
    pickup_location = models.CharField(max_length=200)
    destination = models.CharField(max_length=200)
    status = models.CharField(max_length=50)
    notes = models.TextField(blank=True)
    
    def __str__(self):
        return f"Schedule for {self.deceased.name} on {self.pickup_time}"
