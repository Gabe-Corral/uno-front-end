# Generated by Django 3.1.7 on 2021-06-02 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_auto_20210531_2145'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='password',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
