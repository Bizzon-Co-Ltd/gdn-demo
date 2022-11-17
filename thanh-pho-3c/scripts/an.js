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


$(document).ready(function() {
$(".snow1").let_it_snow({
  speed: 0,
  interaction: true,
  size: 2,
  count: 200,
  opacity: 0,
  color: "#ffffff",
  windPower: 1,
  image: false 
});
  
  var $snow = $(".flakes").find("svg");
  $(".snow2").let_it_snow({
  speed: 0,
  interaction: true,
  size: 6,
  count: 50,
  opacity: 0,
  color: "#ffffff",
  windPower: 0,
   image: "https://3.bp.blogspot.com/-LWSCSuSZ9qw/VLkSYiICCUI/AAAAAAADaAs/Exw-xb0znkg/s1600/hf_shimmer_flake20.png"
});
});

// let it snow plugin from https://github.com/peachananr/let_it_snow
!function(e){var t={speed:0,interaction:true,size:2,count:200,opacity:0,color:"#ffffff",windPower:0,image:false};e.fn.let_it_snow=function(n){function c(){u.clearRect(0,0,o.width,o.height);for(var t=0;t<a;t++){var n=s[t],i=f,p=l,d=100,v=n.x,m=n.y;var g=Math.sqrt((v-i)*(v-i)+(m-p)*(m-p)),y=v-i,b=m-p;if(g<d){var w=d/(g*g),E=(i-v)/g,S=(p-m)/g,x=w/2;n.velX-=x*E;n.velY-=x*S}else{n.velX*=.98;if(n.velY<=n.speed){n.velY=n.speed}switch(r.windPower){case false:n.velX+=Math.cos(n.step+=.05)*n.stepSize;break;case 0:n.velX+=Math.cos(n.step+=.05)*n.stepSize;break;default:n.velX+=.01+r.windPower/100}}var T=r.color;var N=/^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;var C=N.exec(T);var k=parseInt(C[1],16)+","+parseInt(C[2],16)+","+parseInt(C[3],16);n.y+=n.velY;n.x+=n.velX;if(n.y>=o.height||n.y<=0){h(n)}if(n.x>=o.width||n.x<=0){h(n)}if(r.image==false){u.fillStyle="rgba("+k+","+n.opacity+")";u.beginPath();u.arc(n.x,n.y,n.size,0,Math.PI*2);u.fill()}else{u.drawImage(e("img#lis_flake").get(0),n.x,n.y,n.size*2,n.size*2)}}requestAnimationFrame(c)}function h(e){if(r.windPower==false||r.windPower==0){e.x=Math.floor(Math.random()*o.width);e.y=0}else{if(r.windPower>0){var t=Array(Math.floor(Math.random()*o.width),0);var n=Array(0,Math.floor(Math.random()*o.height));var i=Array(t,n);var s=i[Math.floor(Math.random()*i.length)];e.x=s[0];e.y=s[1]}else{var t=Array(Math.floor(Math.random()*o.width),0);var n=Array(o.width,Math.floor(Math.random()*o.height));var i=Array(t,n);var s=i[Math.floor(Math.random()*i.length)];e.x=s[0];e.y=s[1]}}e.size=Math.random()*3+r.size;e.speed=Math.random()*1+r.speed;e.velY=e.speed;e.velX=0;e.opacity=Math.random()*.5+r.opacity}function p(){for(var e=0;e<a;e++){var t=Math.floor(Math.random()*o.width),n=Math.floor(Math.random()*o.height),i=Math.random()*3+r.size,u=Math.random()*1+r.speed,f=Math.random()*.5+r.opacity;s.push({speed:u,velY:u,velX:0,x:t,y:n,size:i,stepSize:Math.random()/30,step:0,angle:180,opacity:f})}c()}var r=e.extend({},t,n),i=e(this),s=[],o=i.get(0),u=o.getContext("2d"),a=r.count,f=-100,l=-100;o.width=window.innerWidth;o.height=window.innerHeight;(function(){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};window.requestAnimationFrame=e})();if(r.image!=false){e("<img src='"+r.image+"' style='display: none' id='lis_flake'>").prependTo("body")}p();e(window).resize(function(){if(this.resizeTO)clearTimeout(this.resizeTO);this.resizeTO=setTimeout(function(){el2=i.clone();el2.insertAfter(i);i.remove();el2.let_it_snow(r)},200)});if(r.interaction==true){o.addEventListener("mousemove",function(e){f=e.clientX,l=e.clientY})}}}(window.jQuery)