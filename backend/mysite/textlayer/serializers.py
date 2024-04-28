from rest_framework import serializers
from .models import Vocab, Prompt

# Update serializer after migration to update the API 

class VocabSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vocab
        fields = ["text", "type","definition", "origin", "longitude", "latitude"]

class PromptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prompt
        fields = ["text"]