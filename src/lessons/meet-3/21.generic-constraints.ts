/*
Generic Constraints
🔍 Apa Itu Constraint?
Generic itu fleksibel banget, tapi kadang kita pengen batasi tipe yang bisa dipakai.
Nah, constraint dipakai buat membatasi generic hanya untuk tipe tertentu.
*/

//Contoh Basic: Constraint ke Object yang Punya length
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("Hello")); // ✅ Output: 5
console.log(getLength([1, 2, 3])); // ✅ Output: 3
// console.log(getLength(123));        ❌ Error: number gak punya length

// T extends { length: number } artinya T harus punya properti length.

// Contoh 2: Constraint ke Interface
interface HasName {
  name: string;
}

function greet<T extends HasName>(obj: T): void {
  console.log(`Hello, ${obj.name}!`);
}

greet({ name: "Budi", age: 25 }); // ✅ Hello, Budi!
// greet({ age: 30 });            ❌ Error: property 'name' missing

//Contoh 3: Constraint ke Union Type
function double<T extends number | string>(value: T): T {
  if (typeof value === "number") {
    return (value * 2) as T;
  } else {
    return (value + value) as T;
  }
}

console.log(double(10)); // ✅ 20
console.log(double("Hi")); // ✅ HiHi
//📌 Di sini, hanya number atau string yang boleh dipakai.

/*
🔐 Kenapa Penting?
Tanpa constraint:
*/
function print<T>(value: T) {
  console.log(value.length); // ❌ Error: belum tentu T punya length!
}

//Dengan constraint:
function print2<T extends { length: number }>(value: T) {
  console.log(value.length); // ✅ Aman!
}

/*
🧠 Kapan Dipakai?
Kalau kita pengen fleksibel tapi tetap aman
Kalau kita mau akses properti tertentu dari generic
Contoh praktis: validasi input, response API, form handler, utils, dsb.
*/
