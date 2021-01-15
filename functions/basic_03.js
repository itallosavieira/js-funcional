// arrow function
const felizNatal = () => console.log('Feliz natal');
felizNatal();

const saudacao = nome => `Fala ${nome}!!!`;
console.log(saudacao('itallo'));

//'...' REST, joga parametros em um array automaticamente
const somar = (...numbers) => {
    let total = 0;
    for(let n of numbers) {
        total += n;
    }

    return total;
}
console.log(somar(1, 2, 3, 4, 5));
console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));

const potencia = base => exp => Math.pow(base, exp);
console.log(potencia(2)(8));

Array.prototype.ultimo = function() {
    console.log(this[this.length - 1]);
}

Array.prototype.primeiro = function() {
    console.log(this[0]);
}

const numbers = [1, 2, 3];
numbers.ultimo();
numbers.primeiro();