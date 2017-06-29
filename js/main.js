/* Navigation scroll */
'use strict';
$(function(){
    /* For the sticky navigation */
    $('.trigger-sticky-nav').waypoint(function(direction) {
        if (direction == "down") {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    }, {
      offset: '150px;'
    });
    
   
    //smooth scroll to anchor
    $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

    
    /*slider*/
    
    //configuration
    var width = 1200;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
    
    //cache DOM
    var $heroSlider = $('#hero-slider');
    var $slideContainer = $heroSlider.find('.hero-slides');
    var $heroSlides = $slideContainer.find('.hero-slide')
    
    var interval;
    
    function startSlider(){
        interval = setInterval(function(){
            //animate margin-left
            $slideContainer.animate({'margin-left': '-=' +width}, animationSpeed,function(){
                currentSlide++;
                 //if it's last slide, go to position 1(0px)
                if(currentSlide === $heroSlides.length){
                    currentSlide = 1;
                    $slideContainer.css('margin-left', '0');
                }
            });
        }, pause);
    }
    
    function stopSlider(){
        clearInterval(interval);
    }
   
    $heroSlider
     //listen for mouseenter and pause  
        .on('mouseenter', stopSlider)
    //resume on mouseleave
        .on('mouseleave', startSlider);
    
    startSlider();
    
    //init lazyload plugin
    $("img.lazy").lazyload({
        effect : "fadeIn",
    });
    
  
    
    var mobileMenu = function(){
        var menuIcon = $('.site-header-menu-icon');
        menuIcon.on('click', function(){
            menuIcon.toggleClass('site-header-menu-icon-close-x');
            $('.site-header-menu-content').toggleClass('site-header-menu-content-is-visible');
            $('.site-header').toggleClass('site-header-is-expanded');
       });
   }
    mobileMenu();
    
});




    