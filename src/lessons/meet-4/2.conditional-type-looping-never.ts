/*
🧠 Konsep Dasar
Ketika TypeScript nemu union di conditional types, dia bakal "looping" setiap anggotanya satu per satu (disebut distributive conditional type).

⚠️ Default: Distributive!
*/
// type MyType<T> = T extends string ? "YES" : "NO";

// type A = MyType<"a" | 1 | "b">;
// Sama aja kayak:
// MyType<"a"> | MyType<1> | MyType<"b">
// => "YES" | "NO" | "YES" = "YES" | "NO"

//contoh
type MyType<T> = T extends string ? "YES" : "NO";

type A1 = MyType<"a" | 1 | "b">;

console.log("Distribusi A:", "YES" as Extract<A1, "YES">); // YES
console.log("Distribusi A:", "NO" as Extract<A1, "NO">); // NO

//📌 Karena union, TypeScript apply conditional ke setiap elemen union-nya.

//🧪 Contoh Filtering Tipe: Exclude (Built-in)

/*
🔍 Filtering Tipe dengan Conditional Types
TypeScript built-in Exclude<T, U> dan Extract<T, U> adalah contoh penerapan conditional types!
*/

//contoh: custom exclude

type MyExclude<T, U> = T extends U ? never : T;

type Result = MyExclude<"a" | "b" | "c", "a" | "c">;
// Result = "b"

console.log("Exclude Result:", "b" as Result); // b

/*
📌 Penjelasan:

"a" extends "a" | "c" → never
"b" extends "a" | "c" → "b"
"c" extends "a" | "c" → never
*/

//🧪 Gunakan untuk Filtering Custom hapus number
type RemoveNumbers<T> = T extends number ? never : T;

type OnlyStrings = RemoveNumbers<string | number | boolean>;
// => string | boolean

const val1: OnlyStrings = "hello";
const val2: OnlyStrings = true;

console.log("RemoveNumbers Result:", val1); // hello
console.log("RemoveNumbers Result:", val2); // true

/*
🤯 Kenapa never Bisa "Ngilangin" Sesuatu?
Karena never artinya tipe yang gak mungkin ada → ketika masuk ke union, dia dianggap gak ada.
Contoh:
*/
type T = "a" | never | "b"; // sama aja kayak "a" | "b"

/*
🚫 Cara Non-Distributive
Kalau kamu tidak ingin conditional type menyebar ke union, kamu bisa membungkusnya dengan array ([T]).
*/
type NotDistributed<T> = [T] extends [string] ? "YES" : "NO";

type A = NotDistributed<"a" | "b" | 1>; // "NO" karena seluruh union tidak assignable ke string

console.log("NotDistributed A:", "NO" as A); // NO

/*
📌 Karena [T] bukan union lagi, jadi gak dipecah satu per satu.
[T] bukan union → jadi dicek sebagai satu kesatuan
"a" | "b" | 1 tidak sepenuhnya bisa di-assign ke string, jadi hasilnya "NO"
*/

/*
💡 Use Cases Dunia Nyata
Buat custom versi dari Exclude, Extract, NonNullable

Filtering union type berdasarkan kondisi

Membangun tipe dinamis untuk form fields, response mapping, dsb.
*/
