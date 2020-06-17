// Usuários e tecnologias

// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array)
// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários

const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

for(let i = 0; i < usuarios.length; i++){
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]} e ${usuarios[i].tecnologias[1]}`);
}

// Busca por tecnologia

// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. 
// Essa função deve retornar um boolean true/false.

function verifyCSS(usuario){
  for(let tecnologia of usuario.tecnologias){
    if(tecnologia === "CSS"){
      return true
    } 
  }
}

for(i = 0; i < usuarios.length; i++){
  const verifica = verifyCSS(usuarios[i])
  if(verifica){
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}

// Soma de despesas e receitas

// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).
// Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário

// Crie uma segunda função que recebe como parâmetro um array de números e retorna a 
// soma deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo

// A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas e
// despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.

// No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO

const pessoas = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

function somaNumeros(numeros){
  let soma = 0
  for(i = 0; i < numeros.length; i++){
    soma += numeros[i]
  }

  return soma
}

function calculaSaldo(receitas, despesas){
  const receita = somaNumeros(receitas)
  const despesa = somaNumeros(despesas)

  const saldo = receita - despesa
  
  return saldo
}

console.log(calculaSaldo(pessoas[0].receitas, pessoas[0].despesas));

for(let i = 0; i < pessoas.length; i++){
  const resultado = calculaSaldo(pessoas[i].receitas, pessoas[i].despesas)

  if (resultado >= 0) {
    console.log(`${pessoas[i].nome} tem o saldo POSITIVO de ${resultado.toFixed(2)} reais!`)
  }
  else if(resultado < 0) {
    console.log(`${pessoas[i].nome} tem o saldo NEGATIVO de ${resultado.toFixed(2)} reais!`)
   }else {
    console.log(`O saldo de ${pessoas[i].nome} está nulo!`)
  }
}