/*
✅ 4. satisfies Operator
🎯 Tujuan:
Memastikan bahwa nilai cocok dengan tipe tertentu, tanpa kehilangan inferensi tipe.
Berbeda dengan as, satisfies tidak mengubah tipe, hanya melakukan validasi bahwa nilai memenuhi tipe.
❓ Kenapa butuh satisfies?
Kalau kamu pakai as, kadang informasi tipe yang lebih spesifik hilang.
Dengan satisfies, kamu bisa dapetin validasi + inferensi maksimal. Kombinasi terbaik!
*/

//Contoh 1 – Menjaga tipe literal tetap terdeteksi
const user = {
  name: "Alice",
  age: 30,
} satisfies { name: string; age: number };

console.log(user.name.toUpperCase()); // Output: ALICE
console.log(typeof user.age); // Output: number

/*
✅ Penjelasan:
Dengan satisfies, TypeScript akan pastikan objek cocok sama bentuk { name: string; age: number }
Tapi properti literal "Alice" dan 30 tetap ditracking sebagai literal (bukan hanya string dan number biasa)
*/

//Contoh 2 – Lebih baik daripada as untuk konstanta
const colors = {
  primary: "#ff0000",
  secondary: "#00ff00",
} satisfies Record<string, string>;

console.log(colors.primary); // Output: #ff0000
console.log(Object.keys(colors)); // Output: [ 'primary', 'secondary' ]

/*
✅ Penjelasan:
as Record<string, string> bisa membuat warna-warna ini kehilangan infonya sebagai "primary" dan "secondary".
satisfies tetap ngejaga bentuk asli & literal key-nya.
*/

//Contoh 3 – Pakai di array dengan union type
const roles = ["admin", "user", "guest"] satisfies ("admin" | "user" | "guest")[];

console.log(roles.includes("user")); // Output: true
console.log(roles.length); // Output: 3

/*
✅ Penjelasan:
Validasi bahwa array hanya berisi literal "admin", "user", "guest"
Tapi isi array tetap "admin" | "user" | "guest", bukan cuma string
*/

//contoh 4 konfigurasi + penggunaan function
type Config = {
  retries: number;
  verbose?: boolean;
};

const config = {
  retries: 5,
  verbose: true,
} satisfies Config;

function applyConfig(cfg: Config) {
  console.log(`Retries set to ${cfg.retries}`);
  if (cfg.verbose) console.log("Verbose mode ON");
}

applyConfig(config);
// Output:
// Retries set to 5
// Verbose mode ON

//Contoh 5 – Dipakai untuk route object
type Route = {
  path: string;
  method: "GET" | "POST";
};

const loginRoute = {
  path: "/login",
  method: "POST",
} satisfies Route;

function handleRoute(route: Route) {
  console.log(`[${route.method}] Handling request to ${route.path}`);
}

handleRoute(loginRoute);
// Output: [POST] Handling request to /login

/*
🧠 Kesimpulan:
satisfies sangat ideal untuk memastikan bentuk object kamu benar TANPA kehilangan detail tipe.
Kombinasi maut: safety + inferensi maksimal!
*/
