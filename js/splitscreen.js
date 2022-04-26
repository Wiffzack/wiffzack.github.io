const left = document.querySelector(".left");
const right = document.querySelector(".right");
const mid = document.querySelector(".mid");
const container = document.querySelector(".container");


function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

//function closewindow() {
//	var refreshIntervalId = setInterval(function () {
//	container.classList.remove("hover-left");
//	container.classList.remove("hover-right");
//	}, 4000);
//}
//closewindow();

function closewindow() {
	sleep(6000).then(() => {
	        container.classList.remove("hover-left");
	        container.classList.remove("hover-right");
		document.getElementById("mid").style.visibility='visible';
		//clearInterval(refreshIntervalId);
	        //window.open("darksun.html","_self")
	});
}

left.addEventListener("mouseenter", () => {
  closewindow() ;
  document.getElementById("mid").style.visibility='hidden';
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  document.getElementById("mid").style.visibility='visible';
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  closewindow() ;
  document.getElementById("mid").style.visibility='hidden';
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  document.getElementById("mid").style.visibility='visible';
  container.classList.remove("hover-right");
});

mid.addEventListener("mouseenter", () => {
  //right.style.visibility='hidden';	
  container.classList.add("hover-mid");
   //container.classList.add("hover-left"); 
});

mid.addEventListener("mouseleave", () => {
  //right.style.visibility='visible';	
  //container.classList.remove("hover-mid");
  //container.classList.remove("hover-left");
});
