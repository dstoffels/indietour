# Generated by Django 4.0.4 on 2022-09-07 19:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0003_remove_user_username_alter_user_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.CharField(default='dan', max_length=255),
            preserve_default=False,
        ),
    ]
