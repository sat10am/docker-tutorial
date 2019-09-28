from django.urls import path

from todo_api import views

urlpatterns = [
    path("", views.TodoList.as_view()),
    path("<int:pk>/", views.TodoDetail.as_view()),
]
