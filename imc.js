const nome = "Lucas";
const altura = "1.65";
const peso = "75";

const imc = peso / (altura * altura)

if(imc < 29.9){
  console.log(nome + ", Você está não acima do peso");
}
else{
  console.log(nome + ", Você está acima do peso");
  
}
