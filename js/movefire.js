function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

onload = function startAnimation() { 
    var frameHeight = 700; 
    var frames = 23; 
    var frame = 0.36; //0.36	
    var div = document.getElementById("animation");
	sleep(1320).then(() => {
		clearInterval(refreshIntervalId);
		//window.open("darksun.html","_self")
	});
    var refreshIntervalId = setInterval(function () { 
		
        var frameOffset = (++frame % frames) * -frameHeight; 
        div.style.backgroundPosition = frameOffset + "px " + "0px"; 
    }, 55); 
}

