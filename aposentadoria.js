const nome = "Lucas";
const sexo = "M";
const idade = 19;
const contribuicao = 2;

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