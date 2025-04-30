type Identity = { name: string };
type Contact = { email: string };

type Person = Identity & Contact; // gabungan kedua tipe

const employee: Person = {
  name: "Emily",
  email: "emily@example.com",
};
console.log("Employee:", employee);
