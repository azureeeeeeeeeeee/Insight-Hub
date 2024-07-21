from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='get-routes'),
    path('data/', views.GetAllData, name='get-all-datas'),
    path('data/view/<str:pk>/', views.GetData, name='get-datas'),
    path('data/add/', views.AddData, name='add-data'),

    path('data/process/doughnut/', views.DoughnutChart, name='doughnut-chart'),
    path('data/process/scatter/', views.ScatterPlot, name='scatter-plot'),
    path('data/process/bar/', views.BarChart, name='bar-chart'),
    path('data/process/descriptive/', views.GetDescriptiveStatistics, name='descriptive-statistics'),

    path('data/delete/<str:pk>/', views.DeleteData, name='add-data'),
]