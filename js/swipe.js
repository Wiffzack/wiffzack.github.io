var swiper = {

    touchStartX: 0,
    touchEndX: 0,
    touchStartY: 0,
    touchEndY: 0,
    minSwipePixels: 30,
    detectionZone: undefined,
    swiperCallback: function() {},

    init: function (detectionZone, callback) {
        swiper.swiperCallback = callback
        detectionZone.addEventListener('touchstart', function (event) {
            swiper.touchStartX = event.changedTouches[0].screenX;
            swiper.touchStartY = event.changedTouches[0].screenY;

        }, false);
        detectionZone.addEventListener('touchend', function (event) {
            swiper.touchEndX = event.changedTouches[0].screenX;
            swiper.touchEndY = event.changedTouches[0].screenY;
            swiper.handleSwipeGesture();
        }, false);
    },

    handleSwipeGesture: function () {
        var direction,
            moved
        if (swiper.touchEndY >= swiper.touchStartY) {
            moved = swiper.touchEndY - swiper.touchStartY
            direction = "up"
                if(moved > 200){
                window.open("http://127.0.0.1:8081/newsfeed.php");
                }

        }
        if (swiper.touchEndY <= swiper.touchStartY) {
            moved = swiper.touchStartY - swiper.touchEndY
            direction = "down"
                if(moved > 200){
                window.open("escape.html");
                //alert("down");
                }

        }
        if (swiper.touchEndX <= swiper.touchStartX) {
            moved = swiper.touchStartX - swiper.touchEndX
            direction = "left"
		if(moved > 200){
		window.open("http://127.0.0.1:8081/flashcards.html", "_self");
		//window.open("http://127.0.0.1:8081/getshopping.php", "_self");
		//alert("left");
		}
        }
        if (swiper.touchEndX >= swiper.touchStartX) {
            moved = swiper.touchEndX - swiper.touchStartX
            direction = "right"
                if(moved > 200){
		window.open("http://127.0.0.1:8081/fullcalendar/index.html", "_self");
                //alert("right");
                }

        }
        if (moved > swiper.minSwipePixels && direction !== "undefined") {
            swiper.swipe(direction, moved)
        }
    },

    swipe: function (direction, movedPixels) {
        var ret = {}
        ret.direction = direction
        ret.movedPixels = movedPixels
        swiper.swiperCallback(ret)
    }
}


//var gestureZone = document.getElementById('container');
var gestureZone = document;
swiper.init(gestureZone, function(e) {
    console.log(e)
})


//document.getElementById("thislittleshit").addEventListener("click", outiframe());

function outiframe(){
	window.open("tool.php", "_top")
}

/// gyroscope starts here !!!
//
///
//
////


