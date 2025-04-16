from rest_framework import serializers
from .models import DeceasedRecord

class DeceasedRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeceasedRecord
        fields = '__all__'