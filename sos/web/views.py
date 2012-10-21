from django.http import HttpResponse, HttpRequest
import pymongo
import simplejson
import urllib

from django.shortcuts import render_to_response
from django.template import Template, context, RequestContext
from django.conf import settings

from util import views as util_views

def add_constants(request):
    return {
        'SITE_ROOT': settings.SITE_ROOT,
        'MEDIA_URL': settings.MEDIA_URL,
    }

def index(request):
    data = {}
    return render_to_response('index.html', data,
                              context_instance=RequestContext(request))

def lucky(request):
    data = {}
    return render_to_response('lucky.html', data,
                              context_instance=RequestContext(request))

def location(request):
    data = {}
    return render_to_response('location.html', data,
                              context_instance=RequestContext(request))

def place(request, place_id):
    req = HttpRequest()
    req.GET['_id'] = place_id
    result = util_views.get_place(req)
    result = simplejson.loads(result.content)
    
    data = {
      "title": result['title'],
      "place_id": result['place_id'],
      'address': result['address'],
      'phone': result['phone'],
      'tag_list': result['tag_list'],
      'stay_time': result['stay_time'],
      'lat': result['lat'],
      'lng': result['lng'],
      'images': result['images'],
      'nearbys': result['nearbys'],
      'mrt': result['mrt'],
      'holiday': result['holiday'],
      'office_hour': result['office_hour'],
      'shop_info': result['shop_info'],
      'media_report': result['media_report'],
      'avg_price': result['avg_price'],
      'capacity': result['capacity'],
      'media_suggest': result['media_suggest'],
      'place_added': result['place_added'],
      'snippets': result['snippets'],
    }
    return render_to_response('place.html', data,
                              context_instance=RequestContext(request))

def route(request):
    place_list = []
    req = HttpRequest()
    db_ = util_views._get_database()
    added_place = db_.added_place
    res = added_place.find({})
    for r in res:
      req.GET['_id'] = r['place_id']
      result = util_views.get_place(req)
      result = simplejson.loads(result.content)
      
      data = {
        "title": result['title'],
        "place_id": result['place_id'],
        'address': result['address'],
        'phone': result['phone'],
        'tag_list': result['tag_list'],
        'stay_time': result['stay_time'],
        'lat': result['lat'],
        'lng': result['lng'],
        'images': result['images'][0],
        'nearbys': result['nearbys'],
        'mrt': result['mrt'],
        'holiday': result['holiday'],
        'office_hour': result['office_hour'],
        'shop_info': result['shop_info'],
        'media_report': result['media_report'],
        'avg_price': result['avg_price'],
        'capacity': result['capacity'],
        'media_suggest': result['media_suggest'],
        'place_added': result['place_added'],
      }

      place_list.append(data)

    data = {
      "place_list": place_list,
    }
    return render_to_response('route.html', data,
                              context_instance=RequestContext(request))

def result(request):
    place_list = []
    place_latlng = []
    place_name = []
    req = HttpRequest()
    db_ = util_views._get_database()
    added_place = db_.added_place
    res = added_place.find({})
    for r in res:
      req.GET['_id'] = r['place_id']
      result = util_views.get_place(req)
      result = simplejson.loads(result.content)
      
      data = {
        "title": result['title'],
        "place_id": result['place_id'],
        'address': result['address'],
        'phone': result['phone'],
        'tag_list': result['tag_list'],
        'stay_time': result['stay_time'],
        'lat': result['lat'],
        'lng': result['lng'],
        'images': result['images'][0],
        'nearbys': result['nearbys'],
        'mrt': result['mrt'],
        'holiday': result['holiday'],
        'office_hour': result['office_hour'],
        'shop_info': result['shop_info'],
        'media_report': result['media_report'],
        'avg_price': result['avg_price'],
        'capacity': result['capacity'],
        'media_suggest': result['media_suggest'],
        'place_added': result['place_added'],
      }

      place_list.append(data)
      place_latlng.append("[%f,%f]" % (result['lat'], result['lng']));
      place_name.append("'" + result['title'] + "'");

    data = {
      "place_list": place_list,
      "place_name": "var place_name = [%s]" % ",".join(place_name),
      "place_latlng": "var waypoint = [%s]" % ",".join(place_latlng),
      'place_start': request.GET.get("place_start"),
      'place_end': request.GET.get("place_end"),
      'start_latlng': request.GET.get("start_latlng"),
      'end_latlng': request.GET.get("end_latlng"),
    }
    return render_to_response('result.html', data,
                              context_instance=RequestContext(request))