$(document).ready(function(){

    $('#nav-services').click(function() {
	    $('html, body').animate({
    		scrollTop: $("#services").offset().top
		}, 1000);
	});

	$('#nav-about').click(function() {
	    $('html, body').animate({
    		scrollTop: $("#about").offset().top
		}, 1000);
	});

	$('#nav-team').click(function() {
	    $('html, body').animate({
    		scrollTop: $("#team").offset().top
		}, 1000);
	});

	$('#nav-work').click(function() {
	    $('html, body').animate({
    		scrollTop: $("#work").offset().top
		}, 1000);
	});

	$('#nav-contact').click(function() {
	    $('html, body').animate({
    		scrollTop: $("#contact").offset().top
		}, 1000);
	});

	$('.go-top').click(function() {
	    $('html, body').animate({
    		scrollTop: $("#top").offset().top
		}, 1000);
	});

	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	});

});

// $(document).on('scroll', function (e) {
//     $('.navbar').css('opacity', ($(document).scrollTop() / 1000));
// });

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        $('.navbar').css('opacity', ($(document).scrollTop() / 350));
    }
    else {
        var myElement = document.querySelector(".navbar");
		    myElement.style.opacity = "0.83";
    }
    if (window.scrollY > 150) {
        document.querySelector(".company-name").style.visibility = 'visible';
    }
    else {
        document.querySelector(".company-name").style.visibility = 'hidden';
    }
},false);
