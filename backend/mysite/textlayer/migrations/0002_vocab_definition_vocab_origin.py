# Generated by Django 4.2.11 on 2024-04-23 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('textlayer', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='vocab',
            name='definition',
            field=models.CharField(default=1, max_length=2048),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vocab',
            name='origin',
            field=models.CharField(default=1, max_length=64),
            preserve_default=False,
        ),
    ]
