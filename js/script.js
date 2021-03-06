(function($) {
  // Start of use strict
  "use strict";

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 50) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // chart

  var frontend = AmCharts.makeChart("frontend", {
    "type": "radar",
    "hideCredits": true,
    "dataProvider": [{
      "skill": "HTML",
      "knowledge": 80
    }, {
      "skill": "CSS",
      "knowledge": 65
    }, {
      "skill": "JS",
      "knowledge": 60
    }, {
      "skill": "Jquery",
      "knowledge": 65
    }, {
      "skill": "Ajax",
      "knowledge": 70
    }],
    "valueAxes": [{
      "axisTitleOffset": 20,
      "minimum": 0,
      "axisAlpha": 0.15,
      "unit": "%"
    }],
    "startDuration": 2,
    "graphs": [{
      "balloonText": "[[category]]: [[value]] %",
      "bullet": "round",
      "lineThickness": 2,
      "valueField": "knowledge"
    }],
    "categoryField": "skill"
  });
  var backend = AmCharts.makeChart("backend", {
    "type": "radar",
    "hideCredits": true,
    "dataProvider": [{
      "skill": "PHP",
      "knowledge": 80
    }, {
      "skill": "Symfony",
      "knowledge": 80
    }, {
      "skill": "Laravel / CodeIgniter / Zend",
      "knowledge": 65
    }, {
      "skill": "Java / Java EE",
      "knowledge": 50
    }, {
      "skill": "NodeJS / Python",
      "knowledge": 45
    }],
    "valueAxes": [{
      "axisTitleOffset": 20,
      "minimum": 0,
      "axisAlpha": 0.15,
      "unit": "%"
    }],
    "startDuration": 2,
    "graphs": [{
      "balloonText": "[[category]]: [[value]] %",
      "bullet": "round",
      "lineThickness": 2,
      "valueField": "knowledge"
    }],
    "categoryField": "skill"
  });

// portfolio gallery
  $('.owl-carousel').owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    autoHeight:true,
    nav: true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });

  // Magnific popup calls
  // $('.popup-gallery').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   tLoading: 'Loading image #%curr%...',
  //   mainClass: 'mfp-img-mobile',
  //   gallery: {
  //     enabled: true,
  //     navigateByImgClick: true,
  //     preload: [0, 1]
  //   },
  //   image: {
  //     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
  //   }
  // });
})(jQuery); // End of use strict
