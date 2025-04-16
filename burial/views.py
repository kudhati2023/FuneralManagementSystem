from django.shortcuts import render
from rest_framework import generics
from .models import BurialOrder
from .serializers import BurialOrderSerializer

class BurialOrderListCreate(generics.ListCreateAPIView):
    queryset = BurialOrder.objects.all()
    serializer_class = BurialOrderSerializer

class BurialOrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BurialOrder.objects.all()
    serializer_class = BurialOrderSerializer

# Create your views here.
