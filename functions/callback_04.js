const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.90 },
    { nome: 'Impressora', qtde: 0, preco: 600.90 },
    { nome: 'Caderno', qtde: 2, preco: 19.20 },
    { nome: 'Lapis', qtde: 3, preco: 5.85 },
    { nome: 'Tesoura', qtde: 1, preco: 9.50 }
]

const getNome = item => item.nome
const dezOuMais = item => item.qtde >= 10
// const qtdeGrande = item => item.qtde >= 1000 


Array.prototype.myFilter = function(fn) {
    let mapped = [];
    
    for (let el of this) {
        if (fn(el)) {
            mapped.push(el)
        }
    }
    
    return mapped
}

const nomesProdutosValidos = carrinho
    .myFilter(dezOuMais)
    .map(getNome)

console.log(nomesProdutosValidos)
