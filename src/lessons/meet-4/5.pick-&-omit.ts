/*
✅ 5. Pick & Omit
🧠 Apa itu Pick dan Omit?
Pick digunakan untuk memilih beberapa properti dari sebuah tipe objek.

Omit digunakan untuk menghapus beberapa properti dari tipe objek.

📦 Sintaks
Pick<Type, Keys>
Mengambil properti yang ditentukan dari Type.
*/
type PickExample = Pick<{ a: number; b: string; c: boolean }, "a" | "b">;
// Result: { a: number; b: string }

/*
Omit<Type, Keys>
Menghapus properti yang ditentukan dari Type.
*/

type OmitExample = Omit<{ a: number; b: string; c: boolean }, "a">;
// Result: { b: string; c: boolean }

//🧪 Contoh Penggunaan Pick
type User = {
  id: number;
  name: string;
  email: string;
};

type UserPreview = Pick<User, "id" | "name">;
// Hasil: { id: number, name: string }

const user: UserPreview = {
  id: 1,
  name: "John Doe",
};

console.log(user);

//🧪 Contoh Penggunaan Omit
type UserWithoutEmail = Omit<User, "email">;
// Hasil: { id: number, name: string }

const userWithoutEmail: UserWithoutEmail = {
  id: 1,
  name: "John Doe",
};

console.log(userWithoutEmail);

//📚 Menggabungkan Pick dan Omit
type Person = { name: string; age: number; email: string };

type PersonPreview = Omit<Person, "email">;
type PersonInfo = Pick<Person, "name" | "age">;

type Combined = PersonPreview & PersonInfo;
// Hasil: { name: string; age: number; }

/*
🔥 Gunanya Di Dunia Nyata:
Saat kamu pengen memilih atau menghilangkan properti dari objek dinamis.
Bikin types untuk form, API, dan banyak lagi yang perlu fleksibilitas.
🧙‍♂️ Best Practice:
Pick cocok buat extracting properti yang dibutuhkan.
Omit cocok buat exclude properti yang gak diperlukan.
*/
