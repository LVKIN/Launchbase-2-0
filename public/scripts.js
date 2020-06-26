const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

modalOverlay.classList.remove("active")

for(let card of cards){
  card.addEventListener("click", function(){
    const videoID = card.getAttribute("id")
    modalOverlay.classList.add("active")
    modalOverlay.querySelector("iframe").src = `https://www.youtube.com.br/embed/${videoID}`
  })
}

document.querySelector('.close-modal').addEventListener("click", function(){
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = ""
})

