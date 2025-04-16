from django.urls import path
from .views import PlotListCreate, PlotDetailView, PlotBookingListCreate, PlotBookingDetailView

urlpatterns = [
    path('plots/', PlotListCreate.as_view(), name='plot-list'),
    path('plots/<int:pk>/', PlotDetailView.as_view(), name='plot-detail'),
    path('bookings/', PlotBookingListCreate.as_view(), name='plot-booking-list'),
    path('bookings/<int:pk>/', PlotBookingDetailView.as_view(), name='plot-booking-detail'),
]