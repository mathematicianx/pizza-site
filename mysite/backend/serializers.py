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


# class Category(models.Model): < ingredients
#     name = models.CharField(max_length=191, blank=False, null=False)
#     description = models.TextField(blank=True, null=True)
#
# class Product(models.Model): pizza
#     product_code = models.CharField(max_length=191, blank=False, null=False)
#     name = models.CharField(max_length=191, blank=False, null=False)
#     description = models.TextField(blank=False, null=False)
#     price = models.DecimalField(max_digits=19, decimal_places=2)
#     photo = models.ImageField(upload_to='pictures/products/', max_length=255, null=False, blank=False)
#     category = models.name = models.ManyToManyField(Category)


# class CategorySerializer(serializers.ModelSerializer):
#     products = serializers.SerializerMethodField()
#
#     class Meta:
#         model = Category
#         fields = ('') # add relative fields
#
#    def get_products(self, obj):
#        products = obj.product_set.all() # will return product query set associate with this category
#        response = ProductSerializer(products, many=True).data
#        return response

class IngredientsSerializer123(serializers.ModelSerializer):
    pizza_ingredients = serializers.StringRelatedField(many=True)  # if you want names
    # pizza_ingredients = serializers.PrimaryKeyRelatedField(many=True, read_only=True) # if you want ids
    class Meta:
        model = Pizza
        fields = ('id', 'name', 'pizza_ingredients')