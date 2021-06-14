from django.urls import path
from . import views

app_name = 'backend'

urlpatterns = [
    path('pizzas/', views.pizza_list, name="pizzas"),
    path('pizzas/<pk>/', views.pizza_detailed, name='pizza_detailed'),
    path('pizzas-size/', views.pizza_size_list, name="pizza_size"),
    path('pizzas-price/', views.pizza_price_list, name='pizza_price'),

]