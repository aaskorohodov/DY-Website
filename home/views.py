from django.views.generic import TemplateView


class Home(TemplateView):
    """Home page"""

    template_name = 'home/base.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)

        context['title'] = 'DY home'

        return context
