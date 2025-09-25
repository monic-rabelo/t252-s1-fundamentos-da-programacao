// pra rodar usar npx ts-node nome-do-arquivo.ts
// no typescript é necessário TIPAR as coisas
// let aleatoria: string = "blablabla"
// console.log(aleatoria)

//interface Produto { // criando interface pra usar no objeto
//    nome: string,
//   preco: number,
//    descricao?: string // ? porque pode ser opcional
//}

//const objetoProduto1: Produto = { //criando objeto usando a interface e atribuindo valores
//    nome: "TV",
//    preco: 3000,
//    descricao: "Esse produto é daora"
//}

//console.log(objetoProduto1)

//const palavra: string = "Solange"
//console.log(palavra.toUpperCase())

//listas
//const playlist: string[] = ["Pitty - Me adora", "Liniker - Zero"]

//playlist.push("Ajualiacosta - Voce parece com vergonha")
//console.log(playlist[2])
//console.log(playlist.length)

//const listaDeNumeros: number[] = [1, 2, 3, 13]
//array de string ou numero -  (string | number) []
//console.log(listaDeNumeros)

//objetos
//interface Notificacao {
//    id: number,
//    titulo: string,
//    lida: boolean,
//    categoria: string
//}

//const Notificacao: Notificacao = {
//    id: 1,
//    titulo: "Novo seguidor",
//    lida: false,
//    categoria: "social"
//}

//exercicio 1
// Crie uma interface Notificacao com as propriedades:
// id: número identificador da notificação;
// titulo: string com o texto da notificação;
// tipo: pode ser apenas "alerta" | "aviso" | "informacao";
// lida: boolean que indica se a notificação já foi lida.
// Crie um array chamado inbox com pelo menos 3 notificações diferentes seguindo a interface.


interface Notificacao {
    id: number,
    titulo: string,
    tipo: "alerta" | "aviso" | "informacao",
    lida: boolean
}

// Crie um array chamado inbox com pelo menos 3 notificações diferentes seguindo a interface.

const inbox: Notificacao[] =  [
    {
        id: 1,
        titulo: "Seu boleto vence hoje",
        tipo: "alerta",
        lida: false
    },

    {
        id: 2,
        titulo: "Novo comentário na sua foto",
        tipo: "informacao",
        lida: false
    },

    {
        id: 3,
        titulo: "Seu celular precisa ser atualizado",
        tipo: "aviso",
        lida: false
    }
]

// Crie uma função declarada chamada statusLeitura que receba uma notificação e retorne:
// "✅ lida" se lida = true;
// "📨 não lida" se lida = false.
// function statusLeitura(notificacao: Notificacao): string {
//     if (notificacao.lida === true) {
//          return "foi lida"
//     }else {
//     return "nao lida"
//     }
// }

// //printar variavel ou funcao etc
// console.log(`Status da notificação 1: ${statusLeitura(inbox[1]!)}`)