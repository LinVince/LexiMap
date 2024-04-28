from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .serializers import VocabSerializer, PromptSerializer
from django.shortcuts import render
from .models import Vocab, Prompt
from services import openai_api

# Create your views here.
class VocabApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]
    
    def get(self, request, *args, **kwargs):
        data = Vocab.objects.all()
        serializer = VocabSerializer(data, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

class PromptApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    def get(self, request, *arg, **kwargs):
        data = Prompt.objects.all()
        serailizer = PromptSerializer(data, many=True)

        return Response(serailizer.data, status=status.HTTP_200_OK)
    
class OpenAiApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    def post(self, request, *arg, **kwargs):
        prompt = request.data.get('prompt', 'not found')
        response = openai_api.Request(prompt)

        return Response({'response':response})