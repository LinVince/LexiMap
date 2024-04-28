from django.db import models

# Create your models here.
class Vocab(models.Model):
    text = models.CharField(max_length=64)
    type = models.CharField(max_length=64)
    definition = models.CharField(max_length=2048)
    origin = models.CharField(max_length=64)
    longitude = models.FloatField()
    latitude = models.FloatField()

    def __str__(self):
        return f"{self.origin} {self.text}"

class Prompt(models.Model):
    text = models.CharField(max_length=1024)

    def __str__(self):
        return self.text

