const directions = ["up", "down", "left", "right"] as const; // semua value dan tipe dikunci jadi literal dan readonly

// directions[0] = "forward"; // ❌ Error, array readonly
console.log("Directions:", directions);
