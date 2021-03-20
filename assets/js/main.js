/*===== SHOW MENU =====*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
/*const sections = document.querySelectorAll('section[id]');
function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')
} 
window.addEventListener('scroll', scrollHeader)

/*===== SHOW SCROLL TOP =====*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); 
    else header.classList.remove('show-scroll')
} 
window.addEventListener('scroll', scrollTop)

/*===== MIXITUP FILTER PORTFOLIO =====*/ 

/*const enlaces = document.querySelectorAll('#categorias span');
enlaces.forEach((elemento) => {
    elemento.eddEventListener('click', (evento) => {
        evento.preventDefault();
        evento.target.classList.add('activo')
    });
});
/*const mixer = mixitup('.portafolio_container', {
    selectors: {
        target: '.portafolio_content'
    },
    animation: {
        duration: 400
    }
});
 /*Link active portfolio
const linkPortafolio = document.querySelectorAll('.portafolio_item')
function activaPortafolio(){
    if(linkPortafolio){
        linkPortafolio.forEach(l => l.classList.remove('active-portafolio'))
        this.classList.add('active-portafolio')
    }
}
linkPortafolio.forEach(l => l.addEventListener('click', activePortafolio));*/

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionlast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionlast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function (){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginleft = "-100%";
    }, 500);
}
btnRight.addEventListener('click', function () {
    Next();
});
    
function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionlast = sliderSection[sliderSection.length -1];
    slider.style.marginleft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function (){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionlast);
        slider.style.marginleft = "-100%";
    }, 500);
}
btnRight.addEventListener('click', function () {
    Next();
});
btnLeft.addEventListener('click', function () {
    Prev();
});
setInterval(function() {
    Next();
}, 4000);

/*===== SWIPER CAROUSEL =====*/ 

const MySwiper = new Swiper('.testimonial_container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true, 

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView: 1,
        },
        1024:{
            slidesPerView: 2,
        },
    }
  })

/*===== GSAP ANIMATION =====*/ 
gsap.from('.home_img', {opacity: 0, duration: 2, delay:.5, x:25})
gsap.from('.home_data', {opacity: 0, duration: 2, delay:.8, y:25})
gsap.from('.home_greeting, .home_name, .home_profession, .home_button', 
{opacity: 0, duration: 2, delay:.5, y:25, ease:'expo.out', stagger:.2});

gsap.from('.nav_logo, .nav_toggle', {opacity: 0, duration: 2, delay:1.5, y:25, ease:'expo.out', stagger:.2})
gsap.from('.nav_item', {opacity: 0, duration: 2, delay:1.8, y:25, ease:'expo.out', stagger:.2})