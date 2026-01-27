let cards = document.querySelectorAll(".card");

let stackArea = document.querySelector(".stack-area");

function rotateCards(){
  let angle = 0;
  cards.forEach((card, index) => {
    if (card.classList.contains("away")){
      card.style.transform = `translateY(-120vh) rotate(-48deg)`;
    }else{
    card.style.transform = `rotate(${angle}deg)`;
    angle = angle - 10;
    card.style.zIndex = cards.length - index;
    }
  });
}
rotateCards();

window.addEventListener("scroll", () => {
   let distance = window.innerHeight * 0.5;

   let topVal = stackArea.getBoundingClientRect().top;

   let index = -1 * (topVal/distance + 1);

   index = Math.floor(index);

   for(i=0; i<cards.length; i++){
    if (i <= index){
    cards[i].classList.add("away");
     }
    else{
      cards[i].classList.remove("away");
    }
  }
    rotateCards();
});

let navbar = document.querySelector('.navbar')
let scrollthreshold = 50;
window.addEventListener("scroll", function scrolling(){

  if (window.scrollY>scrollthreshold){
    navbar.classList.add('scroll');
  }else{
   navbar.classList.remove('scroll')
  }

})

let hiddenelements = document.querySelectorAll('.hidden') //is an intersection observer, it can observe multiple entries hence why we use forEach
const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry)=>{
     console.log(entry)
     if (entry.isIntersecting){ //checks if that entry is intersecting the viewport or not
      entry.target.classList.add('show');
     }
     else{
      entry.target.classList.remove('show') //shows the animation multiple times by removing it when it is not intersecting and then adding it back when intersecting
     }
  })
})

hiddenelements.forEach(el) = observer.observe(el); //loops over all elements saved in the hiddenelements variable
