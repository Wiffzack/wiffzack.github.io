/*  created by Henry Zhang
    coded at 12/Jun/2019    */

//artwork: trench by twenty one pilots
// var imgUrl = "https://henryz.cc/canvas/tilting-3d-card/img/top-vulture-yellow.jpg"
var card = document.getElementById("logo");
updateReflection(10,0)


window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;
  // Do stuff with the new orientation data
}


window.addEventListener("mousemove", (event)=>{
    let mouseX = event.clientX
    let mouseY = event.clientY
    let halfWidth = window.innerWidth/8
    let halfHeight = window.innerHeight/8 
    let xdeg = (mouseX - halfWidth)/halfWidth;
    let ydeg = (mouseY - halfHeight)/halfHeight;	
    //let xdeg = (mouseX)/halfWidth;
    //let ydeg = (mouseY)/halfHeight;
    updateReflection(ydeg * 180, xdeg * 100)
    card.style.transform = `rotateX(${ydeg * 10}deg) rotateY(${xdeg * 10}deg)`;
})


if(window.DeviceMotionEvent){
  window.addEventListener("devicemotion", motion, false);
}else{
  console.log("DeviceMotionEvent is not supported");
}


function motion(event){
  console.log("Accelerometer: "
    + event.accelerationIncludingGravity.x + ", "
    + event.accelerationIncludingGravity.y + ", "
    + event.accelerationIncludingGravity.z
  );
}


window.ondevicemotion = function(event) {
	var accelerationX = event.accelerationIncludingGravity.x;
	var accelerationY = event.accelerationIncludingGravity.y;
	var accelerationZ = event.accelerationIncludingGravity.z;

  
  console.log(`${accelerationX},${accelerationY},${accelerationZ}`)
    let xdeg = accelerationX/2;
    let ydeg = accelerationY/2;
    updateReflection(ydeg * 180+45, xdeg * 100+45)
    card.style.transform = `rotateX(${ydeg * 20}deg) rotateY(${xdeg * 20}deg)`;
}


function updateReflection(degree,percentage){
    card.style.background = `linear-gradient(${degree}deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0.5) ${percentage}%,rgba(255,255,255,0) 100%),`
    card.style.backgroundSize = "cover"
}
