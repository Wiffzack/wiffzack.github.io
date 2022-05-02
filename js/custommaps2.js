function getCookie(b) {
    b = ("; " + document.cookie).split("; " + b + "=");
    if (2 == b.length) return b.pop().split(";").shift()
}

function InitMap() {
var map = L.map('map').setView([48.210033, 16.36344], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
for (i = 0; i < arrayObjects.length; i++) {
  L.marker([ arrayObjects[i][0],  arrayObjects[i][1]).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();
}
};

InitMap();
