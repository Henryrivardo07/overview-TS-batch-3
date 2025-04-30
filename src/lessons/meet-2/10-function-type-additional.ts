type Henry = (x: number, y: number) => number;

const multiply: Henry = (a, b) => a * b;
const subtract: Henry = (a, b) => a - b;

console.log("Multiply", multiply(4, 5));
console.log("Multiply", subtract(14, 5));
