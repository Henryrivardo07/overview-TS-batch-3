/*
Generic Type dan Interface
🔍 Kenapa Butuh Generic di Type/Interface?
Kadang kita mau bikin struktur data fleksibel, tapi tetap aman secara tipe.
Kalau pakai any, kita kehilangan kejelasan tipe.
Dengan generic, kita bikin template struktur yang bisa dipakai di banyak tipe.
*/

//contoh generic interface
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 100 };
const stringBox: Box<string> = { value: "Hello" };

console.log(numberBox.value); // 100
console.log(stringBox.value.toUpperCase()); // HELLO
//📌 Box<T> artinya value bisa diisi dengan tipe apa pun — tapi tetap aman!

//Contoh Generic Type Alias
type Pair<A, B> = {
  first: A;
  second: B;
};

const pair1: Pair<string, number> = { first: "Level", second: 99 };
const pair2: Pair<boolean, string> = { first: true, second: "Active" };

console.log(pair1); // { first: 'Level', second: 99 }
console.log(pair2); // { first: true, second: 'Active' }

/*
Bisa banyak parameter (A, B, dst.)
Sama kaya interface, cuma ini pakai type
💡 Interface vs Type
Fitur	interface	type
Extend another interface	✅ Bisa	✅ Bisa pakai &
Union / Intersection	❌ Tidak bisa	✅ Bisa
Digunakan untuk class	✅ Umum dipakai	✅ Bisa juga
Untuk generic — dua-duanya sama-sama kuat, tinggal gaya dan kebutuhan kita aja.
*/

/*🎯 Kapan Pakai Generic Interface?
Saat kita bikin template struktur data (misal: API response, state, dsb.)

Contoh umum: ApiResponse<T>, Result<T>, Option<T>, dll
*/
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const userResponse: ApiResponse<{ name: string }> = {
  success: true,
  data: { name: "Budi" },
};

console.log(userResponse.data.name); // Budi
