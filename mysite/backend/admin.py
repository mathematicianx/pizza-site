from django.contrib import admin
from .models import Pizza, PizzaSize, PizzaPrice, Ingredients, Additives
# Register your models here.


@admin.register(Pizza)
class PizzaAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(PizzaSize)
class PizzaSizeAdmin(admin.ModelAdmin):
    list_display = ('id', 'which_pizza', 'size')

@admin.register(PizzaPrice)
class PizzaPriceAdmin(admin.ModelAdmin):
    list_display = ('id', 'which_pizza', 'which_size', 'price')

@admin.register(Ingredients)
class IngredientsAdmin(admin.ModelAdmin):
    list_display = ('id',  'which_pizza', 'name',)

@admin.register(Additives)
class AdditivesAdmin(admin.ModelAdmin):
    list_display = ('name', 'price')