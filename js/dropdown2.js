document.getElementsByClassName("chat-box")[0].style.visibility="hidden";$("html").click(function(a){if(!$(a.target).hasClass("btn")||!$(a.target).hasClass("chat-box"))document.getElementsByClassName("chat-box")[0].style.visibility="hidden",document.getElementsByClassName("btn")[0].style.visibility="visible"});
document.getElementById("btn").addEventListener("click",function(){document.getElementById("chat-box").style.visibility="visible";document.getElementsByClassName("btn")[0].style.visibility="hidden"});
