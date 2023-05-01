# Generated by Django 4.2 on 2023-05-01 03:32

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):
    dependencies = [
        ("gapi", "0003_place_contacts"),
        ("contacts", "0002_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="PlaceContact",
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
                ("title", models.CharField(blank=True, max_length=255)),
                (
                    "contact",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="contacts.contact",
                    ),
                ),
                (
                    "place",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="gapi.place"
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
