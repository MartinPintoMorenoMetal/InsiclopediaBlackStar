from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'enciclopedia/index.html')

def criaturas(request):
    return render(request, 'enciclopedia/criaturas.html')

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

