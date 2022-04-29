function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function changeFont(element,fontname){
	element.setAttribute("style",element.getAttribute("style")+fontname);
	for(var i=0; i < element.children.length; i++){
		changeFont(element.children[i]);
	}
	sleep(2000).then(() => {
		 event2();
	});

}

function event() {
changeFont(document.getElementsByTagName("body")[0],";font-family: deadspace");
}

function event2() {
document.getElementsByTagName("body")[0].removeAttribute("style");
}

setInterval(event, 4000)
//window.setInterval(event2, 2000);
