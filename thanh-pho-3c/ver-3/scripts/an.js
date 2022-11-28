'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
 // set owl-carousel width equals to owl-wrapper width
    // function owlWrapperWidth( selector ) {
    //   $(selector).each(function(){
    //     $(this).find('.owl-carousel').outerWidth( $(this).closest( selector ).innerWidth() );
    //   });
    // }

    // // trigger on start and resize
    // owlWrapperWidth( '.owl-wrapper' );
    // $( window ).resize(function() {
    //   owlWrapperWidth( $('.owl-wrapper') );
    // });
 // $("#slider-to-unlock").slideToUnlock(); 
 function scrool_to_slider(){
  var window_width= $(window).width();
  if(window_width<768){
    $('html,body').animate({
            scrollTop: $(".button-click").offset().top -$(".wrapper-rotate").height() - $(".wrapper-rotate").height()*20/100
    }, 'slow');
  }
}

$(".share-khoanh-khac .info-gift .item ").hover(function(){
    $(".share-khoanh-khac .info-gift .item .info").removeClass("active");
    $(this).find(".info").addClass("active");
  }, function(){
    $(".share-khoanh-khac .info-gift .item .info").removeClass("active");
});


var hoverandclick=1;
 $(".blk-giao-bia-nhanh .inner").hover(function(){
   
   setTimeout(function(){
        
       $(".blk-giao-bia-nhanh .icon").css("left", "63%");
    }, 500);
   setTimeout(function(){
        
        hoverandclick=2;
    }, 1500);
   
   }, function(){
    setTimeout(function(){
        $(".blk-giao-bia-nhanh .icon").css("left", "5%");
     }, 500);
    
 });


function myFunction(){
  hoverandclick+=1;
   if(hoverandclick===2){
    setTimeout(function(){
        $(".blk-giao-bia-nhanh .icon").css("left", "63%");
     }, 700);

    }
    if(hoverandclick===3){
      $(".link-to").trigger('click');;
      hoverandclick=1;
      
      window.open("https://giaobianhanh.com/");
      
      setTimeout(function(){
        
        $(".blk-giao-bia-nhanh .icon").css("left", "5%");
    }, 1000);
    }
};

var SITE_URL = 'http://wowslider.com/';
var owl=$('.spr-slider .gglcs-slider').owlCarousel({
        items:1,
        nav:false,
        loop:true,
        dots:true,
        stagePadding:0,
        margin:0,
        // animateIn: 'zoomIn',
        URLhashListener:false,
        startPosition: 'URLHash',
        autoplayTimeout:3000,
        autoplay:true,
        autoplayHoverPause:true
    });
$(document).ready(function(){
    

    owl.on('changed.owl.carousel', function(event) {
       setTimeout(function(){


         // var activeEls = $('.owl-item.active').eq(1); // .eq(1) to get the "middle image out of 3 actives"
         var currentItem = $(".gglcs-slider .owl-item.active").find(".item").attr("data-hash");

          window.location.hash = currentItem ;
         // $(".spr-slider .owl-item").removeClass("target");
         var data_hash=$(".gglcs-slider .owl-item.active").find(".item").attr("data-hash");
         $(".spr-url-hash .item").removeClass("active");
         $("." + data_hash).addClass("active");

       },1);
     });

});
$(document).ready(function () {  
  $(".spr-url-hash .sanh-an a")[0].click();
}); 


// $('.slider-syncing-1').owlCarousel({
//   loop:true,
//   margin:0,
//   items:1,
//   dots:false,
//   nav:false,
//   URLhashListener:true,
//   autoplay:false,
//   animateIn: 'rotateInDownLeft',
//   // animateIn: 'zoomIn',
//   autoplayTimeout:4000
// })
// $('.slider-syncing-2').owlCarousel({
//   loop:true,
//   margin:0,
//   nav:true,
//   items:1,
//   dots:false,
//   nav:true,
//   center: true,
//   animateIn: 'fadeInLeft',
//   URLhashListener:true,
//   autoplay:false,
//   autoplayTimeout:4000
// })
$('.slider-syncing-3').owlCarousel({
  loop:true,
  margin:0,
  items:1,
  dots:false,
  nav:false,
  URLhashListener:true,
  // autoplay:true,
  // animateIn: 'rotateInDownLeft',
  
    autoplayTimeout:4000
})
$('.slider-syncing-4').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  items:1,
  dots:false,
  nav:true,
  center: true,
  animateIn: 'zoomIn',
  URLhashListener:true,
  // autoplay:true,
  autoplayTimeout:4000
})
  $('.dropdown')
  .dropdown({
    onChange: function(value, text, $selectedItem) {
      $("#main-play").attr('src',value);
      $("#main-play")[0].src += "?autoplay=1";
    setTimeout(function(){ $("#yt").show(); }, 200);
    }
  })

  $(".block-videos .thumb-nail").click(function(){
        $(".block-three-videos .col-md-4").removeClass("active");
        $(this).parent(".col-md-4").addClass("active");
        var data_src=$(this).attr("data-src");
        $("#main-play").attr('src',data_src);

        // $('html,body').animate({
        //     scrollTop: $(".video-star-tv").offset().top
        // }, 'slow');
        $("#main-play")[0].src += "?autoplay=1";
        setTimeout(function(){ $("#yt").show(); }, 200);
        })

  // -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 2.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
// $(document).ready(function() {
//     jQuery("#wowslider-container1").wowSlider({effect:"cube",prev:"",next:"",duration:20*100,delay:10*100,width:830,height:360,autoPlay:false,playPause:false,stopOnHover:false,loop:false,bullets:0,caption:true,captionEffect:"move",controls:true,onBeforeStep:0,images:0});
// });

// $(document).ready(function () {
// var one = 1;
  
//   $(document).on('click', '.blk-kham-pha .slider-syncing-2 .owl-nav .owl-prev', function(){
//         $(".slider-syncing-1").addClass("active");

//           if (one === 1){
//             setTimeout(function(){
//                 $(".blk-kham-pha .slider-syncing-2 .owl-nav .owl-prev").trigger('click');
//                 one += 1;
                
//             }, 3000);
//           }
//           if (one === 2){
//             setTimeout(function(){
//                 $(".blk-kham-pha .slider-syncing-2 .owl-nav .owl-prev").trigger('click');
//                 one += 1;
//             }, 3000);
//           }
//           if (one === 3){
//             setTimeout(function(){
//                 $(".blk-kham-pha .slider-syncing-2 .owl-nav .owl-prev").trigger('click');
//                 one =1;
//             }, 3000);
//           }
//       });
//   });

// $(".button-click").click(function(){
//   var index=$(".slider-url-2").find(".active").index();
//   if(index===1){
   
//     setTimeout(function(){
//       $(".slider-url-1").addClass("active-slider-url");
//         $(".slider-url-2 .item").eq(0).removeClass('active');
//         $(".slider-url-2 .item").eq(1).addClass('active');
//         $(".slider-url-1 .item").eq(0).removeClass('active');
//         $(".slider-url-1 .item").eq(1).addClass('active');
//         $(".button-click").trigger('click');
//         $(".slider-url-1").addClass("active-slider-url");
//     }, 1000);
    
//   }
//   if(index===2){
    
    
//     setTimeout(function(){
//       $(".slider-url-2 .item").eq(1).removeClass('active');
//     $(".slider-url-2 .item").eq(2).addClass('active');
//     $(".slider-url-1 .item").eq(1).removeClass('active');
//     $(".slider-url-1 .item").eq(2).addClass('active');
//         $(".button-click").trigger('click');
//     }, 3000);
    
//   }
//   if(index===3){
//     setTimeout(function(){
//       $(".slider-url-2 .item").eq(2).removeClass('active');
//       $(".slider-url-2 .item").eq(0).addClass('active');
//       $(".slider-url-1 .item").eq(2).removeClass('active');
//       $(".slider-url-1 .item").eq(0).addClass('active');
        
//     }, 3000);
    
//   }
// })

var loopslider=0;
// setTimeout(function(){
//     $(".slider").addClass("next-2");
//     }, 3000);
var deg=0;
$(".click-rotate").click(function(){
  
  scrool_to_slider();
  
  // $(".blk-kham-pha").addClass("disabled");
  $(".click-rotate").addClass("disabled-click");
  // if(loopslider===0){
    setTimeout(function(){
      $(".slider-url-1").addClass("active-slider-url");
      $(".blk-whell").addClass("hidden");
      $(".share-khoanh-khac").addClass("hidden");
      

    //   $(".slider-url .inner-slider-url .item").removeClass("active");
    // $(".slider-url .inner-slider-url .data-hash-cold").addClass("active");
      // $(".slider").addClass("next-2");
      $(".slider-url-1 .item").removeClass("active");
      $(".slider-url-1 .data-hash-cold").addClass("active");

      // $(".slider-url .inner-slider-url .item").removeClass("active");
      // $(".slider-url .inner-slider-url .data-hash-clear").addClass("active");
      // $("#next").trigger('click');
    }, 1500);
    setTimeout(function(){
      $(".slider-url-1").addClass("active-slider-url");
      $(".blk-whell").addClass("hidden");
      $(".share-khoanh-khac").addClass("hidden");

      $(".slider-url .inner-slider-url .item").removeClass("active");
    $(".slider-url .inner-slider-url .data-hash-cold").addClass("active");
      // $("#next").trigger('click');
      $(".slider-url-1 .item").removeClass("active");
      $(".slider-url-1 .data-hash-cold").addClass("active");

      $(".slider-url .inner-slider-url .item").removeClass("active");
      $(".slider-url .inner-slider-url .data-hash-clear").addClass("active");
      deg -=50;
      $(".image-rotate .img").css("transform","rotate("+ deg +"deg)");
    }, 4000);
    setTimeout(function(){
      // $("#next").trigger('click');
      loopslider=1;
      $(".slider-url .inner-slider-url .item").removeClass("active");
      $(".slider-url .inner-slider-url .data-hash-creamy").addClass("active");
      // $(".image-rotate .img").css("transform","rotate(-270deg)");
      deg -=77;
      $(".image-rotate .img").css("transform","rotate("+ deg +"deg)");
    }, 7000);
     setTimeout(function(){
      // $("#next").trigger('click');
      loopslider=1;
      $(".slider-url .inner-slider-url .item").removeClass("active");
      $(".slider-url .inner-slider-url .data-hash-cold").addClass("active");
      $(".share-khoanh-khac").removeClass("hidden")
      $(".slider-url-1").removeClass("active-slider-url");
      $(".button-click").removeClass("disabled");
      $(".blk-whell").removeClass("hidden");
      $(".click-rotate").removeClass("disabled-click");
      // $(".image-rotate .img").css("transform","rotate(0deg)");
      deg -=53;
      $(".image-rotate .img").css("transform","rotate("+ deg +"deg)");
    }, 10000);
    
})
$(document).ready(function(){
  "use strict";
  var offSetTop = 150;
  var $scrollToTopButton = $('.scrollToTop');
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > offSetTop) {
      $("#open-sapporo-nav").addClass("sticky_nav");
      $(".navbar").addClass("fixed-nav");
    } else {
      $("#open-sapporo-nav").removeClass("sticky_nav");
      $(".navbar").removeClass("fixed-nav");
    }
  });
  
  //Click event to scroll to top
  // $scrollToTopButton.click(function(){
  //   $('html, body').animate({scrollTop : 0},800);
  //   return false;
  // });
  
});

// let cube = document.querySelector(".image-cube");
// let btnNext = document.getElementById("next");
// let btnPrev = document.getElementById("prev");

// let pos = 0;

// btnNext.addEventListener("click", () => {
//   pos -= 90;
//   cube.style.transform = `rotateY(${pos}deg)`;
// });
// btnPrev.addEventListener("click", () => {
//   pos += 90;
//   cube.style.transform = `rotateY(${pos}deg)`;
// });


// jQuery(window).resize(function () {
//   // smoke_animation();
//   scrool_to_slider();

// });
// window.addEventListener("resize", function(event) {
//     // smoke_animation();
// })

$('.moment-museum .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


var flake = '<svg width="129.108px" height="140.597px" viewBox="0 0 129.108 140.597" enable-background="new 0 0 129.108 140.597" xml:space="preserve" version="1.1" class="flake"><path fill="#00FFFF" d="M106.491,83.706l17.706,10.222l-4.067,7.046l-17.88-10.324l4.693,17.494l-7.814,2.096l-6.121-22.916l-0.604-2.402L71,72.519v25.01l1.569,1.627l16.848,16.906l-5.688,5.727L71,108.984V129h-8v-20.221l-12.917,12.807l-5.837-5.727l16.849-16.775L63,97.325V72.519L41.371,84.922l-0.79,2.402l-6.14,22.916l-7.823-2.096l4.688-17.494l-17.882,10.324l-4.068-7.046l17.705-10.222L9.566,79.018l2.096-7.823l23.095,6.188l2.223,0.596l21.66-12.505L37.157,53.071l-2.402,0.644l-22.916,6.14l-2.096-7.823l17.495-4.688L9.358,37.019l4.07-7.046l17.71,10.222l-4.678-17.494l7.842-2.096L40.525,43.7l0.669,2.223L63,58.428V33.622l-1.868-1.758L44.247,15.088l5.8-5.727L63,22.168V2h8v19.963L83.748,9.156l5.668,5.727L72.549,31.79L71,33.418v25.01l21.581-12.505l0.517-2.223l6.188-23.095l7.823,2.096l-4.688,17.494l17.705-10.222l4.068,7.046l-17.882,10.324l17.494,4.688l-2.096,7.823l-22.916-6.14l-2.402-0.644L74.911,65.473L96.57,77.979l2.223-0.596l23.095-6.188l2.096,7.823L106.491,83.706z"/></svg>';

$(window).on('load', function() {
  interval = setInterval(function() {
    create_snow_lake();
    remove_snow_lake();
  },200);
});
function create_snow_lake(){
var falling_time = Math.floor(Math.random() * 10) + 5 ;
var flake_pos = Math.floor(Math.random() * 90) + 4 ;
var flake_size = (Math.floor(Math.random() * 100) + 1)/100 ;
    var snow_flake = "<div class='flake-wrapper' style='width:20px; left:" + (flake_pos) + "%;height:20px;transform:scale("+(flake_size)+");animation:falling "+ (falling_time) + "s linear infinite'>"+ flake +"</div>";
    $(snow_flake).appendTo('.background');
}

function remove_snow_lake(){
  $(".flake-wrapper").each(function(){
    var flake_pos = $(this).offset().top;
    var body_height = $(document).height()-100;
    if( flake_pos > body_height){
      $(this).remove();
    }
  });
}
