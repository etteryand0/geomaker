from django.shortcuts import render
from django.http import HttpResponse

import json

def generate(request, start_point, scale):
    response = json.dumps([{start_point:scale}])

    return HttpResponse(response, content_type='text/json')