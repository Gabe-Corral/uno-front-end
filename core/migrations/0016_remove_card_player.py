# Generated by Django 3.1.7 on 2021-06-16 21:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0015_game_winner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='card',
            name='player',
        ),
    ]
