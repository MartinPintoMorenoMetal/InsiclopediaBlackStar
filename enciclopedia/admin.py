from django.contrib import admin
from .models import Post,Creature
 
 #para que se vea la idea de las criaturas
class Criaturas(admin.ModelAdmin):
    list_display = ['id','nameCreature']

#pra que se vean en el admin
admin.site.register(Post)
admin.site.register(Creature, Criaturas)


