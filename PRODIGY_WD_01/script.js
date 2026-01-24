let cards = document.querySelectorAll(".cards");
function rotateCards(){
  let angle = 0;
  cards.forEach((card) => {
    card.style.transform = 'rotate(${angle}deg)';
    angle = angle - 10;
  })
}
