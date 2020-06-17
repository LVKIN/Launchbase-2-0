// Aposentadoria
// Crie um programa para calcular a aposentadoria de uma pessoa
const nome = "Gabriella";
const sexo = "F";
const idade = 20;
const contribuicao = 0;

const result = idade + contribuicao;

if (sexo == "M"){  
  if(result >= 95){
    console.log("Você pode se aposentar");
  } else {
    console.log("Você não pode se aposentar");
  }
} else if (sexo == "F"){
  if(result >= 85){
    console.log("Você pode se aposentar");
  } else {
    console.log("Você não pode se aposentar");
  }

} else {
  console.log("Sexo inválido");
}

// IMC
// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa
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
