# Generated by Django 4.1.7 on 2023-03-31 13:58

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("bands", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Tour",
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
                (
                    "name",
                    models.CharField(
                        error_messages={"unique": "Name must be unique."},
                        max_length=255,
                    ),
                ),
                ("notes", models.TextField(blank=True, default="")),
                ("is_archived", models.BooleanField(default=False)),
                (
                    "band",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="bands.band"
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="TourUser",
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
                (
                    "banduser",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="bands.banduser"
                    ),
                ),
                (
                    "tour",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="tours.tour"
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.AddField(
            model_name="tour",
            name="users",
            field=models.ManyToManyField(through="tours.TourUser", to="bands.banduser"),
        ),
    ]
