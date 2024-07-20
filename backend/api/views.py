from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .seralizers import DataSerializer, ProfileSerializer
from data.models import Profile, Data
import pandas as pd


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
    data['user'] = request.user.id
    data['data'] = request.FILES.get('data')
    serializer = DataSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Data added'}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def GetAllData(request):
    data = Data.objects.filter(user=request.user)
    serializer = DataSerializer(data, many=True)
    return Response({'data': serializer.data}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def GetData(request, pk):
    data = Data.objects.get(id=pk)

    if data.user != request.user:
        return Response({'message': 'what are you doing here ?'}, status=status.HTTP_401_UNAUTHORIZED)
    
    try:
        df = pd.read_csv(data.data.path)
        json = df.to_json(orient='records')
    except Exception as e:
        return Response({'message': f'Error processing CSV file: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    return Response({'data': json}, status=status.HTTP_200_OK)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def DeleteData(request, pk):
    data = Data.objects.get(id=pk)

    if data.user != request.user:
        return Response({'message': 'what are you doing here ?'}, status=status.HTTP_401_UNAUTHORIZED)
    
    data.delete()

    return Response({'message': 'data deleted'}, status=status.HTTP_204_NO_CONTENT)
    

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def DoughnutChart(request):
    data = request.data
    data = data.get('data')
    col = data.get('column')
    json_data = data.get('data')

    try:
        df = pd.DataFrame(json_data)
    except Exception as e:
        return Response({'message': f'Invalid JSON data: f{str(e)}'}, status=status.HTTP_400_BAD_REQUEST)

    final_df = df.groupby(by=col)[col].size().reset_index(name='count')
    json = final_df.to_json(orient='records')

    return Response({'data':json}, status=status.HTTP_200_OK)

    