let cards = document.querySelectorAll(".cards");
function rotateCards(){
  let angle = 0;
  cards.forEach((card, index) => {
    card.style.transform = `rotate(${angle}deg)`;
    angle = angle - 10;
    card.style.zIndex = cards.length - index;
  })
}
document.addEventListener('DOMContentLoaded', rotateCards)
