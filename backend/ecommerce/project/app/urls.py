from app import views
from django.urls import path

urlpatterns = [
    path('',views.getRoutes,name="routes"),
    path('products/',views.getProducts,name="getProducts"),
    path('product/<str:pk>/',views.getProduct,name="getProducts")
]
