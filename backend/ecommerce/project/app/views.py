from django.shortcuts import render
#from django.http import JsonResponse
#from .products import products
from .models import Product
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import ProductSerializer
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    myapis=[
       {
           "products":'http://127.0.0.1.8000/api/products',
           "product":'http://127.0.0.1.8000/api/product/1'
           
           
           
           }
    ]
    return Response(myapis)

@api_view(['GET'])
def getProducts(request):
   Products=Product.objects.all()
   serialize=ProductSerializer(Products,many=True)
   return Response(serialize.data)

@api_view(['GET'])
def getProduct(request,pk):
    product=Product.objects.get(_id=pk)
    serialize=ProductSerializer(product,many=False)
    return Response(serialize.data)