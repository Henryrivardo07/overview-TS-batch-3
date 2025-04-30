/*
8. Record
🧠 Apa itu Record?
Record<K, T> adalah utility type yang digunakan untuk membuat objek dengan key yang spesifik dan value yang konsisten.

K adalah tipe untuk key.

T adalah tipe untuk value.

📦 Sintaks
*/

type Record<K extends string | number | symbol, T> = {
  [P in K]: T;
};

/*📌 Artinya:
Kita bisa mendefinisikan objek yang punya key dengan tipe tertentu, dan value-nya tipe lain.
*/

/*
🧪 Contoh Penggunaan Record
Misalnya kita ingin membuat objek yang memiliki id sebagai key, dan user name sebagai value:
*/
type UserRecord = Record<number, string>;

const users: UserRecord = {
  1: "John",
  2: "Jane",
  3: "Doe",
};

console.log(users[1]); // John

//🧪 Contoh Penggunaan untuk Enum-like Tipe

type Status = "pending" | "in-progress" | "completed";
type TaskStatusRecord = Record<Status, string>;

const taskStatus: TaskStatusRecord = {
  pending: "Task is pending",
  "in-progress": "Task is in progress",
  completed: "Task is completed",
};

console.log(taskStatus["completed"]); // Task is completed
//📌 Di sini kita menggunakan tipe union (Status) untuk menentukan key.

//contoh string sebagai key
type PriceRecord = Record<string, number>;

const prices: PriceRecord = {
  apple: 1.5,
  banana: 2,
  orange: 3,
};

console.log(prices.apple); // 1.5

/*
🔥 Gunanya di Dunia Nyata:
Membuat dictionary-like objek yang dinamis berdasarkan key dan value.
Berguna untuk data yang menggunakan ID atau kategori tertentu untuk mengelompokkan data.
Bisa dipakai untuk mapping status, user roles, data cache, dll.

🧙‍♂️ Best Practice:
Gunakan Record saat kita perlu membuat objek dengan key dinamis tetapi tipe value tetap konsisten.
Cocok untuk mengelola states atau data dengan key yang terstruktur.
*/
