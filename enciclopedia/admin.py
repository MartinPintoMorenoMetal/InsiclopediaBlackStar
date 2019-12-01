from django.contrib import admin
from .models import Post,Creature
 
class Criaturas(admin.ModelAdmin):
    list_display = ['id','nameCreature']


admin.site.register(Post)
admin.site.register(Creature, Criaturas)


