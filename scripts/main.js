$(document).ready(function() {
	$(".nav").hide();
	
		$(function () {
		$(window).scroll(function () {
			var scrollPos = $(this).scrollTop();
            
			if ( scrollPos > 660) {
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
				if (Math.round(top) <= Math.round(scrollPos)+2 && Math.round(bottom) > Math.round(scrollPos)) {
					//console.log("Entered");
				$('.myNavbar a').removeClass("active");
				currLink.addClass("active");
				//console.log(currLink);
        }
        else{
            //currLink.removeClass("active");
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
 /* $(window).scroll(function() {
  $(".animate-up").each(function(){
	    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
	//console.log("wintop "+winTop);
	//console.log("pos "+pos);
    if (pos < winTop + 700) {
      $(this).addClass("slide");
    }  
  });
  });*/
  
  var typing = ["Web Developer","Tech Enthusiast","Innovative"];
  var typingIndex = 0;
  showTyping(typing[typingIndex]); 
  	//$("#cursor-animation").append("I Love ")

  function showTyping(data){
  	  var i=0;
		  var x = setInterval(function(){

		  $("#cursor-animation").append(data.charAt(i));
		  i++;
		  if(i>data.length){
			  clearInterval(x);
			  var y = setInterval(function(){
			  i--;
			  $("#cursor-animation").html("");
		  $("#cursor-animation").html(data.substring(0,i));
		  if(i<1){
			  clearInterval(y);
			  typingIndex++;
			  showTyping(typing[typingIndex%typing.length]);
		  }
		  },75);
			  
		  }
	  },200);
  }
});