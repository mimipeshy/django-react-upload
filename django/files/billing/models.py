import os

from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class BillerServices(object):
    pass


def upload_path(filename):
    return os.path.join('media')


# def upload_path():
#     return '/'


class BillerServicesUploads(models.Model):
    file_license = models.FileField(blank=True, null=True, upload_to='media/')
    file_signatories = models.FileField(blank=True, null=True, upload_to='media/')
    file_collection = models.FileField(blank=True, null=True, upload_to='media/')
    created_on = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=True
    )
