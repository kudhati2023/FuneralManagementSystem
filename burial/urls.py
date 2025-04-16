from django.urls import path
from .views import BurialOrderListCreate, BurialOrderDetailView

urlpatterns = [
    path('orders/', BurialOrderListCreate.as_view(), name='burial-order-list'),
    path('orders/<int:pk>/', BurialOrderDetailView.as_view(), name='burial-order-detail'),
]