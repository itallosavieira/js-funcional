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

