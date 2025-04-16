from rest_framework import serializers
from .models import Plot, PlotBooking

class PlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plot
        fields = '__all__'

class PlotBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlotBooking
        fields = '__all__'