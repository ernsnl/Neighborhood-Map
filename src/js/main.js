var existingFilters = [
    new Link('input', 'Name', 'search', function() {
        //Add CB;
    }, 'searh-places'),
    new Link('click', 'Bars', 'beer', function() {
        //;
    }),
    new Link('click', 'Restaurants', 'cutlery', function() {
        //;
    }),
    new Link('click', 'Museums/Exhibits', 'university', function() {
        //;
    }),
    new Link('click', 'Cinemas/Theatres', 'film', function() {
        //alert(this.type);
    }),
    new Link('click', 'Favorites', 'star', function() {
        //alert(this.type);
    })
]

function FiltersViewModel() {
    var self = this;
    self.filters = existingFilters;
}

ko.applyBindings(new FiltersViewModel());
