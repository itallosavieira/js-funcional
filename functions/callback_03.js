const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.90 },
    { nome: 'Impressora', qtde: 0, preco: 600.90 },
    { nome: 'Caderno', qtde: 2, preco: 19.20 }
]

const getName = item => item.nome
console.log(carrinho.map(getName))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais)

Array.prototype.myMap = function(fn) {
    let mapped = [];

    for (let el of this) {
        mapped.push(fn(el))
    }

    return mapped;
}

const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
const numerosDobrados = nums.myMap(dobro);
console.log(numerosDobrados)