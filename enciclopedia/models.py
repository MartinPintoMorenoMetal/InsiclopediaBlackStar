from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext as _

#para identificar criaturas
class Creature(models.Model):
    nameCreature = models.CharField(max_length=40)

    def __str__(self):
        return self.nameCreature


#para que se creean los post con imagenes
class Post(models.Model):
    title = models.CharField(max_length=200)
    criarue = models.ForeignKey(Creature, on_delete=models.CASCADE)
    Descripcion = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    imagen = models.ImageField( blank=True)
   
    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

    class Meta:
        permissions = (
            ('administrador', _('Es administrador')),
            ('cliente', _('Es cliente')),
        )



