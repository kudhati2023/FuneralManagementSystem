from django.shortcuts import render
from rest_framework import generics
from .models import DeceasedRecord
from .serializers import DeceasedRecordSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

class DeceasedRecordListCreate(generics.ListCreateAPIView):
    queryset = DeceasedRecord.objects.all()
    serializer_class = DeceasedRecordSerializer

class DeceasedRecordDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DeceasedRecord.objects.all()
    serializer_class = DeceasedRecordSerializer

@api_view(['GET'])
def api_root(request, format=None):
    """
    The root of the mortuary API, providing links to the main endpoints.
    """
    return Response({
        'deceased': reverse('deceased-list', request=request, format=format),
        # Add other endpoints as needed
        # Example:
        # 'morgue': reverse('morgue-list', request=request, format=format),
        # 'services': reverse('mortuary-services-list', request=request, format=format),
    })
