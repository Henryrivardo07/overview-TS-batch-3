/*
✅ 3. Conditional Types with infer
🔍 Apa itu infer?
infer adalah keyword TypeScript buat “menangkap” tipe di dalam conditional type.
Dia bikin kita bisa ekstrak bagian tertentu dari sebuah tipe.

📦 Contoh Paling Dasar:
*/
type GetType<T> = T extends Array<infer U> ? U : never;

type A = GetType<string[]>; // string
type B = GetType<number[]>; // number
type C = GetType<boolean>; // never

/*
📌 Artinya:

Kalau T itu array, ambil tipe item di dalamnya.
Kalau bukan array, return never.
*/

// Contoh: Extract Return Type dari Function
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = () => number;

type Result = GetReturnType<Fn>; // number

//🧪 Contoh: Extract Parameter Type
type GetFirstParam<T> = T extends (arg: infer P) => any ? P : never;

type Fn = (x: string) => void;

type Param = GetFirstParam<Fn>; // string

// 🧙 Bonus: Nested Inference
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<number>>; // number
type B = UnwrapPromise<string>; // string

/*
💡 Gunanya infer?
Ekstrak informasi dari tipe

Bikin utility types yang fleksibel

Cocok banget buat ReturnType, Parameters, dll
*/
