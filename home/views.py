
from django.views.generic import TemplateView

from web_site.settings import MEDIA_URL


class Home(TemplateView):
    """Home page"""

    template_name = 'home/home-content.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)

        context['title'] = 'DY home'
        context['MEDIA_URL'] = MEDIA_URL

        return context
