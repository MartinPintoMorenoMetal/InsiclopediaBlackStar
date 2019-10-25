from django.db import models
from django.utils import timezone
 
 
class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
 
 class Venue(models.Model):
     nombreUsuario = models.CharField('Venue Name', max_length=120)
     Contraseña = models.CharField(max_length=300)
     zip_code = models.CharField('Zip/Post Code', max_length=12)
     email_address = models.EmailField('Email Address')

def __str__(self):
  return self.nombreUsuario
      





def publish(self):
    self.published_date = timezone.now()
    self.save()
 
def __str__(self):
    return self.title