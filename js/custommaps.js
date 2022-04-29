function getCookie(b) {
    b = ("; " + document.cookie).split("; " + b + "=");
    if (2 == b.length) return b.pop().split(";").shift()
}
for (var locations = Array(arrayObjects.length), i = 0; i < locations.length; i++) locations[i] = Array(2);
for (i = 0; i < arrayObjects.length; i++) locations[i][0] = arrayObjects[i.toString()].lat, locations[i][1] = arrayObjects[i.toString()].lng;
InitMap();

function InitMap() {
    var b = new google.maps.Map(document.getElementById("map"), {
            zoom: 13,
            center: new google.maps.LatLng(48.210033, 16.363449),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }),
        d = new google.maps.InfoWindow,
        c, a;
    for (a = 0; a < locations.length; a++) c = new google.maps.Marker({
        position: new google.maps.LatLng(locations[a][0], locations[a][1]),
        map: b
    }), google.maps.event.addListener(c, "click", function(a, c) {
        return function() {
            d.setContent(locations[c][0]);
            d.open(b, a)
        }
    }(c, a))
};
