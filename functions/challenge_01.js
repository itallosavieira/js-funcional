// somar (3)(4)(5)
function somar(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        }
    }
}

console.log(
    somar(3)(4)(5)
);

// calcular(3)(7)(fn)
function subtrair(num1, num2) {
    return num1 - num2;
};

function dividir(num1, num2) {
    return num1 / num2;
};

function multiplicar(num1, num2) {
    return num1 * num2;
};

function calcular(num1) {
    return function(num2) {
        return function(fn) {
            return fn(num1, num2);
        }
    }
}

console.log(
    calcular(3)(7)(subtrair),
    calcular(3)(7)(multiplicar),
    calcular(3)(7)(dividir)
);

