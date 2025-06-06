from django.db import models


class PlanetInfo(models.Model):
    titlename = models.CharField(max_length=64)
    content1 = models.TextField(max_length=1024)
    content2 = models.TextField(max_length=1024)
    content3 = models.TextField(max_length=1024)
    source = models.TextField(max_length=500)
    planetimage1 = models.FileField(upload_to='planet_images/')
    planetimage2 = models.FileField(upload_to='planet_images/')
    planetimage3 = models.FileField(upload_to='planet_images/')
    button1content = models.TextField(max_length=32)
    button2content = models.TextField(max_length=32)
    button3content = models.TextField(max_length=32)
    button4content = models.TextField(max_length=32, default="Default button 4 text")
    animationcolor = models.CharField(max_length=64)