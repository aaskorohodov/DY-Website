"""
WSGI config for web_site project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os

from web_site import settings
from whitenoise import WhiteNoise
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'web_site.settings')

application = get_wsgi_application()
application = WhiteNoise(application)

application.add_files(settings.MEDIA_ROOT, prefix="media/")
