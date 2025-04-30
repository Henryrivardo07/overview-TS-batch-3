/*
7. Readonly
🧠 Apa itu Readonly?
Readonly<T> adalah utility type yang digunakan untuk menjadikan semua properti dalam objek menjadi read-only (tidak bisa diubah setelah di-set).

📦 Sintaks
Readonly<T>
*/
type ReadonlyExample = Readonly<{ a: number; b: string }>;
// Result: { readonly a: number; readonly b: string }

//🧪 Contoh Penggunaan Readonly
type User = {
  id: number;
  name: string;
  email: string;
};

type ReadOnlyUser = Readonly<User>;
// Hasil: { readonly id: number; readonly name: string; readonly email: string }

const user: ReadOnlyUser = {
  id: 1,
  name: "John",
  email: "john@example.com",
};

user.id = 2; // Error: cannot assign to 'id' because it is a read-only property

//📌 Setelah Readonly diterapkan, semua properti jadi tidak bisa diubah setelah diinisialisasi.

//🧪 Contoh Penggunaan dengan Array
const numbers: Readonly<number[]> = [1, 2, 3];
numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'

/*
📌 Di sini, array jadi tidak bisa diubah (misal, menggunakan .push(), .pop(), atau .splice()).

🔥 Gunanya di Dunia Nyata:
Bikin objek yang immutable di kode kita.
Untuk memastikan properti yang sudah di-set tidak bisa dirubah lagi di runtime.
Berguna dalam state management atau saat bekerja dengan data yang harus tetap konsisten.
🧙‍♂️ Best Practice:
Gunakan Readonly untuk tipe data yang tidak boleh diubah setelah dibuat, misalnya konfigurasi, data yang sudah diproses, atau state.
Bisa digabungkan dengan const untuk total immutability.
*/
