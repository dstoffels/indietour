# Generated by Django 4.1.7 on 2023-03-30 19:57

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Contact",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("phone", models.CharField(blank=True, max_length=20)),
                ("email", models.CharField(blank=True, max_length=255)),
                ("notes", models.TextField(blank=True)),
            ],
        ),
    ]
