const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


const burger = document.getElementById("burger");
const categoryList = document.getElementById("categoryList");

let current = 0;


function showSlide(index){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}


prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

nextBtn.addEventListener("click" , () =>{
    current= (current + 1) % slides.length;
    showSlide(current);
});

document.addEventListener("click",(e) =>{
    if(!burger.contains(e.target)){
        burger.classList.remove("active");
    }else{
        burger.classList.toggle("active");
    }
});