# Generated by Django 2.2.6 on 2019-11-15 02:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enciclopedia', '0003_post_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.TextField(),
        ),
    ]
