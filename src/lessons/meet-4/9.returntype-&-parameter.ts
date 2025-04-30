/*
 9. ReturnType & Parameters
🧠 Apa itu ReturnType dan Parameters?
ReturnType<T>: Mengambil tipe return value dari sebuah fungsi T.
Parameters<T>: Mengambil tipe parameter dari sebuah fungsi T.
📦 Sintaks
ReturnType<T>
*/

type ReturnTypeExample = ReturnType<() => string>;
// Result: string

// Parameters<T>
type ParametersExample = Parameters<(x: number, y: number) => void>;
// Result: [number, number]

/*
🧪 Contoh Penggunaan ReturnType
Misalnya kita punya fungsi yang mengembalikan angka, kita bisa ambil tipe return-nya.
*/
function getAge(): number {
  return 25;
}

type Age = ReturnType<typeof getAge>;
// Hasil: number

const age: Age = 30; // Oke
const wrongAge: Age = "30"; // Error: Type 'string' is not assignable to type 'number'

//📌 ReturnType<typeof getAge> menangkap tipe dari fungsi getAge, yaitu number.

/*
🧪 Contoh Penggunaan Parameters
Misalnya kita ingin tahu tipe parameter dari fungsi:
*/
function add(a: number, b: number): number {
  return a + b;
}

type Params = Parameters<typeof add>;
// Hasil: [number, number]

const params: Params = [5, 10]; // Oke
const wrongParams: Params = [5]; // Error: Argument of type '5' is not assignable to parameter of type '[number, number]'
//📌 Parameters<typeof add> menangkap tipe parameter dari fungsi add, yaitu [number, number].

//🧪 Gabungkan ReturnType dan Parameters
function sum(a: number, b: number): number {
  return a + b;
}

type SumReturn = ReturnType<typeof sum>; // number
type SumParams = Parameters<typeof sum>; // [number, number]

const sumResult: SumReturn = sum(1, 2); // number
const sumParams: SumParams = [1, 2]; // [number, number]

/*
📌 Menggunakan keduanya bersama-sama untuk mendefinisikan dan mengambil data dari fungsi!

🔥 Gunanya di Dunia Nyata:
Berguna untuk reusable function atau callback yang tipe parameter dan return-nya perlu dipetakan.
Bisa digunakan untuk meta-programming atau analisis tipe fungsi.
Biasanya dipakai buat hooks, higher-order functions, dan utils yang membutuhkan manipulasi tipe dari fungsi.

🧙‍♂️ Best Practice:
Gunakan ReturnType untuk mengambil tipe dari hasil yang dikembalikan fungsi tanpa menulis tipe secara manual.
Gunakan Parameters untuk mengakses tipe parameter fungsi tanpa repot-repot menulis ulang.
*/
