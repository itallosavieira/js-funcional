const somarNoTerminal = (a, b) => a + b;
const subtrairNoTerminal = (a, b) => a - b;

const exec = (fn, a, b) => fn(a, b);

console.log(
    exec(somarNoTerminal, 56, 38),
    exec(subtrairNoTerminal, 10, 5)
);

