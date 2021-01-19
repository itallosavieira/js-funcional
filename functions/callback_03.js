// const nums = [1, 2, 3, 4, 5];
// const dobro = n => n * 2;
// console.log(nums.map(dobro));



const nomes = ['Rafa', 'Itallo', 'Leticia'];
const primeiraLetra = t => t[0];
console.log(nomes.map(primeiraLetra));



const cart = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 600.80 },
    { nome: 'Caderno', qtde: 7, preco: 28.10 },
]

const getName = item => item.nome;
console.log(cart.map(getName));

const getTotal = item =>  item.qtde * item.preco;
const totais = cart.map(getTotal);
console.log(totais);

//My own map
const nums = [1, 2, 3, 4, 5];

const dobro = n => n * 2;

//const result = nums.map(dobro)

Array.prototype.myMap = function(fn) {
    
    const mapped = [];

    for(let el of this) {
        mapped.push(fn(el));
    }

    return mapped;
};

console.log(
   nums.myMap(dobro)
);