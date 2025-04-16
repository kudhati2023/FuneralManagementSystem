from django.shortcuts import render
from rest_framework import generics
from .models import Schedule
from .serializers import ScheduleSerializer

class ScheduleListCreate(generics.ListCreateAPIView):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer

class ScheduleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
