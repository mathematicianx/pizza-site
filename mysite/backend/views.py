from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Pizza, PizzaSize, PizzaPrice, Ingredients
from .serializers import PizzaSerializer, PizzaSizeSerializer, PizzaPriceSerializer, IngredientsSerializer, IngredientsSerializer123


@csrf_exempt
def pizza_list(request):
    if request.method == 'GET':
        pizzas = Pizza.objects.all()
        serializer = PizzaSerializer(pizzas, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PizzaSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def pizza_size_list(request):
    if request.method == 'GET':
        pizzas_size = PizzaSize.objects.all()
        serializer = PizzaSizeSerializer(pizzas_size, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PizzaSizeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def pizza_price_list(request):
    if request.method == 'GET':
        pizzas_price = PizzaPrice.objects.all()
        serializer = PizzaPriceSerializer(pizzas_price, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PizzaPriceSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

def pizza_detailed(request, pk):
    queryset = get_object_or_404(Pizza, pk=pk)
    serializer = PizzaSerializer(queryset)
    return JsonResponse(serializer.data)


@csrf_exempt
def ingredients_list(request):
    if request.method == 'GET':
        ingredients = Ingredients.objects.all()
        pizzas = Pizza.objects.all()
        serializer = IngredientsSerializer123(pizzas, many=True)
        return JsonResponse(serializer.data, safe=False)

    # elif request.method == 'POST':
    #     data = JSONParser().parse(request)
    #     serializer = IngredientsSerializer(data=data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return JsonResponse(serializer.data, status=201)
    #     return JsonResponse(serializer.errors, status=400)

def ingredients_detailed(request, pk):
    queryset2 = get_object_or_404(Ingredients, pk=pk)
    serializer2 = IngredientsSerializer(queryset2)
    return JsonResponse(serializer2.data)
