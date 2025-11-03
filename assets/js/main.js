jQuery(function ($) {
    'use strict';
	
	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 350){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "1199"
	});

        window.addEventListener("scroll", () => {
            const navbar = document.querySelector(".custom-navbar");
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        });

	// Others Option For Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});
	
	// Button Hover JS
	$('.default-btn')
	.on('mouseenter', function(e) {
		var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
		$(this).find('span').css({top:relY, left:relX})
	})
	.on('mouseout', function(e) {
		var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
		$(this).find('span').css({top:relY, left:relX})
	});

	// Home Slides
	$('.home-slides').owlCarousel({
		loop: true,
		nav: true,
		rtl: true,
		dots: false,
		autoplayHoverPause: false,
		autoplay: false,
		autoHeight:true,
		items: 1,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		]
	});

	// Expect Slides
	$('.expect-slides').owlCarousel({
		loop: true,
		nav: true,
		rtl: true,
		dots: false,
		margin: 25,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			1200: {
				items: 5
			}
		}
	});

	// Testimonial Slides
	$('.testimonial-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		rtl: true,
		margin: 25,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			1200: {
				items: 4
			}
		}
	});
	$('.testimonial-slides-two').owlCarousel({
		loop: true,
		nav: true,
		rtl: true,
		dots: false,
		margin: 25,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
	});

	// Partner Slides
	$('.partner-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		rtl: true,
		smartSpeed: 500,
		margin: 30,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			1200: {
				items: 5
			}
		}
	});

	// Count Time 
	function makeTimer() {
		var endTime = new Date("September 30, 2024 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 300);
	
	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Count Time 
	function makeTimer() {
		var endTime = new Date("December 30, 2024 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 0);

	// Subscribe form
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} 
		else {
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} 
		else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}
	// AJAX MailChimp
	$(".newsletter-form").ajaxChimp({
		url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});

	// Input Plus & Minus Number JS
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	// Products Details Image Slides
	$('.products-details-image-slides').slick({
		dots: true,
		speed: 500,
		fade: false,
		slide: 'li',
		rtl: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		prevArrow: false,
		nextArrow: false,
		responsive: [{
			breakpoint: 800,
			settings: {
				arrows: false,
				centerMode: false,
				centerPadding: '40px',
				variableWidth: false,
				slidesToShow: 1,
				dots: true
			},
			breakpoint: 1200,
			settings: {
				arrows: false,
				centerMode: false,
				centerPadding: '40px',
				variableWidth: false,
				slidesToShow: 1,
				dots: true
			}
		}],
		customPaging: function (slider, i) {
			return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
		}
	});

	// WOW Animation JS
	if($('.wow').length){
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	}

	// Go to Top
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 600) $('.go-top').addClass('active');
		if (scrolled < 600) $('.go-top').removeClass('active');
	});  
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});
	
	// Preloader
	jQuery(window).on('load',function(){
		jQuery(".preloader").fadeOut(500);
	});

	// Buy Now Btn
	$('body').append("<a href='https://themeforest.net/checkout/from_item/33849203?license=regular&support=bundle_6month&_ga=2.48357473.634514020.1646539215-1425290503.1590986634' target='_blank' class='buy-now-btn'>Buy Now</a>");

	// Switch Btn
	$('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");
        
}(jQuery));

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('plonk_rtl_theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('plonk_rtl_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('plonk_rtl_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();




//      owl carousel code started here
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    // autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
})


// 

// function startcount (el){
// 	let goal = el.dataset.goal;
// 	let count = setInterval(()=>{
// 	  el.textContent++;
// 	  if(el.textContent == goal){
// 		clearInterval(count);
// 	  }
// 	},2000/goal)
//   }
//   startcount(document.querySelectorAll(".nums .purecounter"));

// add btn
const addbtn = document.querySelector(".add");
const input = document.querySelector("#number-ids");
function addinput(){
	const name=document.createElement("input");
	name.type="text";
	name.placeholder ="الرجاء ادخال الاسم"
	const phonenmber= document.createElement("input");
	phonenmber.type="number";
	name.placeholder ="الرجاء ادخال رقم الهاتف"
	const btn= document.createElement("a");
	btn.className ="delete";
	btn.innerHTML = "&item";

	const flex =document.createElement("div");
	flex.className ="flex";

	input.appendChild(flex);
	flex.appendChild(name);
	flex.appendChild(phonenmber);
	flex.appendChild(btn);

}
addbtn.addEventListener("click",addinput);
  // ================== WhatsApp Floating Button Script ==================
  document.addEventListener("DOMContentLoaded", function () {
    const phoneNumber = "966500000000"; // ← ضع رقمك الدولي بدون +
    const message = "مرحبًا، أريد الاستفسار عن الخدمة."; // الرسالة المسبقة
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    const link = document.getElementById("whatsapp-link");
    link.href = whatsappLink;
  });
  const chatBtn = document.getElementById('chatbot-btn');
  const chatBox = document.getElementById('chatbot-box');

  chatBtn.addEventListener('click', () => {
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
  });