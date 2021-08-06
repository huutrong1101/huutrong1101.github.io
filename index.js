let now=new Date();
let kn= new Date("2016-2-29");
let ngay=Math.ceil((now-kn)/(60*60*24*1000));
document.querySelector(".times").innerHTML=ngay +" days";


let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".nav");
window.onscroll=()=>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader,3000);
}
window.onload = fadeOut();



menu.addEventListener("click",()=> {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})


var swiper = new Swiper(".memoriesSwiper", {
    spaceBetween:20,
    loop: true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        }
    }
});