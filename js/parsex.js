function receiveMessage(event)
{
        //alert(event.data);
	document.getElementById("expr").value = event.data;
	recalculateDiff();
	something();
        if (event.origin !== "http://127.0.0.1:8081/plot.html")
                return;

        }
window.addEventListener("message", receiveMessage, false);


var pW = window.parent; 

function something() {
	var der = [];
	der[0] = document.getElementById('diff').innerHTML;
	der[1] = document.getElementById('diffsec').innerHTML;
	//console.log(der);
	pW.postMessage(der, "http://127.0.0.1:8081/plot.html");
	}
