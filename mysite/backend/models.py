from django.db import models

# Create your models here.

class Pizza(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class PizzaSize(models.Model):
    SIZE_CHOICES = [
            ('35cm', '35cm'),
            ('45cm', '45cm'),]

    id = models.IntegerField(primary_key=True)
    which_pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE, null=False, related_name="pizza_size")
    size = models.CharField(SIZE_CHOICES, default="35cm", max_length=5)

    def __str__(self):
        return self.size

class PizzaPrice(models.Model):
    id = models.IntegerField(primary_key=True)
    which_pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE, null=False, related_name="pizza_price")
    which_size = models.ForeignKey(PizzaSize, on_delete=models.CASCADE, null=False)
    price = models.IntegerField()

    def __str__(self):
        str_price = str(self.price)
        return str_price


class Ingredients(models.Model):
    id = models.IntegerField(primary_key=True)
    which_pizza = models.ManyToManyField(Pizza, related_name="pizza_ingredients")
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Additives(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)
    price = models.IntegerField()

    def __str__(self):
        return self.name

