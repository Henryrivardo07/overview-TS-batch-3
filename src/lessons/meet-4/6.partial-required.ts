/*
6. Partial & Required
🧠 Apa itu Partial dan Required?
Partial<T>: Membuat semua properti dalam tipe T menjadi opsional.
Required<T>: Membuat semua properti dalam tipe T menjadi wajib (required).
📦 Sintaks
Partial<T>
*/

type PartialExample = Partial<{ a: number; b: string }>;
// Result: { a?: number; b?: string }

//Required<T>
type RequiredExample = Required<{ a?: number; b?: string }>;
// Result: { a: number; b: string }

//🧪 Contoh Penggunaan Partial
type User = {
  id: number;
  name: string;
  email: string;
};

type UserUpdate = Partial<User>;
// Hasil: { id?: number; name?: string; email?: string }

const updateUser: UserUpdate = {
  name: "Jane",
};

console.log(updateUser);
//📌 Di sini kita cuma perlu memberikan bagian dari User yang mau diupdate.

//🧪 Contoh Penggunaan Required
type User = {
  id?: number;
  name?: string;
  email?: string;
};

type FullUser = Required<User>;
// Hasil: { id: number; name: string; email: string }

const fullUser: FullUser = {
  id: 1,
  name: "John",
  email: "john@example.com",
};

console.log(fullUser);

/*
📌 Dengan Required, semua properti jadi wajib ada.

🔥 Gunanya Di Dunia Nyata:
Partial cocok buat update data, misalnya form update profile.

Required cocok buat memastikan semua field ada dalam suatu objek (misal, saat validasi form input).

🧙‍♂️ Best Practice:
Gunakan Partial saat proses update, untuk data yang belum lengkap.
Gunakan Required saat kita perlu validasi lengkap, atau untuk objek yang tidak boleh ada properti yang hilang.
*/
