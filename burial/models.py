from django.db import models

class BurialOrder(models.Model):
    order_number = models.CharField(max_length=100, unique=True)
    deceased = models.ForeignKey('mortuary.DeceasedRecord', on_delete=models.CASCADE)
    funeral_date = models.DateTimeField()
    service_type = models.CharField(max_length=100)
    funeral_location = models.CharField(max_length=200)
    additional_services = models.TextField(blank=True)
    status = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Burial Order #{self.order_number}"
