from django.db import models

class Payment(models.Model):
    PAYMENT_TYPES = [
        ('BURIAL', 'Burial Service'),
        ('PLOT', 'Plot Purchase'),
        ('MORTUARY', 'Mortuary Services'),
        ('TRANSPORT', 'Transport Services'),
    ]
    
    payment_number = models.CharField(max_length=100, unique=True)
    deceased = models.ForeignKey('mortuary.DeceasedRecord', on_delete=models.CASCADE)
    payment_type = models.CharField(max_length=50, choices=PAYMENT_TYPES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateTimeField(auto_now_add=True)
    payment_method = models.CharField(max_length=50)
    paid_by = models.CharField(max_length=200)
    status = models.CharField(max_length=50)
    
    def __str__(self):
        return f"Payment #{self.payment_number}"
