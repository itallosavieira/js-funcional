const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.90 },
    { nome: 'Impressora', qtde: 0, preco: 600.90 },
    { nome: 'Caderno', qtde: 2, preco: 19.20 },
    { nome: 'Lapis', qtde: 3, preco: 5.50 },
    { nome: 'Tesoura', qtde: 1, preco: 9.50 }
]

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => acc + el

const totalGeral = carrinho
    .map(getTotal)
    .reduce(somar)

console.log(totalGeral)

