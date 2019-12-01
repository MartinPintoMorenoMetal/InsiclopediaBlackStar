from django.shortcuts import render,redirect
from django.utils import timezone
from .models import Post
from .Froms import PostFrom
from django.contrib.auth.decorators import login_required


# Create your views here.
def index(request):
    return render(request, 'enciclopedia/index.html')



def criaturas(request):

    return render(request, 'enciclopedia/criaturas.html')

def galeria(request):
    Posts = Post.objects.all()
    data ={
        'Posts':Posts
    }
    return render(request, 'enciclopedia/galeria.html',data)

def formulario(request):
    return render(request, 'enciclopedia/formulario.html')

def sesion(request):
    return render(request, 'enciclopedia/sesion.html')

#galleria 

def listaperfilA(request):

    #Posts = Post.objects.get(criarue = 1)
    #data ={
      #  'Posts':Posts
    #}   
    return render(request, 'enciclopedia/perfilA.html')

def listaperfilB(request):
    return render(request, 'enciclopedia/perfilB.html')

def listaperfilC(request):
    return render(request, 'enciclopedia/perfilC.html')

@login_required
def Nuevo_Post(request):

    data = {
        'form':PostFrom()
    }

    if request.method == 'POST':
        formulario = PostFrom(request.POST, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            data['mensaje'] = "Guardado Correctamente"
    

    return render(request, 'enciclopedia/Nuevo_Post.html',data)

def modificar_post(request, id):
    Posts = Post.objects.get(id=id)
    data = {
        'form':PostFrom(instance=Posts)  
    }

    if request.method == 'POST':
        formulario = PostFrom(data=request.POST, instance=Posts,  files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            data['mensaje'] = "Modificacion Correctamente"
            data['form'] = PostFrom(instance=Post.objects.get(id=id))




    return render(request,'enciclopedia/modificar_post.html',data)

def eliminar_post(request, id):
    Posts = Post.objects.get(id=id)
    Posts.delete()

    return redirect(to="galeria")

