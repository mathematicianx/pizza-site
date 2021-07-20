from .models import Pizza, PizzaSize, PizzaPrice, Ingredients
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

class IngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredients
        fields = ['id', 'which_pizza', 'name']


class IngredientsSerializer123(serializers.ModelSerializer):
    pizza_ingredients = serializers.StringRelatedField(many=True)  # if you want names
    # pizza_ingredients = serializers.PrimaryKeyRelatedField(many=True, read_only=True) # if you want ids
    pizza_price = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = Pizza
        fields = ('id', 'name', 'pizza_ingredients', 'pizza_price')

