from django.conf.urls import patterns, include, url
import os
from django.conf import settings

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

media_root = os.path.join(settings.CODE_ROOT, 'web', 'media/')
urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'sos.views.home', name='home'),
    # url(r'^sos/', include('sos.foo.urls')),
    url(r'^util/get_image', 'util.views.get_image'),
    url(r'^util/get_popular_places', 'util.views.get_popular_places'),
    url(r'^util/get_place', 'util.views.get_place'),
    url(r'^util/add_place/(?P<place_id>[\w]+)/$', 'util.views.add_place'),
    url(r'^util/delete_place/(?P<place_id>[\w]+)/$', 'util.views.delete_place'),
    url(r'^$', 'web.views.index'),
    url(r'^lucky/$', 'web.views.lucky'),
    url(r'^location/$', 'web.views.location'),
    url(r'^place/(?P<place_id>[\w]+)/$', 'web.views.place'),
    url(r'^route/$', 'web.views.route'),
    url(r'^result/$', 'web.views.result'),

    (r'^media/(?P<path>.*)$', 'django.views.static.serve',
              {'document_root': media_root, 'show_indexes': True},),
    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
