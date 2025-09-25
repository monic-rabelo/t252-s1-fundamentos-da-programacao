// Crie três objetos literais para representar estudantes, com as propriedades:
// nome: string;
// cursoId: número que referencia o curso que estudante está fazendo;
// notas: array com 3 números;
// mensagem: string;
interface Estudante {
    nome: string,
    cursoId: number,
    notas: number[],
    mensagem: string
}

const estudante1 : Estudante = {
    nome: "Luiza",
    cursoId: 1,
    notas: [5, 8, 9],
    mensagem: "Oi, Luiza"
}

const estudante2 : Estudante = {
    nome: "Ana",
    cursoId: 2,
    notas: [10, 5, 4],
    mensagem: "Oi, Ana"
}

const estudante3 : Estudante = {
    nome: "Laura",
    cursoId: 3,
    notas: [3, 1, 1],
    mensagem: "Oi, Laura"
}

// Crie uma função declarada chamada mediaEstudante que receba um objeto estudante e retorne a média das notas,
// somando diretamente os três elementos do array, sem usar loops.
function mediaEstudante(estudante: Estudante): number {
    return (estudante.notas[0]! + estudante.notas[1]! + estudante.notas[2]!) / 3;
}

console.log(`Media ${estudante1.nome}: ${mediaEstudante(estudante1)}`)
console.log(`Media ${estudante2.nome}: ${mediaEstudante(estudante2)}`)
console.log(`Media ${estudante3.nome}: ${mediaEstudante(estudante3)}`)

// Crie uma função anônima e atribua à estiloAprendizado que receba um objeto estudante e retorne uma das seguintes mensagens baseado na média das notas:
// "Exploradora confiante." se a média ≥ 7
// "Brilha como aprendiz." se a média ≥ 5 e < 7
// "Desbravando a programação." se a média < 5

const estiloAprendizado = function (estudante: Estudante): string {
  const media = mediaEstudante(estudante)
  if (media >= 7) {
    return "Exploradora confiante"
  } else if (media >= 5 && media < 7){
    return "Brilha como aprendiz"
  } else {
    return "Desbravando a programação"
  }
}

console.log(`${estudante1.nome}: ${estiloAprendizado(estudante1)}`)
console.log(`${estudante2.nome}: ${estiloAprendizado(estudante2)}`)
console.log(`${estudante3.nome}: ${estiloAprendizado(estudante3)}`)

// Adapte a função anterior para arrow function, mantendo a mesma lógica e mensagens.
// - não entendi como funciona arrow function 


// Use switch/case para imprimir o nome de um curso, usando a propriedade cursoId como referência à lista de cursos.
// - não entendi a lógica pra se seguir

// Para cada estudante, imprima:
// Nome
// Nome de um curso
// Média das notas
// Mensagem
console.log(`Nome: ${estudante1.nome}, Curso: ${estudante1.cursoId}, Media do estudante: ${mediaEstudante(estudante1)}, Mensagem: ${estudante1.mensagem}`)
console.log(`Nome: ${estudante2.nome}, Curso: ${estudante2.cursoId}, Media do estudante: ${mediaEstudante(estudante2)}, Mensagem: ${estudante2.mensagem}`)
console.log(`Nome: ${estudante3.nome}, Curso: ${estudante3.cursoId}, Media do estudante: ${mediaEstudante(estudante3)}, Mensagem: ${estudante3.mensagem}`)