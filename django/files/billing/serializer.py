from django.contrib.auth.models import User
from rest_framework import serializers
from .models import BillerServicesUploads, BillerServices, upload_path


class FileUpload(serializers.ModelSerializer):
    class Meta:
        model = BillerServicesUploads
        fields = '__all__'
