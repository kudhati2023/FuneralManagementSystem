from django.urls import path
from .views import DriverListCreate, DriverDetailView, VehicleListCreate, VehicleDetailView

urlpatterns = [
    path('drivers/', DriverListCreate.as_view(), name='driver-list'),
    path('drivers/<int:pk>/', DriverDetailView.as_view(), name='driver-detail'),
    path('vehicles/', VehicleListCreate.as_view(), name='vehicle-list'),
    path('vehicles/<int:pk>/', VehicleDetailView.as_view(), name='vehicle-detail'),
]