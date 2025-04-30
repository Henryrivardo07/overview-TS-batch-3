//6. {} is not object
//Salah satu jebakan betmen TypeScript yang paling sering bikin garuk-garuk kepala 😵‍💫
/*
😵‍💫 Apa Maksudnya {}?
Di TypeScript:
*/
{
} // artinya "any non-nullish value"

//Bukan berarti "object kosong" doang! Tapi semua tipe yang bukan null atau undefined.

//🧪 Contoh Mindblown:

function printSomething(val: {}): void {
  console.log(val);
}

printSomething(123); // ✅ bisa!
printSomething("hello"); // ✅ bisa!
printSomething(true); // ✅ bisa!
// printSomething(null);       ❌ error
// printSomething(undefined); ❌ error
//📌 Karena val: {} artinya: boleh semua tipe kecuali null & undefined

//🔍 Lalu Apa Bedanya dengan object?
function onlyObject(val: object): void {
  console.log(val);
}

onlyObject({}); // ✅ bisa
onlyObject([]); // ✅ bisa
onlyObject(new Date()); // ✅ bisa
// onlyObject(123);          ❌ error
// onlyObject("text");       ❌ error

/*
📌 object di TypeScript = harus benar-benar object (bukan primitive)
🧪 Perbandingan Singkat
Tipe Parameter	Bisa Dipakai dengan	Gak Bisa dengan
val: {}	number, string, boolean, object	null, undefined
val: object	object, array, Date, function	number, string, boolean
💡 Tips:
Kalau kita mau nulis fungsi yang hanya menerima object, pakai object atau Record<string, any>, jangan {}.
*/

//🧪 Contoh Aman Pakai Record:
function printKeys(obj: Record<string, any>): void {
  console.log(Object.keys(obj));
}

printKeys({ a: 1, b: 2 }); // ✅ ['a', 'b']
// printKeys("hello");      ❌ error: bukan object

/*
📌 Singkatnya:
Mau Menerima	Pakai Ini
Semua (kecuali null/undefined)	{}
Hanya object	object atau Record<string, any>
*/
