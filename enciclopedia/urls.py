from django.urls import path
from . import views
 
urlpatterns = [
    path('', views.index, name='index'),
    path('index', views.index, name='index'),
    path('criaturas', views.criaturas, name='criaturas'),
    path('formulario', views.formulario, name='formulario'),
    path('galeria', views.galeria, name='galeria'),
    path('sesion', views.sesion, name='sesion'),
    path('perfilA', views.perfilA, name='perfilA'),
    path('perfilB', views.perfilB, name='perfilB'),
    path('perfilC', views.perfilC, name='perfilC'),
    path('perfilD', views.perfilD, name='perfilD'),
]
