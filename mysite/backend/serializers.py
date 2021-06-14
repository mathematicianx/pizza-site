from .models import Pizza, PizzaSize, PizzaPrice
from rest_framework import serializers


class PizzaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pizza
        fields = ['id', 'name']


class PizzaSizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PizzaSize
        fields = ['id', 'which_pizza', 'size']


class PizzaPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = PizzaPrice
        fields = ['id', 'which_pizza', 'which_size', 'price']
