from django.urls import path
from .views import PaymentListCreate, PaymentDetailView

urlpatterns = [
    path('payments/', PaymentListCreate.as_view(), name='payment-list'),
    path('payments/<int:pk>/', PaymentDetailView.as_view(), name='payment-detail'),
]