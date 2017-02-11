// Topkapi Place 41.0115° N, 28.9834° E
// İstanbul Archaeology Museums 41.0117° N, 28.9813° E
// Ataturk Cultural Center 41.0367° N, 28.9876° E
// Nevizade 41.034748 N, 28.977575 E
// Nusr'et 41.0805° N, 29.0335° E
// Sakip Sabanci Museum 41.1061° N, 29.0557° E
// Rahmi M. Koc Museum 41.0428° N, 28.9492° E
// Kafe Pi 41.0466° N, 29.0073° E
// Mujdat Gezen Theatre 40.9901° N, 29.0286° E
// Basilica Cistern 41.0084° N, 28.9779° E
var ExistingLocations = [
    new Location('Topkapi Palace', '41.0115', '28.9834', 3, false, 'Ottoman Empire Palace between 1453-1923', 1),
    new Location('İstanbul Archaeology Museums', '41.0117', '28.9813', 3, true, 'Artificats from Turkey located in here', 2),
    new Location('Ataturk Cultural Center', '41.0367', '28.9876', 4, true, 'Old Cultural Center located in Taksim', 3),
    new Location('Nevizade', '41.034748', '28.977575', 1, true, 'Located in Taksim', 4),
    new Location('Nusr-et', '41.0805', '29.0335', 2, false, 'Salt Bae Restaurant', 5),
    new Location('Sakip Sabanci Museum', '41.1061', '29.0557', 3, false, 'Art museum', 6),
    new Location('Rahmi M. Koc Museum', '41.0428', '28.9492', 3, true, 'Great place to visit if you have kids', 7),
    new Location('Kafe Pi', '41.0466', '29.0073', 2, false, 'Have some drinks. Usual place for meet-ups', 8),
    new Location('Mujdat Gezen Theatre', '40.9901', '29.0286', 4, false, 'Legendary artists theatre', 9),
    new Location('Basilica Cistern', '41.0084', '28.9779', 2, true, 'Old drinking water distribution system', 10)
];

var existingFilters = [
    new Link('click', 'Refresh', 'refresh', function() {
        ExistingLocations.forEach(function(el) {
            el.marker.setOpacity(1);
        });
    }),
    new Link('select', 'Name', 'search', function() {
        //Add CB;
    }, 'searh-places'),
    new Link('click', 'Bars', 'beer', function() {
        ExistingLocations.forEach(function(el) {
            if (el.ctg == 1) {
                el.marker.setOpacity(1);
            } else {
                el.marker.setOpacity(0.3);
            }
        });
    }),
    new Link('click', 'Restaurants', 'cutlery', function() {
        ExistingLocations.forEach(function(el) {
            if (el.ctg == 2) {
                el.marker.setOpacity(1);
            } else {
                el.marker.setOpacity(0.3);
            }
        });;
    }),
    new Link('click', 'Museums/Exhibits', 'university', function() {
        ExistingLocations.forEach(function(el) {
            if (el.ctg == 3) {
                el.marker.setOpacity(1);
            } else {
                el.marker.setOpacity(0.3);
            }
        });;
    }),
    new Link('click', 'Cinemas/Theatres', 'film', function() {
        ExistingLocations.forEach(function(el) {
            if (el.ctg == 4) {
                el.marker.setOpacity(1);
            } else {
                el.marker.setOpacity(0.3);
            }
        });;
    }),
    new Link('click', 'Favorites', 'star', function() {
        ExistingLocations.forEach(function(el) {
            if (el.fav) {
                el.marker.setOpacity(1);
            } else {
                el.marker.setOpacity(0.3);
            }
        });
    })
];



function FiltersViewModel() {
    var self = this;
    self.filters = existingFilters;
    self.chosenFilter = ko.observable();
    self.applyFilter = function(filter) {
        filter.cb();
    }
    self.locations = ko.observable(ExistingLocations);
    self.selectedLocation = ko.observable();
    self.selectedLocation.subscribe(function(newValue) {
        allMarkers.forEach(function(element) {
            if (element instanceof google.maps.Marker)
                element.setAnimation(null);
        });

        allInfoWindows.forEach(function(element) {
            if (element instanceof google.maps.InfoWindow)
                element.close();
        });

        if (newValue instanceof Location) {
            newValue.makeItBounce();
        }
    });
}

ko.applyBindings(new FiltersViewModel());
