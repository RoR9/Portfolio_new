import {scrollAnimation} from "./src/scrollAnimation.js"
//Preloader
const preloader=document.querySelector("#preloader")
window.addEventListener("load",()=>{
    new Promise(function (resolve,reject){
        setTimeout(()=>resolve(preloader.style.display="none"),1500)

    })
    //Text Scroll Animation
    .then(()=>scrollAnimation())
     }
    )

//Show All Button

const showAllBtn=document.querySelector(".projects__btn")
showAllBtn.addEventListener("click",hideButtonHandler)

window.addEventListener("load",setGridItems)
window.addEventListener("resize",setGridItems )

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



//Form
const form=document.querySelector("form")
form.addEventListener("submit",handleSendEmail)


async function handleSendEmail(event) {
    const name=document.querySelector("#name")
    event.preventDefault();
    const formData = new FormData(this);
    const response = await fetch("https://formspree.io/f/xgeqvoqa", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
       const contactTitle=document.querySelector(".contact__title") 
       
       let nameDisplay=name.value 
      contactTitle.innerHTML=` <p> Hey, <span class="_name">${nameDisplay}</span> !</p> 
                                        Thank you for your interest!`
      
      this.reset();
      const submitBtn=document.querySelector(".contact__btn")
      submitBtn.disabled=true
      alert("Form submited. Thank you!");
    } else {
      alert("Error sending message, please try again"); 
    }
  }

function hideButtonHandler(){
    
    
    const hideElements=document.querySelectorAll(".projects__card")
    
    hideElements.forEach(hideElement=>{
       
        if(hideElement.classList.contains("_hide")){
            hideElement.classList.remove("_hide")
            hideElement.classList.add("_show")

        }
        else if(hideElement.classList.contains("_show")){
            hideElement.classList.add("_hide")
            hideElement.classList.remove("_show")
        }
    })
    showAllBtn.classList.toggle("_show")
    if(showAllBtn.classList.contains("_show")){
        showAllBtn.innerHTML=`HIDE ALL
        <svg id="arrow" width="24" height="25" viewBox="0 0 24 25" fill="#fff" xmlns="http://www.w3.org/2000/svg transform="rotate(90)">
            <path d="M12 23.25C6.07 23.25 1.25 18.43 1.25 12.5C1.25 6.57 6.07 1.75 12 1.75C17.93 1.75 22.75 6.57 22.75 12.5C22.75 18.43 17.93 23.25 12 23.25ZM12 3.25C6.9 3.25 2.75 7.4 2.75 12.5C2.75 17.6 6.9 21.75 12 21.75C17.1 21.75 21.25 17.6 21.25 12.5C21.25 7.4 17.1 3.25 12 3.25Z" />
            <path d="M10.7402 16.7799C10.5502 16.7799 10.3602 16.7099 10.2102 16.5599C9.92018 16.2699 9.92018 15.7899 10.2102 15.4999L13.2102 12.4999L10.2102 9.49991C9.92018 9.20991 9.92018 8.72991 10.2102 8.43991C10.5002 8.14991 10.9802 8.14991 11.2702 8.43991L14.8002 11.9699C15.0902 12.2599 15.0902 12.7399 14.8002 13.0299L11.2702 16.5599C11.1202 16.7099 10.9302 16.7799 10.7402 16.7799Z" />
            
            </svg>`
        
       
    }
    else{
        showAllBtn.innerHTML=`SEE ALL WORKS
        <svg width="24" height="25" viewBox="0 0 24 25" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 23.25C6.07 23.25 1.25 18.43 1.25 12.5C1.25 6.57 6.07 1.75 12 1.75C17.93 1.75 22.75 6.57 22.75 12.5C22.75 18.43 17.93 23.25 12 23.25ZM12 3.25C6.9 3.25 2.75 7.4 2.75 12.5C2.75 17.6 6.9 21.75 12 21.75C17.1 21.75 21.25 17.6 21.25 12.5C21.25 7.4 17.1 3.25 12 3.25Z" />
            <path d="M10.7402 16.7799C10.5502 16.7799 10.3602 16.7099 10.2102 16.5599C9.92018 16.2699 9.92018 15.7899 10.2102 15.4999L13.2102 12.4999L10.2102 9.49991C9.92018 9.20991 9.92018 8.72991 10.2102 8.43991C10.5002 8.14991 10.9802 8.14991 11.2702 8.43991L14.8002 11.9699C15.0902 12.2599 15.0902 12.7399 14.8002 13.0299L11.2702 16.5599C11.1202 16.7099 10.9302 16.7799 10.7402 16.7799Z" />
            
            </svg>`
            window.location.href = "#projects"
            

    }

    setGridItems()
    const rmProject=document.querySelector(".projects__rqm")
    let showCount=[...hideElements].filter(hideElement=>hideElement.classList.contains("_show")).length
    if(showCount>1){
        rmProject.classList.remove("_hide")
    }
    
   
}

function setGridItems(){
    const rmProject=document.querySelector(".projects__rqm")
    if(document.body.offsetWidth<1100){
        rmProject.classList.remove("_hide")
       
    }
    else if(document.body.offsetWidth<1440){
        rmProject.classList.add("_hide")
        
        
        
    }
    else{
        rmProject.classList.remove("_hide")
       
    }
}