// array destrcution
const colors = ["Red", "green", "blue"];
// const [firstColor, secondColor] = colors;

// // console.log("First Color:", firstColor);
// // console.log("Second Color:", secondColor);

//object destruction
const car = {
  brand: "Toyota",
  year: "2020",
};

const { brand, year } = car;

console.log("Car Brand", brand);
console.log("Car Year", year);

//rest parameter

function ambilMakanan(name: string, ...makanan: string[]): void {
  console.log(`${name} makan semua makanan:`);
  makanan.forEach((item, i) => {
    console.log(`${i + 1}. ${item}`);
  });
}

ambilMakanan("Andi", "Nasi Goreng", "Bakso", "Mie Ayam", "whey protein");
ambilMakanan("Sita", "Soto");
