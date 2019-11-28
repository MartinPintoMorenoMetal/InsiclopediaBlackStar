
from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext as _

 
class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    url = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
 
    def publish(self):
        self.published_date = timezone.now()
        self.save()
    
    def __str__(self):
        return self.title
    
    class Meta:
        permissions = (
            ('administrador',_('Es administrador')),
            ('cliente',_('Es cliente')),
        )

#modelo Base de datos para guardar imagenes 

class Usuario(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    nombresUsuario = models.CharField('Usuario Name', max_length=120)
    apellidoUsuario = models.CharField('Usuario Name', max_length=120)   
    contraseña = models.CharField(max_length=300)
    email_address = models.EmailField('Email Address')

    class Meta:
        permissions = (
            ('admin',_('Es admin')),
            ('duoc.2019',_('Es duoc.2019')),
        )     
       
      
class ImagenGalleria(models.Model): 
    autor = models.ForeignKey(Usuario, related_name='img', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='static/img/')
    nombreimagen = models.CharField(max_length=120)
    criatura = models.CharField(max_length=120)


