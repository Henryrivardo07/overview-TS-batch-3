type User = {
  name: string;
  age: number;
};

interface Product {
  id: number;
  name: string;
}

const user: User = { age: 22, name: "henry" };
const Product: Product = { id: 1, name: "Laptop" };

console.log(user);
console.log(Product);
