from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .seralizers import DataSerializer, ProfileSerializer
from data.models import Profile, Data

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def getRoutes(request):
    routes = [
        'GET /api/'
    ]

    return Response(routes)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def AddData(request):
    data = request.data
    data['user'] = request.user
    data['data'] = request.FILES.get('data')
    serializer = DataSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Data added'}, status=status.HTTP_200_OK)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def GetAllData(request):
    data = Data.objects.filter(user=request.user)
    serializer = DataSerializer(data, many=True)
    return Response({'data': serializer.data}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def GetData(request, pk):
    data = Data.objects.filter(id=pk)

    if data.user != request.user:
        return Response({'message': 'what are you doing here ?'}, status=status.HTTP_401_UNAUTHORIZED)
    
    serializer = DataSerializer(data, many=False)
    return Response({'data': serializer.data}, status=status.HTTP_200_OK)
    
