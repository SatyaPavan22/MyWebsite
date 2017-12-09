$(document).ready(function() {
	$(".nav").hide();
	
		$(function () {
		$(window).scroll(function () {
			var scrollPos = $(this).scrollTop();
            
			if ( scrollPos > 730) {
				$('.nav').fadeIn();
			} else {
				$('.nav').hide();
			}
			
			$(".myNavbar a").each(function(){
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				var top = refElement.position().top;
				var bottom = refElement.position().top + refElement.height();
				//console.log("top "+Math.round(top));
				//console.log("bottom "+Math.round(bottom));
				//console.log("scrollPos "+scrollPos);
				if (Math.round(top) <= Math.round(scrollPos)+1 && Math.round(bottom) > Math.round(scrollPos)) {
					//console.log("Entered");
				$('.myNavbar a').removeClass("active");
				currLink.addClass("active");
				//console.log(currLink);
        }
        else{
            currLink.removeClass("active");
        }
			});
		});

	
	});
	
$(".nav a,a[href='#profile']").on('click', function(event) {

  if (this.hash !== "") {
    event.preventDefault();
	var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 700, function(){

      window.location.hash = hash;
      });
    } 
  });
  
  $(".animate-up").each(function(){
	    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
	console.log("wintop "+winTop);
	console.log("pos "+pos);
    if (pos > winTop + 800) {
      $(this).addClass("slide");
    }  
  });
  
});