from django.contrib import admin
from django.urls import include, path
from django.contrib.auth.decorators import login_required
from . import views
 
urlpatterns = [


    path('', views.index, name='index'),
    path('index', views.index, name='index'),
    path('criaturas', views.criaturas, name='criaturas'),
    path('formulario', views.formulario, name='formulario'),
    path('galeria', views.galeria, name='galeria'),
    path('login', views.sesion, name='login'),
    path('perfilA', views.perfilA, name='perfilA'),
    path('perfilB', views.perfilB, name='perfilB'),
    path('perfilC', views.perfilC, name='perfilC'),
    path('perfilD', views.perfilD, name='perfilD'),
    
    
    path('enciclopedia/',include('apps.enciclopedia.urls','enciclopedia')),
    #path('',login_required(Inicio.as_view()), name = 'index'),
]
