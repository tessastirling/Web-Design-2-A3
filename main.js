// BURGER MENU
//get burger menu and primary menu
const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.primary-menu');
//listen for click
    burger.addEventListener('click', ()=>{
    nav.classList.toggle('show');

});
};
navSlide();


//MAIN CONTENT HERO IMAGE
//Desktop 
//get shop now button 
const shopnowBtn = document.querySelector('.shopnow-btn');
const shopnowDialog = document.querySelector('.shopnow-dialog');

//listen for click
shopnowBtn.addEventListener('click', () => {
  shopnowDialog.show();
});

//Desktop  
//get shop now button 
const shopnowBtn2 = document.querySelector('.shopnow-btn2');
const shopnowDialog2 = document.querySelector('.shopnow-dialog2');

//listen for click
shopnowBtn2.addEventListener('click', () => {
  shopnowDialog2.show();
});


//SHOP OUR RANGE NOW
//Desktop 
//get shop our range div and listen for scroll trigger
const shopourrangeT2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.shopourrange',
        start: 'top center',
    }
});
//styling scroll trigger
shopourrangeT2.from('.productshot', {opacity: 0, y: -100, duration: 1, float: 0.6});

//Mobile
//get shop our range div and listen for scroll trigger 
const shopourrange2T3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.shopourrange2',
        start: 'top center',
    }
});
//styling scroll trigger
shopourrange2T3.from('.productshot2', {opacity: 0, y: -100, duration: 1, float: 0.6});


//RECOMMENDED DOSAGES
//Desktop 
//get dosages div and listen for scroll trigger
const dosagesTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.dosages',
        start: 'top center',
    }
});
//styling scroll trigger
dosagesTl.from('.cup', {opacity: 0, y: -100, duration: 1, stagger: 0.2});


//Mobile 
//get dosages div and listen for scroll trigger
const dosages2T2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.dosages2',
        start: 'top center',
    }
});
//styling scroll trigger
dosages2T2.from('.cup2', {opacity: 0, y: -100, duration: 1, stagger: 0.2});



//INSTAGRAM GALLERY
//get swiper, call pageination on click
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

 

  
