const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

console.log('c1');
fs.readFile(caminho, (_, conteudo) => console.log('readFIle > ' + conteudo.toString()));
console.log('c2');

console.log('c3');
const conteudo = fs.readFileSync(caminho);
console.log('readFileSync > ' + conteudo.toString());
console.log('c4');
