from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import TodoSerializer
from .models import Todo


class TodoList(APIView):
    def get(self, request):
        queryset = Todo.objects.all()
        serializer = TodoSerializer(queryset, many=True)
        return Response(serializer.data)


class TodoDetail(APIView):
    def get(self, request, pk):
        todo = Todo.objects.get(pk=pk)
        serializer = TodoSerializer(todo)
        return Response(serializer.data)
