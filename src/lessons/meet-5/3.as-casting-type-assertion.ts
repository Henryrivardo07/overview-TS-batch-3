/*
🎯 Tujuan:
Memberi tahu TypeScript bahwa kita yakin terhadap tipe data sebuah nilai. Biasa digunakan saat TypeScript tidak bisa menyimpulkan tipe secara otomatis, tapi kita tahu lebih baik .
*/

/*
🔍 Apa itu as Casting?
as digunakan untuk melakukan type assertion, bukan type conversion.
Artinya, kita memastikan ke TypeScript bahwa sebuah nilai punya tipe tertentu, tanpa mengubah nilai itu.
❗ Warning: TypeScript akan nurut, jadi gunakan hanya kalau kamu benar-benar yakin!
*/

//Contoh 1 – Casting ke tipe yang lebih spesifik
const input = document.querySelector("#username") as HTMLInputElement;

input.value = "Hello, world!";
console.log(input.value); // Output: "Hello, world!"

/*
📌 Penjelasan:
Tanpa as HTMLInputElement, TypeScript akan kira input itu cuma Element | null.

Elemen input punya properti .value, tapi Element secara umum tidak.

Maka kita yakinkan TypeScript bahwa itu pasti HTMLInputElement.
*/

//Contoh 2 – Casting literal atau union
type Status = "success" | "error";

const status = "success" as Status;

/*
📌 Penjelasan:
Tanpa casting, TypeScript lihat "success" sebagai tipe "success".
Tapi kalau kita simpan "success" ke variabel yang tipenya union seperti Status, kita bisa bantu dengan as.
*/

//Contoh 3 – Angle Bracket Style (khusus .tsx hindari ini)
let value = <string>"hello";
//Sama aja fungsinya, tapi gaya ini bisa konflik dengan JSX, jadi pakai as aja biar aman.

//⚠️ Contoh Salah Gunakan as
const value2 = "hello" as unknown as number;
console.log(value2 + 1); // Tidak error, tapi hasilnya aneh 🚨
//TypeScript nurut aja, tapi kita tahu ini salah.
//Jadi, jangan asal-asalan pakai as, ya! Gunakan dengan bijak.

//Contoh Function Pemakaian as
function getLength(value: string | string[]) {
  if (Array.isArray(value)) {
    return (value as string[]).length;
  } else {
    return (value as string).length;
  }
}

console.log(getLength("typescript")); // Output: 10
console.log(getLength(["ts", "js"])); // Output: 2

/*
🧠 Tips:
Gunakan as kalau:
TypeScript tidak cukup pintar mengenali tipe.
Kamu yakin betul struktur datanya.
Hindari as any, kecuali kepepet (misal: third-party lib aneh banget).
Gunakan type guard kalau memungkinkan, itu lebih aman!
*/
