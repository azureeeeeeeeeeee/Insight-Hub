from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.core.exceptions import ValidationError
import os

def validate_data(value):
    ext = os.path.splitext(value.name)[1]
    valid_extentions = ['.csv', '.xls', '.xlsx']
    if not ext.lower() in valid_extentions:
        raise ValidationError('Unsupported file extension. Allowed extensions are: .csv, .xls, .xlsx')


# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    fullname = models.CharField(max_length=150)

    def __str__(self):
        return f"profile of {self.user.username}"
    

class Data(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    data = models.FileField(upload_to='uploads/', validators=[validate_data])
    added = models.DateTimeField(auto_now_add=True)