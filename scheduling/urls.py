from django.urls import path
from .views import ScheduleListCreate, ScheduleDetailView

urlpatterns = [
    path('schedules/', ScheduleListCreate.as_view(), name='schedule-list'),
    path('schedules/<int:pk>/', ScheduleDetailView.as_view(), name='schedule-detail'),
]