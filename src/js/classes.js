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
};

Location.prototype.getInfo = function() {
    switch (ctg) {
        case 1:
            //For the bars
            //Yelp, Facebook, Foursquare, Twitter
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
};

Location.prototype.getFacebookInfo = function() {

};

Location.prototype.getYelpInfo = function() {

};

Location.prototype.getTripAdsivorInfo = function() {

};

Location.prototype.getWikiInfo = function() {

};

Location.prototype.getTwitterInfo = function() {

};
