


function ready() {
var options = {
          rememberUpgrade:true,
          transports: ['polling'],
          secure:true, 
	  forceNew: true,
	  reconnectionAttempts: 3,
          rejectUnauthorized: false
              }

var socket = io.connect("http://127.0.0.1:5001",options);

socket.emit("leave", {});
var chat = "message",
    meno = "#myMessage",
    togglev = !1;
var username=getCookie("username");
	
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
	
document.querySelector('.chat-box').style.display = 'none';	
if (getCookie("username"))
{
	document.querySelector('.chat-box').style.display = 'block';	
}
	
	
	$("#send").on("click", (function() {
    togglev ? socket.send(username+": "+$("#myMessage").val()) : (text = username+": "+$("#myMessage").val(), socket.emit("event", {
        msg: text
    }));
    $("#myMessage").val("")
}));

function decodestr(a) {
    a = atob(a);
    a = a.split("").map((function(a) {
        return a.charCodeAt(0)
    }));
    a = new Uint8Array(a);
    a = pako.inflate(a);
    return a = String.fromCharCode.apply(null, new Uint16Array(a))
}

function decodestr2(a) {
    return string = LZString.decompress(a)
}
$(document).ready((function() {
    socket.on("message", (function(a) {
        msgr = decodestr2(a);
        $("#messages").append("<li>" + msgr + "</li>")
    }));
    socket.on("event", (function(a) {
        msgr = decodestr2(a);
        $("#messages").append("<li>" + msgr + "</li>")
    }));
    $("#myMessage").keyup((function(a) {
        13 === a.keyCode && $("#send").click()
    }));
    $(".chat-closed").on("click", (function(a) {
        $(".chat-header,.chat-content").removeClass("hide");
        $(this).addClass("hide")
    }));
    $(".chat-header").on("click", (function(a) {
        $(".chat-header,.chat-content").addClass("hide");
        $(".chat-closed").removeClass("hide")
    }));
    $("#on").on("change", (function() {
        this.checked && contochat()
    }))
}));

function contochat() {
    (togglev = !togglev) ? socket.emit("joined", {}): socket.emit("leave", {})
};
}
document.addEventListener("DOMContentLoaded", ready);

