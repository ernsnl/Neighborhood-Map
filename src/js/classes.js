var Link = function(type, name, icon, cb, id) {
    this.type = type;
    this.filter_text = name;
    this.font_icon = icon;
    this.cb = cb;
    this.id = id;
}



var Location = function(name, lat, lng, ctg, fav) {
    this.name = name;
    this.lng = lng;
    this.lat = lat;
    this.ctg = ctg;
    this.fav = fav;
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
    var currentInfoWindow = "<div class='info-section'><div class='info-header'>" + self.name + "</div>%TAB%#INFO#</div>";
    var navContent = '<ul class="nav nav-tabs">';
    var infoContent = '<div class="tab-content">'
    switch (self.ctg) {
        case 1:
            //For the bars
            //Yelp, Facebook, Foursquare, Twitter
            var links = ['yelp', 'facebook', 'foursquare', 'twitter'];
            var navElement = '';
            var infoElement = '<div id="'+self.name + '_' + 'info" class="tab-pane fade in active">#AJAX_INFO#</div>';
            navElement += '<li class="active"><a data-toggle="tab" href="#' + self.name + '_' + 'info"><i class="fa fa-info" aria-hidden="true"></i></a></li>';

            links.forEach(function(el) {
                navElement += '<li><a onclick="getYelpInfo(' + self.lat + ',' + self.lng + ',' + '\'' + self.name + '\'' + ');" data-toggle="tab" href="#' + self.name + '_' + el + '"><i class="fa fa-' + el + '" aria-hidden="true"></i></a></li>';
                infoElement += '<div id="'+self.name + '_' + el+ '" class="tab-pane fade">#AJAX_INFO#</div>';
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
            break;
        case 3:
            // For Museums
            // Facebook, Foursquare, Twitter, Tripadvisor, Wiki
            break;
        case 4:
            // For Theatres
            //Yelp, Facebook, Foursquare, Twitter
            break;
        default:
            alert('Unidentified Selection')
    }
    return currentInfoWindow;
};

var getFacebookInfo = function() {

};

var getYelpInfo = function(lat, lng, name) {
    alert(name + " YELP!");
};

var getTripAdsivorInfo = function() {

};

var getWikiInfo = function() {

};

var getTwitterInfo = function() {

};

Location.prototype.getFourSquareInfo = function() {

};
