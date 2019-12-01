from django import forms
from django.forms import ModelForm
from .models import Post

class PostFrom(ModelForm):

    class Meta:
        model = Post
        fields = ('title','criarue','Descripcion','created_date','imagen')
