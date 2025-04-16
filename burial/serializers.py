from rest_framework import serializers
from .models import BurialOrder

class BurialOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = BurialOrder
        fields = '__all__'