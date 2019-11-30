from django.urls import path
from . import views
from .views import index,galeria,listaperfilA,listaperfilB,listaperfilC,listaperfilD,Nuevo_Post

from django.conf.urls import url, include
from rest_framework import routers


urlpatterns = [

    path('Nuevo_Post/',Nuevo_Post, name="Nuevo_Post"),
    path('', views.index, name='index'),
    path('index', views.index, name='index'),
    path('criaturas', views.criaturas, name='criaturas'),
    path('formulario', views.formulario, name='formulario'),
    path('galeria', views.galeria, name='galeria'),
    path('sesion', views.sesion, name='sesion'),
    path('perfilA', views.listaperfilA, name='perfilA'),
    path('perfilB', views.listaperfilB, name='perfilB'),
    path('perfilC', views.listaperfilC, name='perfilC'),
    path('perfilD', views.listaperfilD, name='perfilD'),
]
