from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext as _
 
 
class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
 
class Usuario(models.Model):
    nombresUsuario = models.CharField('Usuario Name', max_length=120)
    apellidoUsuario = models.CharField('Usuario Name', max_length=120)   
    Contraseña = models.CharField(max_length=300)
    email_address = models.EmailField('Email Address')

def __str__(self):
  return self.nombreUsuario
      
class ImagenGalleria(models.Model):
    autor = models.ForeignKey('Usuario.nombreUsuario')
    image = models.ImageField(upload_to='static/img/')
    nombreimagen = models.CharField(max_length=120)
    Criatura = models.CharField(max_length=120)



def publish(self):
    self.published_date = timezone.now()
    self.save()
 
def __str__(self):
    return self.title

class Meta:
    permissions = (
        ('userVip',_('Es usuario VIP')),
        ('usuario',_('Es usuario')),
    )
