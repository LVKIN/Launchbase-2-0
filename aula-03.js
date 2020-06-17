// Aula 03 
// Videos 09

// Objetos
// Calcular a média de objetos

const aluno01 = {
  nome: "Lucas",
  nota: 9.8
}

const aluno02 = {
  nome: "Guilherme",
  nota: 10
}

const aluno03 = {
  nome: "Gabriella",
  nota: 7
}

// Exibindo o objeto
console.log(aluno03);
// Acessando propriedades dentro dos objetos
console.log(aluno02.nome);
// calculando a media das notas
const mediaObj = (aluno01.nota + aluno02.nota + aluno03.nota) / 3
console.log(mediaObj.toFixed(1));

// Array
const alunos = [
  {
    nome: "Lucas",
    nota: 9.8
  },
  {
    nome: "Guilherme",
    nota: 10
  },
  {
    nome: "Gabriella",
    nota: 7
  }
]

// Exibindo o Array
console.log(alunos);
// Acessando um objeto específico dentro do array
console.log(alunos[1]);
// Exibindo a propriedade de um objeto dentro do Array
console.log(alunos[0].nome); 
//
const mediaArray = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
console.log(mediaArray.toFixed(1));


// Funções e Métodos

const turmaA = [
  {
    nome: "Lucas",
    nota: 9.8
  },
  {
    nome: "Guilherme",
    nota: 10
  },
  {
    nome: "Gabriella",
    nota: 7
  }
]

const turmaB = [
  {
    nome: "João",
    nota: 6
  },
  {
    nome: "Gustavo",
    nota: 0
  },
  {
    nome: "Rodrigo",
    nota: 5
  },
  {
    nome: "Samuel",
    nota: 10
  }
]

function calculaMedia(alunos){
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

// Estrutura de Repetição
// Simulando entrada de novos objetos no Array
function calculaMedia02(alunos){
  let soma = 0;
  for (let i = 0; i < alunos.length; i++){
    soma = soma + alunos[i].nota
  }
  const media = soma / alunos.length;  
  return media;
}


const media1 = calculaMedia(turmaA);
const media2 = calculaMedia(turmaB);

const media3 = calculaMedia02(turmaA);
const media4 = calculaMedia02(turmaB);

function enviaMensagem(media, turma){
  if(media > 5){
    console.log(`A média da turma ${turma} foi de ${media.toFixed(1)}, parabéns para aos alunos!`);  
  } else {
    console.log(`Notas da turma ${turma} foi de ${media.toFixed(1)} baixas demais, melhorem!`);
    
  }
}

enviaMensagem(media1, 'turmaA');
enviaMensagem(media2, 'turmaB');
enviaMensagem(media3, 'turmaA');
enviaMensagem(media4, 'turmaB');