/*
5. Generic Function with Generic Type
🔍 Kenapa Digabung?
Kadang kita gak cuma mau generic di fungsi, tapi juga struktur data yang digunain fungsi itu — biar makin fleksibel tapi tetap terkontrol dan aman secara tipe.
*/

//🧪 Contoh 1: Function Pakai Generic Interface
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

function handleResponse<T>(res: ApiResponse<T>) {
  if (res.success) {
    console.log("Data:", res.data);
  } else {
    console.log("Failed to fetch data");
  }
}

handleResponse<{ name: string }>({
  success: true,
  data: { name: "Udin" },
});

//📌 ApiResponse<T> bisa diisi dengan data apapun, dan fungsi handleResponse tetap aman karena tahu isi T.

//🧪 Contoh 2: Kirim Form dengan Generic Function & Type
type FormData<T> = {
  payload: T;
  timestamp: number;
};

function submitForm<T>(form: FormData<T>): void {
  console.log("Submitting:", form.payload);
  console.log("At:", form.timestamp);
}

submitForm<{ email: string }>({
  payload: { email: "test@mail.com" },
  timestamp: Date.now(),
});

//🎯 Cocok banget buat case kayak form handler, API handler, dsb.

//🧪 Contoh 3: Kombinasi Function + Constraint + Generic Interface
interface HasId {
  id: string;
}

interface DBEntity<T extends HasId> {
  data: T;
  createdAt: Date;
}

function saveToDB<T extends HasId>(entity: DBEntity<T>) {
  console.log(`Saving ${entity.data.id} to DB...`);
}

saveToDB({
  data: { id: "123", name: "Item" },
  createdAt: new Date(),
});

/*
📌 Di sini:
Kita constraint T harus punya id
Lalu kita pakai itu di interface DBEntity<T>
Lalu kita pakai itu lagi di function saveToDB
💥 Ini powerful banget buat bikin sistem data yang scalable dan strongly typed.
*/

/*
🧠 Recap:
✅ Gunakan Generic Interface/Type saat kita butuh struktur reusable
✅ Gunakan Generic Function saat kita ingin fleksibel dan tetap aman
✅ Gabungkan keduanya untuk hasil yang super modular dan maintainable
*/
