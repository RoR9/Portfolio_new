import {scrollAnimation} from "./src/scrollAnimation.js"


//Swiper
const swiperOptions={
    simulateTouch:true,

    //touchRatio:1,
  
   // touchAngle:45,
    //spaceBetween:30,
  
    //grabCursor:true,
   // autoHeight:true,
   slidesPerView:3,
   spaceBetween:0,
   loop:true,
   speed:3500,
   autoplay: {
          delay: 0,
          //disableOnInteraction:false,
        
      
        },
}
new Swiper(".swiper",swiperOptions)
//Text Scroll Animation
scrollAnimation()