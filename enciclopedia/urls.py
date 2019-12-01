from django.urls import path
from . import views
from .views import index,galeria,listaperfilA,listaperfilB,listaperfilC,Nuevo_Post,modificar_post,eliminar_post

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
    path('modificar_post/<id>/', modificar_post, name="modificar_post"),
    path('eliminar_post/<id>/', eliminar_post, name="eliminar_post"),
]
