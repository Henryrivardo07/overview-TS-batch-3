/*
2. Switch Case Exhaustive Check (Pengecekan Menyeluruh dengan Switch Case)
🎯 Tujuan:
Memastikan semua kemungkinan value dari union literal type atau discriminated union sudah ditangani dalam switch. Kalau ada yang kelewat, TypeScript akan kasih error (dengan bantuan sedikit trik).
*/

/*
Masalah Umum:
Dalam union type, kadang kita lupa menangani semua kemungkinan. Tanpa pengecekan menyeluruh, TypeScript gak akan ngeluh, dan bug bisa ngumpet.
*/

//Contoh – Literal Union Tanpa Exhaustive Check
type Direction = "up" | "down" | "left" | "right";

function move(dir: Direction) {
  switch (dir) {
    case "up":
      console.log("Moving up");
      break;
    case "down":
      console.log("Moving down");
      break;
    //TypeScript tidak akan error di sini, padahal 2 case belum ditangani 😨
    case "left":
      console.log("Moving left");
      break;
    case "right":
      console.log("Moving right");
      break;
    default:
      const _exhaustiveCheck: never = dir;
      throw new Error(`Unhandled case: ${_exhaustiveCheck}`);
    // Kasus "left" dan "right" lupa ditulis!
  }
}
//TypeScript tidak akan error di sini, padahal 2 case belum ditangani 😨
//✅ Solusi: Exhaustive Check via never

move("up");

/*
🧠 Penjelasan:
const _exhaustiveCheck: never = dir artinya: “dir seharusnya tidak punya value lain selain yang sudah ditangani.”
Kalau ternyata ada dir yang belum dicase-in, TypeScript akan error karena value-nya bukan never.
*/

//🧩 Variasi: Digabung dengan Discriminated Union (nanti bahas lagi di poin 5)

/*
💡 Tips:
Teknik ini wajib dipakai kalau kamu pakai switch dengan union type.
Membantu banget untuk refactor — TypeScript akan ngasih tahu kalau kamu belum handle value baru.
*/
// 🧪 Bonus (Optional): Enum Style

enum ActionType {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

function performAction(action: ActionType) {
  switch (action) {
    case ActionType.CREATE:
      console.log("Creating item...");
      break;
    case ActionType.UPDATE:
      console.log("Updating item...");
      break;
    case ActionType.DELETE:
      console.log("Deleting item...");
      break;
    default:
      const _: never = action;
      throw new Error("Unhandled action type");
  }
}

performAction(ActionType.UPDATE); // Output: Updating item...
performAction(ActionType.CREATE); // Output: Updating item...
