/* Navigation scroll */
'use strict';
$(function(){
    /* For the sticky navigation */
    $('.trigger-sticky-nav').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '150px;'
    });
    
   
    //scroll to sections
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
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
   
});

    