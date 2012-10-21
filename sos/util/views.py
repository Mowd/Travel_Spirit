# -*- encoding: utf8 -*-
from django.http import HttpResponse, HttpRequest
from django.conf import settings
import urllib
import simplejson


def _get_database():
    import pymongo
    conn = pymongo.Connection(host='140.115.50.85')
    db_ = conn.test_database
    db_.authenticate('user', '')
    return db_

def get_image(request):
    '''Get image given url. Return swan.jpg if image not exist.'''
    db_ = _get_database()
    import gridfs
    fs_ = gridfs.GridFS(db_)
    if 'url' not in request.GET:
        fp_ = fs_.get_last_version(filename='test')
    else:
        try:
            fp_ = fs_.get_last_version(filename=request.GET['url'])
        except:
            fp_ = fs_.get_last_version(filename='test')
    try: 
        width = int(request.GET.get('width'))
        height = int(request.GET.get('height'))
    except:
        width, height = None, None
    if width is None or height is None:
        return HttpResponse(fp_.read(), content_type='image/jpg')
    else:
        from PIL import Image, ImageOps
        image = Image.open(fp_)
        if image.size[0] >= image.size[1]:
            left, top = (image.size[0] - width)/2, (image.size[1] - height)/2
            image = ImageOps.fit(image, (width, height,), method=Image.ANTIALIAS)
        else:
            image.thumbnail((height, height))
        response = HttpResponse(content_type='image/jpg')
        image.save(response, "JPEG")
        return response

def _get_places(request):
    page = int(request.GET.get("page", 1))
    per_page = int(request.GET.get("per_page", 9))
    db_ = _get_database()
    ipeen = db_.test_ipeen
    travel = db_.travel_network
    query = {'images': {'$exists': True},
             'latitude': {'$gt': 0.0},
             'longitude': {'$gt': 0.0}}

    search = request.GET.get("search")
    if search is not None:
        query['title'] = {'$regex': u'.*%s.*' % (search), '$options': u'i'}

    lat = float(request.GET.get("lat", 0.0))
    lng = float(request.GET.get("lng", 0.0))
    if lat != 0.0 and lng != 0.0:
        query['loc'] = {'$near': [lat, lng]}

    tag = request.GET.get("tag")
    if tag is not None:
        query['tag_list'] = [tag]

    cursor = ipeen.find(query, sort=[('score', -1)]).skip((page - 1) * per_page).limit(per_page)
    results = []
    for i in cursor:
        img = i['images'][0]
        results.append({'place_id': str(i['_id']),
                        'title': i['title'].split(u'\r\n')[0],
                        'image': settings.SITE_ROOT + 'util/get_image?width=300&height=200&url=%s' % urllib.quote(img),
                        'snippet': ', '.join([i.split('(')[0] for i in i['tags']])})
    return results

def get_popular_places(request):
    results = _get_places(request)
    return HttpResponse(simplejson.dumps(results))

def get_place(request):
    id_ = request.GET.get('_id', '507c4a87431e070683b786b1')
    db_ = _get_database()
    import bson
    ipeen = db_.test_ipeen
    added_place = db_.added_place
    num = added_place.find({"place_id": id_}).count()
    if num != 0:
        place_added = "true"
    else:
        place_added = "false"
    place = ipeen.find_one(bson.ObjectId(id_))
    req = HttpRequest()
    req.GET['lat'] = place['loc'][0]
    req.GET['lng'] = place['loc'][1]
    if 'snippets' in place:
        snippets = place['snippets'][:15]
    else:
        snippets = None
    result = {'title': place['title'].split(u'\r\n')[0],
              'place_id': id_,
              'address': place['address'],
              'phone': place['phone'],
              'mrt': place.get('mrt', None), #捷運資訊
              'holiday': place.get('holiday', None), #公休日
              'office_hour': place.get('office_hour', None), #開放時間
              'shop_info': place.get('shop_info', None), #營業資訊
              'media_report': place.get('media_report', None), #媒體情報
              'avg_price': place.get('avg_price', None), #消費價位
              'capacity': place.get('capacity', None), #席位
              'media_suggest': place.get('media_suggest', None), #媒體推薦
              'tag_list': place['tag_list'],
              'stay_time': round(place['stay_time']*2)/2,
              'lat': place['loc'][0],
              'lng': place['loc'][1],
              'images': [settings.SITE_ROOT + 'util/get_image?url=%s' % urllib.quote(i) for i in set(place['images'])],
              'nearbys': _get_places(req),
              'place_added': place_added,
              'snippets': snippets,
              }
    return HttpResponse(simplejson.dumps(result))

def add_place(request, place_id):
    db_ = _get_database()
    added_place = db_.added_place
    num = added_place.find({"place_id": place_id}).count()
    if num == 0:
        added_place.insert({'place_id': place_id})
    return HttpResponse("true")

def delete_place(request, place_id):
    db_ = _get_database()
    added_place = db_.added_place
    added_place.remove({'place_id': place_id})
    return HttpResponse("true")

