/*
1. Generic Function di TypeScript
🔍 Apa Itu Generic Function?
Generic Function adalah fungsi yang bisa bekerja dengan berbagai tipe data tanpa kehilangan informasi tipe tersebut.
Makanya disebut "generic" = umum, bukan spesifik ke satu tipe.
*/

//Masalah Tanpa Generic
function echo(data: any): any {
  return data;
}

const hasil = echo("hello");
console.log(hasil.toUpperCase());
//Pake any memang fleksibel, tapi kita kehilangan tipe asli-nya.

//Solusinya kita bisa gunakan Generic
function echo2<T>(data: T): T {
  return data;
}
const hasil2 = echo2("Hello2");
console.log(hasil2.toUpperCase());
//📌 T adalah type parameter, bisa dinamain apa aja, tapi T (Type) paling umum.

function square<T extends number>(value: T): number {
  return value * value;
}

const result = square(5);

console.log(result);

//Di sini kita juga kasih constraint (nanti dibahas di topik 3) — tapi tetap generic.

//Contoh - Swap Value
function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}
const swapped = swap("Hello", 123);

console.log(swapped);

/*
Tipe pertama T, tipe kedua U

Return-nya: tuple [U, T]

🎁 Kelebihan Generic Function
✅ Aman secara tipe
✅ Fleksibel & reusable
✅ Bisa dipake buat fungsi utility (filter, map, swap, dsb.)
*/

//Ga Harus T Ges
function getFirstItem<ItemType>(arr: ItemType[]): ItemType {
  return arr[0];
}

const first = getFirstItem<number>([10, 20, 30]);
console.log(first); // ✅ Output: 10
/*
Nama ItemType itu valid dan lebih mudah dipahami daripada T, apalagi kalau kode kita panjang.
📌 Tapi:
Kalau contoh simple → T, U cukup
Kalau udah kompleks → kasih nama yang jelas (biar gak bingung)
*/
