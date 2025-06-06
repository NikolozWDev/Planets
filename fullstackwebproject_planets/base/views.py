from django.shortcuts import render, redirect, get_object_or_404
from .models import PlanetInfo


def home(request, pk=None):

    if pk is None:
        return redirect('planet-filtered', pk='MERCURY')

    planet = get_object_or_404(PlanetInfo, titlename=pk)
    planets = PlanetInfo.objects.all()

    # if planet is None:
    #     return render(request, '404.html', status=404)

    context = {
        'filtered_planet': planet,
        'planets': planets,
    }
    return render(request, 'home.html', context)