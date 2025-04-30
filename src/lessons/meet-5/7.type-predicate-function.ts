/*
7. Type Predicate Function
🎯 Tujuan:
Buat function yang mengecek tipe dan bantu TypeScript narrow tipe dengan akurat.
📦 Struktur:
*/
/*
function isSomething(x: unknown): x is SomeType {
//  return true jika memang x adalah SomeType
}
*/
/*
x is SomeType disebut type predicate.
Kalau function return true, maka TypeScript tahu: x adalah SomeType.
*/

// Contoh 1 – Cek apakah input itu string
function isString(value: unknown): value is string {
  return typeof value === "string";
}
//▶️ Contoh console.log():
const val: unknown = "hello";

if (isString(val)) {
  console.log(val.toUpperCase()); // Aman karena val sekarang string
} else {
  console.log("Bukan string");
}
//✅ Tanpa type predicate, TypeScript bakal komplain waktu kamu panggil toUpperCase().

//Contoh 2 – Cek apakah object itu Circle
type Circle = { kind: "circle"; radius: number };

function isCircle(shape: any): shape is Circle {
  return shape?.kind === "circle" && typeof shape.radius === "number";
}
//▶️ Contoh console.log():

const shape: any = { kind: "circle", radius: 5 };

if (isCircle(shape)) {
  console.log(`Luas: ${Math.PI * shape.radius ** 2}`); // ✅ type-safe
} else {
  console.log("Bukan lingkaran");
}

//📚  Full Working Code – Type Predicate + Array Filter
// 1. Definisi tipe
type Animal = { name: string };
type Dog = Animal & { breed: string };

// 2. Type Predicate Function
function isDog(animal: Animal): animal is Dog {
  return "breed" in animal;
}

// 3. Data: gabungan antara Animal biasa dan Dog
const animals: (Animal | Dog)[] = [
  { name: "Whiskers" }, // hanya Animal
  { name: "Buddy", breed: "Golden Retriever" }, // ini Dog
  { name: "Milo" }, // hanya Animal
  { name: "Charlie", breed: "Poodle" }, // ini Dog
];

// 4. Filter hanya Dog
const dogs = animals.filter(isDog);

// 5. Tampilkan hasil
console.log(dogs);
/* Output:
[
  { name: 'Buddy', breed: 'Golden Retriever' },
  { name: 'Charlie', breed: 'Poodle' }
]
*/

// 6. Pakai hasilnya dengan aman
dogs.forEach((dog) => {
  console.log(`${dog.name} is a ${dog.breed}`);
});
/* Output:
Buddy is a Golden Retriever
Charlie is a Poodle
*/
