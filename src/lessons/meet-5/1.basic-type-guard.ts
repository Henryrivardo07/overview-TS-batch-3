/*
🎯 Tujuan:
Mempersempit tipe union supaya TypeScript tahu tipe pasti dari sebuah variabel dalam kondisi tertentu. Ini membantu dapetin auto-complete & type safety yang maksimal.
*/
// -------------------------------------
/*
Apa itu Type Guard?
Type guard adalah kondisi runtime yang digunakan untuk mempersempit tipe data. TypeScript menggunakan informasi ini untuk melakukan type narrowing, sehingga kamu bisa akses properti/metode yang spesifik terhadap tipe tertentu.
*/

//contoh 1
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String Length", value.length);
  } else {
    console.log("Number tofixed", value.toFixed(2));
  }
}

printValue(5);
printValue("number");

/*
📌 Penjelasan:
typeof adalah type guard built-in.
Digunakan untuk string, number, boolean, symbol, undefined, dan function.
*/

//contoh 2 - instance of untuk class

class Rectangle {
  constructor(public width: number, public height: number) {}
  area() {
    return this.width * this.height;
  }
}

class Circle {
  constructor(public radius: number) {}
  area() {
    return Math.PI * this.radius ** 2;
  }
}

function printArea(shape: Rectangle | Circle) {
  if (shape instanceof Rectangle) {
    console.log("Rectangle Area:", shape.area());
  } else {
    console.log("Circle Area", shape.area());
  }
}

printArea(new Rectangle(5, 10));
printArea(new Circle(5));

/*
📌 Penjelasan:
instanceof mengecek apakah object merupakan turunan dari sebuah class.
Cocok digunakan jika kita pakai OOP dan class.
*/

//contoh 3 - in untuk properti object

type EmailUser = { email: string };
type phoneUser = { phone: string };

function contact(user: EmailUser | phoneUser) {
  if ("email" in user) {
    console.log("Send Email to", user.email);
  } else {
    console.log("Send SMS to", user.phone);
  }
}

contact({ email: "user@example.com" });
contact({ phone: "08123456789" });

/*
📌 Penjelasan:
in digunakan untuk mengecek apakah sebuah properti ada di dalam object.
Sangat berguna ketika kita pakai union object types.
*/

/*
🧠 Kesimpulan:
Type Guard	 Cocok untuk	      Contoh
typeof	     Primitif	          "string", 123, true
instanceof	 Class/constructor	  new Date()
in	         Properti di object	  "id" in obj
*/
