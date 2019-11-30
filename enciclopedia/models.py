from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext as _

#Criaturas
class Selection(models.Model):
    name = models.CharField(max_length=40)

    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=200)
    url = models.CharField(max_length=200)
    Descripcion = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    Selection = models.ForeignKey(Selection, on_delete=models.CASCADE)
   
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



