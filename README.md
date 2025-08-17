# What is this

This is a personal website, ready to be deployed with port-forwarding, 
wight from you PC.

## How to deploy

### Set up port forwarding

For windows.
1. cmd
2. ipconfig
3. Find your local IP
4. Set up a rule for IP-forwarding on you router
   5. Select a port to be exposed
   6. Match Internal port with Django's (waitress) port
   7. Use TCP
6. Set up Address Reservation, so that if IP of your PC (WIFI adapter) changes, it still works
   7. Detect MAC address of you WIFI (Network) adapter with ipconfig /all
   8. In router settings use "Address Reservation"
   9. Set MAC address and IP, as it currently is for your WIFI (network) adapter

### Generate new SECRET_KEY for settings.py

From your project’s virtualenv, run:
```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Insert this into settings.py SECRET_KEY.

DO NOT PUSH CURRENT SECRET_KEY

### Make sure admin-panel is disabled

Comment or remove in urls.py in web_site