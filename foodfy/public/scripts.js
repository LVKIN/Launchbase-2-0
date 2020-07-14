const cards = document.querySelectorAll('.card__recipe')


for (let card of cards){
  card.addEventListener("click", function(){
    const recipeID = card.getAttribute("id")
    window.location.href = `/receita?id=${recipeID}`
  })
}