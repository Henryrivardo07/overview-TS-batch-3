/*
6. Function Overloads
🎯 Tujuan:
Bikin satu function yang bisa dipanggil dengan berbagai macam parameter dan tetap punya tipe return yang jelas dan spesifik, tergantung input-nya.
💡 Kenapa Gak Cukup Pakai Union?
Kadang kita pengen TypeScript tau secara presisi tipe hasil berdasarkan input. Kalau pakai union biasa, hasilnya juga union. Dengan overload, kita bisa bikin lebih smart.
*/

//📦 Struktur Overload
/*
function fn(a: number): string;
function fn(a: string): number;
function fn(a: any): any {
  // Implementasi
}
*/
/*
Beberapa overload signature (yang atas)
Satu implementasi (yang bawah) – a: any atau gabungan tipe
*/
// Contoh 1 – String atau Number dibalik
function reverse(x: string): string;
function reverse(x: number): number;
function reverse(x: string | number): string | number {
  if (typeof x === "string") {
    return x.split("").reverse().join("");
  } else {
    return Number(x.toString().split("").reverse().join(""));
  }
}
//▶️ Contoh console.log():
console.log(reverse("hello")); // Output: olleh
console.log(reverse(12345)); // Output: 54321
/*
✅ TypeScript tahu:
reverse("hello") hasilnya pasti string
reverse(123) hasilnya pasti number
*/

/*
 Contoh 2 – Overload array & single item
*/
function wrapInArray<T>(value: T): T[];
function wrapInArray<T>(value: T[]): T[];
function wrapInArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}
// Contoh console.log():
console.log(wrapInArray(5)); // Output: [5]
console.log(wrapInArray([1, 2, 3])); // Output: [1, 2, 3]
console.log(wrapInArray("a")); // Output: [ 'a' ]
console.log(wrapInArray(["a", "b"])); // Output: [ 'a', 'b' ]

//Contoh 3 – Berdasarkan dua parameter
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}
// Contoh console.log():
console.log(combine(2, 3)); // Output: 5
console.log(combine("foo", "bar")); // Output: foobar
// combine("foo", 123); // ❌ Error di TypeScript: tidak sesuai overload

/*
🧠 Tips:
Pastikan signature atas merepresentasikan kombinasi input yang valid.
Signature harus konsisten dan urutannya tidak boleh sembarangan.
Overload tidak bisa berdasarkan return type saja. Harus berbeda di parameter.
Kalau kamu sering bikin function helper, overload ini bakal bantu banget. Apalagi kalau function kamu mau tetap auto-complete & type-safe. 🙌
*/
