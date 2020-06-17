// Aula 01
// Videos 02 - 05

/*Comentários, Strings e Numbers*/

/* Calculo de média */

const aluno01 = "Lucas";
const aluno02 = 'Guilherme';
const aluno03 = `Gabriella`;

const notaAluno01 = 9.8;
const notaAluno02 = 10;
const notaAluno03 = 7;

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3;

// Condicionais

if(media > 5){
  console.log(`A média foi de ${media.toFixed(1)},parabéns para aos alunos!`);  
} else {
  console.log("Notas baixas demais, melhorem!");
  
}


// console.log(media);