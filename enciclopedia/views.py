from django.shortcuts import render
from django.utils import timezone
from .models import Post


# Create your views here.
def index(request):
    return render(request, 'enciclopedia/index.html')

def criaturas(request):
    posts = Post.objects.filter(
            published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'enciclopedia/criaturas.html', {'posts': posts})

def formulario(request):
    return render(request, 'enciclopedia/formulario.html')

def sesion(request):
    return render(request, 'enciclopedia/sesion.html')

#galleria 
def galeria(request):

    return render(request, 'enciclopedia/galeria.html')

def listaperfilA(request):
    return render(request, 'enciclopedia/perfilA.html')

def listaperfilB(request):
    return render(request, 'enciclopedia/perfilB.html')

def listaperfilC(request):
    return render(request, 'enciclopedia/perfilC.html')

def listaperfilD(request):
    return render(request, 'enciclopedia/perfilD.html')




