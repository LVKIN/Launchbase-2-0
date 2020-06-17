// Aula 02 
// Videos 06 e 07

//   operadores comparativos

//    <       Menor
//    >       Maior
//    >=      Maior ou igual
//    <=      Menor ou igual
//    ==      Igualdade
//    ===     Igualdade do mesmo tipo
//    !=      Diferença
//    !==     Diferença do mesmo Tipo

// DESAFIOS
// 01 - Verificar maioridade
const idade = 16;
console.log(idade>=18);

// se maior, permitir acesso
if(idade >= 18){
  console.log("Acesso Liberado!");  
} else {
  console.log("Acesso Negado!");
}

// Se a idade for de 17 anos, informe para voltar com 18 anos
if (idade === 17) {
  console.log("Volte quando fizer 18 anos!");
}

// Operadores Lógicos

//      &&      AND
//      ||       OR
//      !       NOT

// Refazendo
if((idade >= 18) && idade === 17){
  console.log("Liberar Acesso!");  
} else {
  console.log("Negar Acesso");  
}

// Operadores Aritméticos
//    *       Multiplicação
//    /       Divisão
//    %       Resto
//    +       Adição
//    -       Subtração

console.log(2 * 2); // 4
console.log(4 / 2); // 2
console.log(8 % 4); // 0
console.log(5 + 6); // 11
console.log(7 - 4); // 3