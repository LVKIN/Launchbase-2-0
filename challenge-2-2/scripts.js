const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

modalOverlay.classList.remove("active")

for(let card of cards){
  card.addEventListener("click", function(){
    const contentID = card.getAttribute("id")
    modalOverlay.classList.add("active")
    modalOverlay.querySelector("iframe").src = `https://www.rocketseat.com.br/${contentID}`
  })
}

document.querySelector('.modal-close').addEventListener("click", function(){
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = ""
})