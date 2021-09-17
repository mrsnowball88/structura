$(document).ready(function(){

  $("header nav ul").after("<div id='mmenu'>");
	$("header nav ul").clone().appendTo("#mmenu");
	$("#mmenu").mmenu({
		extensions:["pagedim-black","fx-menu-slide", "position-right","shadow-page"],
		navbar: {title:''},
		pageScroll 	: {
			scroll 		: true,
			update		: true
		}
	} );


	var mmAPI = $("#mmenu").data( "mmenu" );
	$(".toggle-mnu").click(function() {
		mmAPI.open();
	});
	mmAPI.bind('close:start', function (argument) {
		$(".toggle-mnu").removeClass("on");
	})
	mmAPI.bind('open:start', function (argument) {
		$(".toggle-mnu").addClass("on");
	})

    $('.slider__body').slick({
        dots: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
  });