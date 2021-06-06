web: gunicorn ongakubackend.wsgi:application --log-file -
python manage.py collectstatic --noinput
manage.py migrate
