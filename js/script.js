$(document).ready(function() {
	$("body").fadeIn(2000);

$(window).scroll(function () {
     var sc = $(window).scrollTop()
    if (sc > 50) {
        $("#header-sroll").addClass("small")
    } else {
        $("#header-sroll").removeClass("small")
    }
});

$(".img").on("mouseenter", function() {
	$(this).removeClass("darken");	
	});

	$(".img").on("mouseleave", function() {
	$(this).addClass("darken");	
	});

});