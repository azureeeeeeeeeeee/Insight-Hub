from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework import status
from data.models import Profile

# Create your views here.
@api_view(['POST'])
@permission_classes([AllowAny])
def UserRegister(request):
    username = request.data.get('username')
    password = request.data.get('password')
    fullname = request.data.get('fullname')

    user = User.objects.create_user(username=username, password=password)
    user.save()

    Profile.objects.create(
        user=user,
        fullname=fullname
    )

    return Response({'message': 'user registered'}, status=status.HTTP_201_CREATED)