from django.shortcuts import render

# Create your views here.


def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

def contact(request, *args, **kwargs):
    return render(request, 'frontend/contact.html')

def about(request, *args, **kwargs):
    return render(request, 'frontend/about.html')