/*
Mapped Types di TypeScript
🔍 Apa Itu Mapped Types?
Mapped Types memungkinkan kita untuk mengubah atau membentuk ulang sebuah tipe dengan cara “memetakan” field-field-nya.
Bayangin kita mau bikin versi “readonly”, “optional”, atau “stringify” dari tipe lain — tinggal mapped aja! 😎
*/

//syntax dasar
// type NewType = {
//   [Key in UnionType]: ValueType;
// };

//contoh 1: Manual Mapped Type
type Person = {
  name: string;
  age: number;
};

type PersonOptional = {
  [Key in keyof Person]?: Person[Key];
};

const maybePerson: PersonOptional = {
  name: "Rudi",
  // age: boleh gak ada, karena optional
};

//📌 keyof Person ambil semua key-nya ("name" dan "age"), lalu masing-masing jadi optional.

//contoh 2: Bikin Semua Field Readonly
type ReadonlyType<T> = {
  readonly [K in keyof T]: T[K];
};

type User = { username: string; level: number };
type ReadonlyUser = ReadonlyType<User>;

const admin: ReadonlyUser = { username: "admin", level: 99 };
// admin.level = 100; ❌ Error: readonly property

//Contoh 3: Bikin Semua Field jadi String
type Stringify<T> = {
  [K in keyof T]: string;
};

type Product = { id: number; price: number };
type StringProduct = Stringify<Product>;

const data: StringProduct = {
  id: "001",
  price: "25000",
};

//📌 Cocok banget kalau kita ambil data dari form yang semuanya string tapi asalnya tipe lain.

/*
🧠 Built-in Mapped Types di TypeScript
TypeScript udah nyediain beberapa versi mapped types built-in:


Built-in	Artinya
Partial<T>	Semua field jadi optional
Required<T>	Semua field harus ada
Readonly<T>	Semua field jadi readonly
Pick<T, K>	Ambil field tertentu aja dari tipe T
Record<K, T>	Bikin object dengan key K dan value T
Omit<T, K>	Hilangkan field tertentu dari T
*/

/*
🧪 Contoh Built-in:
type Todo = {
  title: string;
  done: boolean;
};

type PartialTodo = Partial<Todo>;
type ReadonlyTodo = Readonly<Todo>;
type TitleOnly = Pick<Todo, "title">;
type WithoutDone = Omit<Todo, "done">;
*/

//Mapped types ini jadi fondasi utama buat bikin library, form builder, API client, dan sebagainya.
