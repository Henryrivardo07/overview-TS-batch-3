//Conditional types + infer + generic type

/*
📦 Konsep Umum
Kita bisa:

Gunakan generic untuk menerima input tipe
Pakai infer buat menangkap sebagian dari tipe itu
Ubah hasilnya berdasarkan kondisi
*/

//🧪 Contoh 1: Extract Return Type dari Generic Function
type GetReturn<T> = T extends (...args: any[]) => infer R ? R : never;

function sayHi(): string {
  return "Hello";
}

type Result = GetReturn<typeof sayHi>; // string

console.log("Result type is:", "Hello" as Result); // Hello

//🧪 Contoh 2: Extract Item dari Array Generic
type GetArrayItem<T> = T extends (infer U)[] ? U : never;

type A = GetArrayItem<string[]>; // string
type B = GetArrayItem<number[]>; // number
type C = GetArrayItem<boolean>; // never

//🧪 Contoh 3: Nested Promise Unwrap
type UnwrapPromise<T> = T extends Promise<infer U> ? (U extends Promise<any> ? UnwrapPromise<U> : U) : T;

type A = UnwrapPromise<Promise<string>>; // string
type B = UnwrapPromise<Promise<Promise<number>>>; // number

//📌 Di sini kita juga combine recursive + infer + conditional 🤯

//🔥 Real World Use-case:

type ExtractActionPayload<T> = T extends { type: string; payload: infer P } ? P : never;

type Action = { type: "ADD"; payload: number };

type Payload = ExtractActionPayload<Action>; // number

/*
📌 Kenapa Ini Powerful?
Bisa digunakan buat analisis tipe yang kompleks
Bisa bikin type-level logic yang mirip fungsi di runtime
Sangat berguna buat framework, form builder, handler, dsb
*/
