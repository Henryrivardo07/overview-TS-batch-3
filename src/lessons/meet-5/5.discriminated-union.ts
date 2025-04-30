/*
5. Discriminated Union
🎯 Tujuan:
Gabungin beberapa tipe berbeda dalam satu union dengan properti penanda khusus (discriminator) untuk bisa dibedakan saat runtime dan compile-time. Biasa dipakai buat modeling state, action, shape dari data API, dll.
*/
/*
📦 Struktur:
Gunakan satu properti kunci (biasanya kind, type, atau status) yang nilainya unik di tiap jenis.
*/
// type Circle = { kind: "circle"; radius: number };
// type Square = { kind: "square"; side: number };
// type Shape = Circle | Square;

/*
🧠 Kenapa penting?
Ngebantu banget saat pakai switch, if, dll supaya TypeScript bisa narrowing tipe secara akurat.
Biasanya dipakai bareng dengan exhaustive check (yang udah kita bahas di poin 2).
*/

//Contoh Lengkap: Kalkulasi Luas
type Circle = {
  kind: "circle";
  radius: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Triangle = {
  kind: "triangle";
  base: number;
  height: number;
};

type Shape = Circle | Rectangle | Triangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      console.log(`Hitung luas lingkaran: π * ${shape.radius}²`);
      return Math.PI * shape.radius * shape.radius;

    case "rectangle":
      console.log(`Hitung luas persegi panjang: ${shape.width} * ${shape.height}`);
      return shape.width * shape.height;

    case "triangle":
      console.log(`Hitung luas segitiga: 0.5 * ${shape.base} * ${shape.height}`);
      return 0.5 * shape.base * shape.height;

    default:
      // Exhaustive check!
      const _never: never = shape;
      throw new Error(`Unhandled shape kind: ${(shape as any).kind}`);
  }
}

//Contoh Pemanggilan + console.log()
const c: Circle = { kind: "circle", radius: 7 };
const r: Rectangle = { kind: "rectangle", width: 4, height: 5 };
const t: Triangle = { kind: "triangle", base: 6, height: 3 };

console.log(getArea(c)); // Output:
// Hitung luas lingkaran: π * 7²
// 153.93804002589985

console.log(getArea(r)); // Output:
// Hitung luas persegi panjang: 4 * 5
// 20

console.log(getArea(t)); // Output:
// Hitung luas segitiga: 0.5 * 6 * 3
// 9

/*
📌 Tips:
Selalu pakai kind / type sebagai discriminator untuk TypeScript bisa narrowing otomatis.

Bisa digabung dengan switch case exhaustive check untuk deteksi case yang belum ditangani.

Cocok buat sistem status (misal: loading/success/error), bentuk data, atau tipe action Redux-like.
*/
