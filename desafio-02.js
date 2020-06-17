// Construção e impressão de objetos

// Crie um programa que armazena dados da empresa Rocketseat dentro de 
// um objeto chamado empresa. Os dados a serem armazenados são:

// Nome: Rocketseat

// Cor: Roxo

// Foco: Programação

// Endereço:
//     Rua: Rua Guilherme Gembala
//     Número: 260

// Imprima a seguinte frase: A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

const empresa = {
  nome: "Rocketseat",
  cor: "Roxo",
  foco: "Programação",
  endereco: {
    rua: "Rua Guilherme Gembala",
    numero: 260
  }
};

console.log(`A empresa ${empresa.nome} está localizada na ${empresa.endereco.rua}, ${empresa.endereco.numero}`);

// Vetores e objetos

// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

const usuarios = [
  {
    nome: "Lucas",
    idade: 19,
    tecnologia: "JS"
  },
  {
    nome: "Hugo",
    idade: 21,
    tecnologia: "C#"
  }
]

console.log(`O usuário ${usuarios[0].nome} tem ${usuarios[0].idade} anos e sua especialidade é ${usuarios[0].tecnologia}`)