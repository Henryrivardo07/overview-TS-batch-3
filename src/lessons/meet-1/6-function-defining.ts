//function value itu bebas isi apa

function greet(name: string): string {
  return `Hello, ${name}`;
}

//FUNCTION = LOGIKA BISNIS

const add2 = (c: number, d: number): number => {
  return c * d;
};

const add: (a: number, b: number) => number = (a, b) => a + b;

console.log(greet("Henry"));
console.log("Sum", add(5, 4));

console.log(add2(10, 2));
