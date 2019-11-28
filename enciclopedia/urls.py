from django.urls import path

from django.conf.urls import url, include
from rest_framework import routers
from enciclopedia.quickstart import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
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
