from django.db import models

# Create your models here.


class Todo(models.Model):

    title = models.CharField(max_length=30, blank=True)
    content = models.TextField(blank=True)
    is_completed = models.BooleanField(null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
