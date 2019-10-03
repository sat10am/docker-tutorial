#!/bin/sh

# Collect static files
echo "Collect static files"
python ./todo/manage.py collectstatic --noinput

# Apply database migrations
echo "Apply database migrations"
python ./todo/manage.py migrate

# Start server
echo "Starting server"
cd ./todo && gunicorn --bind 0.0.0.0:8000 todo.wsgi:application
