from django.shortcuts import render
from django.utils import timezone

# Create your views here.
def criaturas(request):
    return render(request, 'enciclopedia/criaturas.html')
