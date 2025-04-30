/*
1. Basic Conditional Types
🔍 Apa itu Conditional Types?
Conditional Types memungkinkan kita membuat tipe yang berubah tergantung kondisi tertentu.

🧠 Sintaks:
T extends U ? X : Y
📌 Artinya:
Kalau T bisa di-assign ke U, maka pakai tipe X,
kalau enggak, pakai Y.
*/

/*
📌 Kenapa penting?
Bikin type logic lebih fleksibel
Berguna untuk bikin utility types, validasi tipe, atau API response yang dinamis
*/

//Contoh 1: Simple Conditional Type
type IsString<T> = T extends string ? "YES" : "NO";

type Test1 = IsString<string>; // "YES"
type Test2 = IsString<number>; // "NO"

console.log("Test1:", "YES" as Test1); // YES
console.log("Test2:", "NO" as Test2); // NO

//IsString adalah tipe helper yang akan memberi hasil "YES" jika T adalah string, selain itu "NO"

//Contoh 2: Bisa Buat Alias Type Berdasarkan Kondisi
type Result<T> = T extends boolean ? "bool" : "something else";

type A = Result<boolean>; // "bool"
type B = Result<42>; // "something else"

//Di sini kita bisa kasih label pada tipe berdasarkan kondisinya — cocok buat validasi sederhana.

//🧪 Contoh 3: Gunakan untuk API Response
type ApiResponse<T> = T extends Error ? { success: false; error: T } : { success: true; data: T };

type Success = ApiResponse<string>;
type Failure = ApiResponse<Error>;

const res1: Success = { success: true, data: "OK" };
const res2: Failure = { success: false, error: new Error("Oops") };

console.log(res1); // { success: true, data: "OK" }
console.log(res2); // { success: false, error: [Error: Oops] }

/*
Conditional types sangat berguna saat kita ingin membedakan antara data berhasil vs error, langsung dari tipenya!
*/

/*
🔥 Kapan Conditional Types Digunakan?
✅ Saat bikin utility types yang reusable
✅ Saat menangani respon API, form validation, dan custom logic
✅ Saat pengen bikin branching logic di level tipe, bukan kode
*/
