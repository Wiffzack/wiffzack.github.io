function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}


if(inIframe()){
var wn = document.getElementById('frameit').contentWindow;

document.addEventListener("DOMContentLoaded", function(event){
	var elem = document.getElementById('pressit');
	elem.addEventListener('click', something);

});

function something() {
	wn.postMessage(document.getElementById('eq').value, "http://127.0.0.1:8081/ableiten.html");
	}

}
function receiveMessage(event)
{
	//alert(event.data);
	//document.getElementById("expr").value = event.data;
	var der = event.data[0];
	var dersec = event.data[1];
	drawderivation(der,dersec);
	//alert(der);
	if (event.origin !== "http://127.0.0.1:8081/ableiten.html")
                return;

        }
window.addEventListener("message", receiveMessage, false);	
