# Generated by Django 2.2.7 on 2019-12-01 15:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enciclopedia', '0005_auto_20191201_1140'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='imagen',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
