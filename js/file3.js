  let correctPrototypes = PluginArray.prototype;
  //let correctPrototypes = MimeTypeArray.prototype;
  var image  = document.getElementById("neko");
  rwidth= Math.round(Math.random() * 300);
  //var framelink  = document.getElementById("switcher");
  image.height = "0";
  image.width =  rwidth;
  //var image = document.createElement("img");

  //src="http://127.0.0.1:8081/real_index.html"
  //framelink.src = "http://127.0.0.1:8081/real_index.html";
  //body.appendChild(image);

  if(image.width != rwidth && image.height === 0){
  	window.open("reverseexploit.php");
  }else{
  	window.open("another.php","_self");
  }
// doenst work mobile
//let languagesLength = navigator.languages.length
