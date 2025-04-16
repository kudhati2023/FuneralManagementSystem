from django.shortcuts import render
from rest_framework import generics
from .models import Plot, PlotBooking
from .serializers import PlotSerializer, PlotBookingSerializer

class PlotListCreate(generics.ListCreateAPIView):
    queryset = Plot.objects.all()
    serializer_class = PlotSerializer

class PlotDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Plot.objects.all()
    serializer_class = PlotSerializer

class PlotBookingListCreate(generics.ListCreateAPIView):
    queryset = PlotBooking.objects.all()
    serializer_class = PlotBookingSerializer

class PlotBookingDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PlotBooking.objects.all()
    serializer_class = PlotBookingSerializer
