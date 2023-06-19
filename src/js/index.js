const menuToggle = document.querySelector('.nav_toggle input');
const nav = document.querySelector('nav ul');
const slides=document.querySelector(".testimonials_slider").children;
const indicatorImages=document.querySelector(".slider-indicator").children;

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide')
});

for(let i=0; i<indicatorImages.length; i++){
    indicatorImages[i].addEventListener("click",function(){
     
       for(let j=0; j<indicatorImages.length; j++){
         indicatorImages[j].classList.remove("active");
       }
        this.classList.add("active");
        const id=this.getAttribute("data-id");
       for(let j=0; j<slides.length; j++){
           slides[j].classList.remove("active");
       }

        slides[id].classList.add("active");

    })
}

let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
          clickedLi = e.target.parentElement;
        }else{
          clickedLi = e.target.parentElement.parentElement;
        }
       clickedLi.classList.toggle("showAnswer");
      });
    }

