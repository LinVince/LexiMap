from django.contrib import admin
from .models import Vocab, Prompt
# Register your models here.

class VocabAdmin(admin.ModelAdmin):
    list_display = ('text', 'type', 'origin', 'longitude','latitude')
    list_filter = (['origin'])

admin.site.register(Vocab, VocabAdmin)

class PromptAdmin(admin.ModelAdmin):
    list_display = ['text']

admin.site.register(Prompt, PromptAdmin)