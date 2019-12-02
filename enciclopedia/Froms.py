from django import forms
from django.forms import ModelForm
from .models import Post
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

#para ingresar Post
class PostFrom(ModelForm):

    class Meta:
        model = Post
        fields = ('title','criarue','Descripcion','created_date','imagen')

#para ingresar usuarios
class CustomUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['first_name','last_name','email','username','password1','password2']


