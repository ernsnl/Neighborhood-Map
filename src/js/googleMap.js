var map, allMarkers = [], allInfoWindows = [];

function mapInit() {
    var istanbul = {
        lat: 41.0082,
        lng: 28.9784
    };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: istanbul,
        styles: [{
                "elementType": "labels",
                "stylers": [{
                        "visibility": "off"
                    },
                    {
                        "color": "#f49f53"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "stylers": [{
                        "color": "#f9ddc5"
                    },
                    {
                        "lightness": -7
                    }
                ]
            },
            {
                "featureType": "road",
                "stylers": [{
                        "color": "#813033"
                    },
                    {
                        "lightness": 43
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [{
                        "color": "#645c20"
                    },
                    {
                        "lightness": 38
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [{
                        "color": "#1994bf"
                    },
                    {
                        "saturation": -69
                    },
                    {
                        "gamma": 0.99
                    },
                    {
                        "lightness": 43
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#f19f53"
                    },
                    {
                        "weight": 1.3
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi.business"
            },
            {
                "featureType": "poi.park",
                "stylers": [{
                        "color": "#645c20"
                    },
                    {
                        "lightness": 39
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "stylers": [{
                        "color": "#a95521"
                    },
                    {
                        "lightness": 35
                    }
                ]
            },
            {},
            {
                "featureType": "poi.medical",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#813033"
                    },
                    {
                        "lightness": 38
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
                "elementType": "labels"
            },
            {
                "featureType": "poi.sports_complex",
                "stylers": [{
                        "color": "#9e5916"
                    },
                    {
                        "lightness": 32
                    }
                ]
            },
            {},
            {
                "featureType": "poi.government",
                "stylers": [{
                        "color": "#9e5916"
                    },
                    {
                        "lightness": 46
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit.line",
                "stylers": [{
                        "color": "#813033"
                    },
                    {
                        "lightness": 22
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [{
                    "lightness": 38
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#f19f53"
                    },
                    {
                        "lightness": -10
                    }
                ]
            },
            {},
            {},
            {}
        ]
    });

    google.maps.event.addDomListener(window, "resize", function() {
        google.maps.event.trigger(map, "resize");
        map.setCenter(istanbul);
    });
    setTimeout(AddMarkers(ExistingLocations), 2000);
}

function AddMarkers(list) {
    allMarkers = [];
    allInfoWindows = [];
    list.forEach(function(element, index) {
        var latLng = new google.maps.LatLng(element.lat, element.lng);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: 'kappa.png_large'
        });

        var infowindow = new google.maps.InfoWindow({
            content: ''
        });

        allMarkers.push(marker);
        allInfoWindows.push(infowindow);

        element.makeItBounce = function() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        };

        element.setMarker(marker);
        element.setInfoWindow(infowindow);
        element.infoWindow.setContent(element.getInfo());

        infowindow.addListener('closeclick', function() {
            element.marker.setAnimation(null);
        });

        marker.addListener('click', function() {
            allInfoWindows.forEach(function(infoW) {
                infoW.close();
            });
            allMarkers.forEach(function(m){
              m.setAnimation(null);
            });
            element.infoWindow.open(map, marker);
            element.makeItBounce();
        });


    });
}
