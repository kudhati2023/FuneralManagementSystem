from django.db import models

class Plot(models.Model):
    plot_number = models.CharField(max_length=50, unique=True)
    section = models.CharField(max_length=50)
    size = models.CharField(max_length=50)
    status = models.CharField(max_length=50)  # available, reserved, occupied
    price = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return f"Plot {self.plot_number} - {self.section}"

class PlotBooking(models.Model):
    plot = models.ForeignKey(Plot, on_delete=models.CASCADE)
    deceased = models.ForeignKey('mortuary.DeceasedRecord', on_delete=models.CASCADE)
    booking_date = models.DateTimeField(auto_now_add=True)
    reserved_by = models.CharField(max_length=200)
    payment_status = models.CharField(max_length=50)
    
    def __str__(self):
        return f"Booking for {self.plot.plot_number}"
