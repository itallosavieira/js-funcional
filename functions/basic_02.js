function bomDia() {
    console.log('Bom dia!');
}

const boaTarde = function() {
    console.log('Boa Tarde!');
}

// Passar uma função em outra função
function exec(fn) {
    if(typeof fn === 'function') {
        fn();
    }
}

exec(bomDia);
exec(boaTarde);

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp);
    };
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

