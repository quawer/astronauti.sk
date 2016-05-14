/* ========================================================================= */
/*	Instagram init
/* ========================================================================= */
var results = [];
var move = "420px";
var sliderLimit = -750;

$("document").ready(function(){

	var location = $(location).attr('hostname');
	$.ajax({ 'url' : 'https://api.concertian.com/users/events/domain',
		  'method' : 'POST',
			'data' : {
			 		 'domain' : 'quawer.com'
		 		     },
			'contentType' : "application/x-www-form-urlencoded",
		  'success' : function (json){
			  if(json != null){
				appendResults(json);
                  if(json.success = false){
                      emptyelements();
                  }
			  }
			  else{
				emptyelements();
			  }
	  	},
	  	'error': function(error){
	  		console.log('Error. ' + error);
			emptyelements();
	  	}
    });
});
//Json success
function appendResults(json){
	$("#eventsframe").append('<div id="pluginBoxConcertian">'+
					 	'<div id="pluginOuterConcertian"></div>'+
						 '<div class="concertianLogo">'+
					 		'<div class="logo"></div>'+
						 '</div>'+
						 '<div id="left"></div>'+
						 '<div id="right"></div>'+
					 '</div>');
	for(var i = 0; i < json.events.length; i++){
		var value = json.events[i];
        results[length + i] = value;
		var arr = value.stringDate.split('-');

	var pluginresults =
			'<div class="resultElementConcertian">' +
				'<div class="firstPartConcertian">'+arr[1]+'<br>'+arr[2]+'</div>' +
				'<div class="secondPartConcertian">' +
					'<img class="secondPartImgConcertian"' +
						  'src="'+value.imgUrl+'">' +
				'</div>' +
				'<div class="thirdPartConcertian">'+value.eventName+'</div>' +
				'<div class="forthPartConcertian">' +
				'<div class="pluginFormSubmitConcertian">' +
					'<div class="pluginFormSubmitButtonConcertian">VSTUPENKY<input type="hidden" class="pluginFormSubmitHiddenConcertian" value="'+value.id+'"/></div>' +
				'</div>' +
				'</div>' +
			'</div>' +
		'</div>';
	$("#pluginOuterConcertian").append(pluginresults);
}
	//Concertian linking
	$(".logo").on('click', function(){
		window.location = "https://manager.concertian.com";
	});
	$(".pluginFormSubmitButtonConcertian").on('click', function(){
		var eventID = $(this).find(".pluginFormSubmitHiddenConcertian").val();
		var linkUrl = 'https://concertian.com/share.html?' + eventID;

		window.location = linkUrl;
		event.preventDefault();
	});

	// Scroll handeler
	$("#right").mouseenter(function(){
    	var currentPosition = $("#pluginOuterConcertian").position().left;
		if (currentPosition >= sliderLimit){
			$("#pluginOuterConcertian").stop(false,true).animate({left:"-="+move},{ duration: 800});
										   }
	});

	$("#left").mouseenter(function(){
		var currentPosition = $("#pluginOuterConcertian").position().left;
		if (currentPosition < 0) $("#pluginOuterConcertian").stop(false,true).animate({left:"+="+move},{ duration: 800});

	});
}
// Json false
function emptyelements(){
	$("#eventsframe").append('<div id="pluginBoxConcertian">'+
						'<div class="concertianLogo">'+
					 		'<div class="logo"></div>'+
						'</div>'+
					    '<div class="emptyTextConcertian">Žiadne podujatia</div>'+
					 '</div>');
}

function get_hostname(url) {
    var m = url.match(/^http:\/\/[^/]+/);
    return m ? m[0] : null;
}
$("document").ready(function(){
var feed = new Instafeed({
        clientId: 'e1cced6153d04cde9c11b634f888459e',
				accessToken: '3167074670.1677ed0.ce711689e2574d6797eb98fa5b1fe380',
				get: 'user',
        userId: '3167074670',
        template: '<li class="animation" href="{{link}}"><img src="{{image}}" /></li>',
				resolution: 'low_resolution',
    });
    feed.run();
});

/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});

/* ========================================================================= */
/*  Welcome Section Slider
/* ========================================================================= */

$(function() {

    var Page = (function() {

        var //$navArrows = $( '#nav-arrows' ),
            $nav = $( '#nav-dots > span' ),
            slitslider = $( '#slider' ).slitslider( {
                autoplay: true,
                onBeforeChange : function( slide, pos ) {

                    $nav.removeClass( 'nav-dot-current' );
                    $nav.eq( pos ).addClass( 'nav-dot-current' );

                }
            } ),

            init = function() {

                initEvents();

            },
            initEvents = function() {

                //add navigation events
                /*$navArrows.children( ':last' ).on( 'click', function() {

                    slitslider.next();
                    return false;

                } );*/

                /*$navArrows.children( ':first' ).on( 'click', function() {

                    slitslider.previous();
                    return false;

                } );*/

                $nav.each( function( i ) {

                    $( this ).on( 'click', function( event ) {

                        var $dot = $( this );

                        if( !slitslider.isActive() ) {

                            $nav.removeClass( 'nav-dot-current' );
                            $dot.addClass( 'nav-dot-current' );

                        }

                        slitslider.jump( i + 1 );
                        return false;

                    } );

                } );

            };

            return { init : init };

    })();

    Page.init();

});



$(document).ready(function(){
	/* ========================================================================= */
	/*	OrderSeat Handler
	/* ========================================================================= */
	$("#doReservation").on('click', function(){
		$("popup").fadeIn();
	});

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 2000,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});

    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#navigation").removeClass("animated-header");
        } else {
            $("#navigation").addClass("animated-header");
        }
    });

	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */

    // Slider Height
    var slideHeight = $(window).height();

    $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
    });



	$("#works, #testimonial").owlCarousel({
		navigation : true,
		pagination : false,
		slideSpeed : 1100,
		paginationSpeed : 400,
		singleItem:true,
		navigationText: ["<i class='fa fa-angle-left fa-lg'></i>","<i class='fa fa-angle-right fa-lg'></i>"]
	});


	/* ========================================================================= */
	/*	Featured Project Lightbox
	/* ========================================================================= */

	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,

		beforeShow: function () {
			this.title = $(this.element).attr('title');
			this.title = '<h3>' + this.title + '</h3>' + '<p>' + $(this.element).parents('.portfolio-item').find('img').attr('alt') + '</p>';
		},

		helpers : {
			title : {
				type: 'inside'
			},
			overlay : {
				css : {
					'background' : 'rgba(0,0,0,0.8)'
				}
			}
		}
	});

});


/* ==========  START GOOGLE MAP ========== */

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

	    var myLatLng = new google.maps.LatLng(48.1591728,17.1019071);

	    var mapOptions = {
	        zoom: 15,
	        center: myLatLng,
	        disableDefaultUI: true,
	        scrollwheel: false,
	        navigationControl: true,
	        mapTypeControl: false,
	        scaleControl: false,
	        draggable: true,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            featureType: 'water',
            stylers: [{
                color: '#F67513'
            }, {
                visibility: 'on'
            }]
        }, {
            featureType: 'landscape',
            stylers: [{
                color: '#f2f2f2'
            }]
        }, {
            featureType: 'road',
            stylers: [{
                saturation: -100
            }, {
                lightness: 45
            }]
        }, {
            featureType: 'road.highway',
            stylers: [{
                visibility: 'simplified'
            }]
        }, {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#444444'
            }]
        }, {
            featureType: 'transit',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'poi',
            stylers: [{
                visibility: 'off'
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-canvas');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(48.1591728,17.1019071),
        map: map,
		icon: 'img/icons/astronatuti_logo.png',
    });
}

// ========== END GOOGLE MAP ========== //

var wow = new WOW ({
	offset:       75,          // distance to the element when triggering the animation (default is 0)
	mobile:       false,       // trigger animations on mobile devices (default is true)
});
wow.init();
