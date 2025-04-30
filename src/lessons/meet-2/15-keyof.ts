type PersonInfo = {
  name: string;
  age: number;
};

let key: keyof PersonInfo; // "name" | "age"
key = "name";
console.log("Key:", key);
