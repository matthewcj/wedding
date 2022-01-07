
$(window).on("load", function(){
	// pageloader
	$(".pageloader").fadeOut(700);

	// Home Section Slideshow
	let slideIndex = $(".slide.active").index();
	const slideLen = $(".slide").length;

	function slideShow(){
		$(".slide").removeClass("active").eq(slideIndex).addClass("active");
		if(slideIndex == slideLen-1){
			slideIndex = 0;
		}
		else{
			slideIndex++;
		}
		setTimeout(slideShow, 4000);
	}
	slideShow();


	// audio
	$(".fa.fa-music").click(function(){
		if($(this).hasClass("pause")){
			$("#myAudio")[0].play();
			console.log("music is playing");
		}
		else{
			$("#myAudio")[0].pause();
			console.log("music is pausing");
		}
		$(this).toggleClass("pause");
	})

});






$(document).ready(function(){

	// nav toggle
	$(".hamburger-btn").click(function(){
		$(".header .nav").slideToggle();
	})
	$(".header .nav a").click(function(){
		if($(window).width() < 768){
			$(".header .nav").slideToggle();
		}
	})




	// fixed header
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$(".header").addClass("fixed");
		}
		else{
			$(".header").removeClass("fixed");
		}
	})



	// scroll it
	$.scrollIt({
		topOffset: -50
	});





	// people filter
	peopleFilter($(".filter-btn.active").attr("data-target"))
	$(".filter-btn").click(function(){
		if(!$(this).hasClass("active")){
			peopleFilter($(this).attr("data-target"))
		}
	})
	function peopleFilter(target){
		$(".filter-btn").removeClass("active");
		$(".filter-btn[data-target='"+target+"']").addClass("active");
		$(".people-item").hide();
		$(".people-item[data-category='"+target+"']").fadeIn();
	}


	// gallery popup
	const wHeight = $(window).height();
	$(".gallery-popup .gp-img").css("max-height", wHeight + "px");

	let itemIndex = 0;
	const totalGalleryItems = $(".gallery-item").length;

	$(".gallery-item").click(function(){
		itemIndex = $(this).index();
		$(".gallery-popup").addClass("open");
		$(".gallery-popup .gp-img").hide();
			gpSlideShow();
	})


	// next button
	$(".gp-controls .next").click(function(){
		if(itemIndex == totalGalleryItems-1){
			itemIndex = 0;
		}
		else{
			itemIndex++;
		}
		$(".gallery-popup .gp-img").fadeOut(function(){
			gpSlideShow();
		})
	})


	// prev button
	$(".gp-controls .prev").click(function(){
		if(itemIndex == 0){
			itemIndex = totalGalleryItems-1;
		}
		else{
			itemIndex--;
		}
		$(".gallery-popup .gp-img").fadeOut(function(){
			gpSlideShow();
		})
	})

	// for the img count
	function gpSlideShow(){
		const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
		$(".gallery-popup .gp-img").fadeIn().attr("src", imgSrc);
		$(".gp-counter").text((itemIndex+1) +"/"+ totalGalleryItems);
	}

	// close button
	$(".gp-close").click(function(){
		$(".gallery-popup").removeClass("open");
	})


	// hide gallery popup when clicked outside of the img
	$(".gallery-popup").click(function(event){
		if($(event.target).hasClass("open")){
			$(".gallery-popup").removeClass("open");
		}
	})
});
