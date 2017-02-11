var Link = function(type, name, icon, cb, id) {
    this.type = type;
    this.filter_text = name;
    this.font_icon = icon;
    this.cb = cb;
    this.id = id;
}

var Location = function(name, lat, lng, ctg, fav, info, id) {
    this.id = id;
    this.name = name;
    this.lng = lng;
    this.lat = lat;
    this.ctg = ctg;
    this.fav = fav;
    this.info = info;
    this.marker = null;
    this.infoWindow = null;
};

Location.prototype.makeItBounce = function() {

};

Location.prototype.setMarker = function(marker) {
    this.marker = marker;
};

Location.prototype.setInfoWindow = function(infoWindow) {
    this.infoWindow = infoWindow;
};


Location.prototype.getInfo = function() {
    var self = this;
    var links = ['facebook'];
    var currentInfoWindow = "<div class='info-section'><div class='info-header'>" + self.name + "</div>%TAB%#INFO#</div>";
    var navContent = '<ul class="nav nav-tabs">';
    var infoContent = '<div class="tab-content">'
    switch (self.ctg) {
        case 1:
            //For the bars
            //Yelp, Facebook, Foursquare, Twitter
            //var links = ['yelp', 'facebook', 'foursquare', 'twitter'];
            var navElement = '';
            var infoElement = '<div id="' + self.id + '_' + 'info" class="tab-pane fade in active"><p>' + self.info + '</p></div>';
            navElement += '<li class="active"><a data-toggle="tab" href="#' + self.id + '_' + 'info"><i class="fa fa-info" aria-hidden="true"></i></a></li>';

            links.forEach(function(el) {
                navElement += '<li><a onclick="getSpecificInfo(' + '\'' + el + '\'' + ',' + self.lat + ',' + self.lng + ',' + '\'' + self.name + '\'' + ',' + self.id + ');" data-toggle="tab" href="#' + self.id + '_' + el + '"><i class="fa fa-' + el + '" aria-hidden="true"></i></a></li>';
                infoElement += '<div id="' + self.id + '_' + el + '" class="tab-pane fade">#AJAX_INFO#</div>';
            });
            navContent += navElement;
            navContent += '</ul>';
            infoContent += infoElement;
            infoContent += '</div>';
            currentInfoWindow = currentInfoWindow.replace('%TAB%', navContent);
            currentInfoWindow = currentInfoWindow.replace('#INFO#', infoContent);
            break;
        case 2:
            // For the Restaurants
            //Yelp, Facebook, Foursquare, Twitter, Tripadvisor
            //var links = ['yelp', 'facebook', 'foursquare', 'twitter', 'tripadvisor'];
            var navElement = '';
            var infoElement = '<div id="' + self.id + '_' + 'info" class="tab-pane fade in active"><p>' + self.info + '</p></div>';
            navElement += '<li class="active"><a data-toggle="tab" href="#' + self.id + '_' + 'info"><i class="fa fa-info" aria-hidden="true"></i></a></li>';

            links.forEach(function(el) {
                navElement += '<li><a onclick="getSpecificInfo(' + '\'' + el + '\'' + ',' + self.lat + ',' + self.lng + ',' + '\'' + self.name + '\'' + ',' + self.id + ');" data-toggle="tab" href="#' + self.id + '_' + el + '"><i class="fa fa-' + el + '" aria-hidden="true"></i></a></li>';
                infoElement += '<div id="' + self.id + '_' + el + '" class="tab-pane fade">#AJAX_INFO#</div>';
            });
            navContent += navElement;
            navContent += '</ul>';
            infoContent += infoElement;
            infoContent += '</div>';
            currentInfoWindow = currentInfoWindow.replace('%TAB%', navContent);
            currentInfoWindow = currentInfoWindow.replace('#INFO#', infoContent);
            break;
        case 3:
            // For Museums
            // Facebook, Foursquare, Twitter, Tripadvisor, Wiki
            //var links = ['foursquare', 'facebook', 'twitter', 'tripadvisor', 'wikipedia-w'];
            var navElement = '';
            var infoElement = '<div id="' + self.id + '_' + 'info" class="tab-pane fade in active"><p>' + self.info + '</p></div>';
            navElement += '<li class="active"><a data-toggle="tab" href="#' + self.id + '_' + 'info"><i class="fa fa-info" aria-hidden="true"></i></a></li>';

            links.forEach(function(el) {
                navElement += '<li><a onclick="getSpecificInfo(' + '\'' + el + '\'' + ',' + self.lat + ',' + self.lng + ',' + '\'' + self.name + '\'' + ',' + self.id + ');" data-toggle="tab" href="#' + self.id + '_' + el + '"><i class="fa fa-' + el + '" aria-hidden="true"></i></a></li>';
                infoElement += '<div id="' + self.id + '_' + el + '" class="tab-pane fade">#AJAX_INFO#</div>';
            });
            navContent += navElement;
            navContent += '</ul>';
            infoContent += infoElement;
            infoContent += '</div>';
            currentInfoWindow = currentInfoWindow.replace('%TAB%', navContent);
            currentInfoWindow = currentInfoWindow.replace('#INFO#', infoContent);
            break;
        case 4:
            // For Theatres
            //Yelp, Facebook, Foursquare, Twitter
            //var links = ['yelp', 'facebook', 'foursquare', 'twitter'];
            var navElement = '';
            var infoElement = '<div id="' + self.id + '_' + 'info" class="tab-pane fade in active"><p>' + self.info + '</p></div>';
            navElement += '<li class="active"><a data-toggle="tab" href="#' + self.id + '_' + 'info"><i class="fa fa-info" aria-hidden="true"></i></a></li>';

            links.forEach(function(el) {
                navElement += '<li><a onclick="getSpecificInfo(' + '\'' + el + '\'' + ',' + self.lat + ',' + self.lng + ',' + '\'' + self.name + '\'' + ',' + self.id + ');" data-toggle="tab" href="#' + self.id + '_' + el + '"><i class="fa fa-' + el + '" aria-hidden="true"></i></a></li>';
                infoElement += '<div id="' + self.id + '_' + el + '" class="tab-pane fade">#AJAX_INFO#</div>';
            });
            navContent += navElement;
            navContent += '</ul>';
            infoContent += infoElement;
            infoContent += '</div>';
            currentInfoWindow = currentInfoWindow.replace('%TAB%', navContent);
            currentInfoWindow = currentInfoWindow.replace('#INFO#', infoContent);
            break;
        default:
            alert('Unidentified Selection')
    }
    return currentInfoWindow;
};

var getSpecificInfo = function(type, lat, lng, name, id) {
    $.ajax({
        url: '/APIRequest',
        method: 'GET',
        dataType: 'json',
        data: {
            type: type,
            lat: lat,
            lng: lng,
            name: name
        },
        success: function(response) {
            console.log(response);
            if (type == 'facebook') {
                var ajax_info = '';
                ajax_info += '<p class="info-name">' + response.name + '</p>';
                ajax_info += '<p class="info-main-category"><strong>Main Category: </strong>' + response.category + '</p>';
                if (response.category_list.length > 0) {
                    ajax_info += '<p class="info-sub-category"><span>Sub Category: </span>#SUBC#</p>';
                    var sub = '';
                    response.category_list.forEach(function(el) {
                        sub += '<small>' + el.name + '</small>, ';
                    });
                    sub = sub.substring(0, sub.length - 1);
                    ajax_info = ajax_info.replace('#SUBC#', sub);
                }
                $('#' + id + '_' + type).html(ajax_info);
            }
        }
    });

    /*$.ajax(
      {
        url: 'https://graph.facebook.com/search?center=' + lat + ',' + lng,
        method: 'GET',
        dataType: 'json',
        data:{
          q: encodeURI(name),
          type: 'place',
          //center: lat + ',' + lng,
          distance: 5000,
          access_token:appToken
        },
        success:function(response){
          console.log(response);
        }
      }
    );*/
};
