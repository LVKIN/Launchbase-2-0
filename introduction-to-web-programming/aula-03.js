// Aula 03 
// Videos 09 - 16

// Objetos
const student01 = {
  name: "Lucas",
  grade: 9.8
}

const student02 = {
  name: "Guilherme",
  grade: 10
}

const student03 = {
  name: "Gabriella",
  grade: 7
}

// Exibindo o objeto
console.log(student03);
// Acessando propriedades dentro dos objetos
console.log(student02.name);
// calculando a media das notas
const averageObj = (student01.grade + student02.grade + student03.grade) / 3;

// Array
const students = [
  {
    name: "Lucas",
    grade: 9.8
  },
  {
    name: "Guilherme",
    grade: 10
  },
  {
    name: "Gabriella",
    grade: 7
  }
]

// Exibindo o Array
console.log(students);
// Acessando um objeto específico dentro do array
console.log(students[1]);
// Exibindo a propriedade de um objeto dentro do Array
console.log(students[0].name);
// Calculando a media de dentro do array
const averageArray = (students[0].grade + students[1].grade + students[2].grade) / 3;


// Funções e Métodos
const classA = [
  {
    name: "Lucas",
    grade: 9.8
  },
  {
    name: "Guilherme",
    grade: 10
  },
  {
    name: "Gabriella",
    grade: 7
  }
]

const classB = [
  {
    name: "João",
    grade: 6
  },
  {
    name: "Gustavo",
    grade: 0
  },
  {
    name: "Rodrigo",
    grade: 5
  },
  {
    name: "Samuel",
    grade: 10
  }
]
// função de calculo de objetos estáticos
function calculateAverage(students) {
  return (students[0].grade + students[1].grade + students[2].grade) / 3;
}

// Estrutura de Repetição
// Simulando entrada de novos objetos no Array
function calculateAverage02(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade;
  }
  const average = sum / students.length;
  return average;
}



function sendMessage(average, classes) {
  if (average > 5) {
    console.log(`The average of ${classes} was ${average.toFixed(1)}, congratulations!`);
  } else {
    console.log(`Average of ${classes} was ${average.toFixed(1)}, improve your grades!`);

  }
}




// Marcar estudante como reprovado se média for menor que 5
// e enviar uma mensagem
function disapprove(student) {
  student.flunked = false;
  if (student.grade < 5) {
    student.flunked = true
  }
}



function infoDisapprove(student) {
  if (student.flunked) {
    console.log(`The student ${student.name} is disapproved!`)
  }
}

function flunked(students) {
  for (let student of students) {
    disapprove(student);
    infoDisapprove(student);
  }
}

console.log(averageObj.toFixed(1));
console.log(averageArray.toFixed(1));

// estático
const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);
// novos objetos
const average3 = calculateAverage02(classA);
const average4 = calculateAverage02(classB);

// estático 
sendMessage(average1, 'classA');
sendMessage(average2, 'classB');
// novos objetos
sendMessage(average3, 'classA');
sendMessage(average4, 'classB');

disapprove(classB)

flunked(classA)
flunked(classB)