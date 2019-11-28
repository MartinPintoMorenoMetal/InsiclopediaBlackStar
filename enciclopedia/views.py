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

def galeria(request):
    return render(request, 'enciclopedia/galeria.html')

def perfilA(request):
    return render(request, 'enciclopedia/perfilA.html')

def perfilB(request):
    return render(request, 'enciclopedia/perfilB.html')

def perfilC(request):
    return render(request, 'enciclopedia/perfilC.html')

def perfilD(request):
    return render(request, 'enciclopedia/perfilD.html')

