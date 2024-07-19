from rest_framework import serializers
from data.models import Profile, Data
from django.contrib.auth.models import User
import os

class DataSerializer(serializers.ModelSerializer):
    filename = serializers.SerializerMethodField()
    class Meta:
        model = Data
        fields = '__all__'
    
    def get_filename(self, obj):
        return os.path.basename(obj.data.path)

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'