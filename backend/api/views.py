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
def GetDescriptiveStatistics(request):
    data = request.data

    col = data.get('col')
    data = data.get('data')

    try:
        df = pd.DataFrame(data)
    except Exception as e:
        return Response({'message': f'Invalid JSON data: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)
    
    desc_df = df[col].describe()
    json = desc_df.to_json()

    return Response({'data': json}, status=status.HTTP_200_OK)
    

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
        return Response({'message': f'Invalid JSON data: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)

    final_df = df.groupby(by=col)[col].size().reset_index(name='count')
    json = final_df.to_json(orient='records')

    return Response({'data':json}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def ScatterPlot(request):
    data = request.data.get('data')
    col1 = data.get('col1')
    col2 = data.get('col2')
    data = data.get('data')

    try:
        df = pd.DataFrame(data)
    except Exception as e:
        return Response({'message': f'Invalid JSON data {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)
    

    final_df = df[[col1, col2]]
    json = final_df.to_json()

    return Response({'data': json}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def BarChart(request):
    data = request.data
    json = data.get('data')
    base_col = data.get('base_col')
    group_col = data.get('group_col')
    value = data.get('value')

    try:
        df = pd.DataFrame(json)
    except Exception as e:
        return Response({'message': f'Invalid JSON Data : {str(e)}'})

    if value == 'count':
        final_df = df.groupby(by=group_col)[base_col].count().reset_index()
        final_df.columns = [group_col, value]
    elif value == 'mean':
        final_df = df.groupby(by=group_col)[base_col].mean().reset_index()
        final_df.columns = [group_col, value]
    else:
        return Response({'message': 'Invalid value parameter. Use "mean" or "count"'}, status=status.HTTP_400_BAD_REQUEST)
    
    return Response({'data': final_df.to_json()}, status=status.HTTP_200_OK)

    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def LineChart(request):
    data = request.data
    json = data.get('data')
    col = data.get('col')
    date = data.get('date')

    try:
        df = pd.DataFrame(json)
    except Exception as e:
        return Response({'message': f'Invalid JSON Data: {str(e)}'})
    
    df[date] = pd.to_datetime(df[date], errors='coerce')
    df[date] = df[date].dt.strftime('%Y-%m-%d')
    
    final_df = df.groupby(date)[col].sum().reset_index()

    return Response({'data': final_df.to_json()}, status=status.HTTP_200_OK)