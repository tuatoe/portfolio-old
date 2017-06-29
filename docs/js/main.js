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
    
   
    //scroll to sections
    $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
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
    
    //site mobile menu
    /*class MobileMenu {
        constructor(){
            this.menuIcon = $('.site-header-menu-icon');
            this.menuContent = ('.site-header-menu-content');
            this.events();
        }
        events(){
            this.menuIcon.click(this.toggleTheMenu.bind(this));
        }
        
        toggleTheMenu(){
            this.menuContent.toggleClass('site-header-menu-content-is-visible');
        }
    }
    
     new MobileMenu();
    */
    
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




    