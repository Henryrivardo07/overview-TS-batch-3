/*
Promise & Async Functions
📦 Apa Itu Promise?
Promise adalah representasi dari operasi async yang bisa berhasil (resolve) atau gagal (reject).
*/

//Basic Promise
const fetchData = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
      // reject("Failed to fetch!"); // contoh kalau error
    }, 1000);
  });
};

fetchData().then((result) => {
  console.log(result); // ✅ Output: Data fetched!
});

//async function
//Async function itu cara lebih clean dan lebih sinkron secara gaya penulisan buat handle Promise.
async function getData() {
  const result = await fetchData();
  console.log("Async result:", result);
}

getData();

/*
🤯 Error Handling: .catch() vs try...catch
*/

//versi promise

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error("Error:", err));

//versi async/await
async function safeGetData() {
  try {
    const data = await fetchData();
    console.log("Data:", data);
  } catch (error) {
    console.error("Caught error:", error);
  }
}
safeGetData();

//🧪 Promise + Generic Function
function fetchItem<T>(item: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(item), 500);
  });
}

fetchItem<number>(42).then((res) => console.log("Result:", res));

//🧪 Async Function Return Type
async function getName(): Promise<string> {
  return "Rudi";
}

getName().then((name) => console.log("Name:", name));
//📌 Karena async function selalu return Promise walaupun return-nya biasa.

//Combine dengan Promise.all
async function fetchMultiple() {
  const [a, b] = await Promise.all([fetchItem<number>(1), fetchItem<string>("Hello")]);

  console.log("Multi:", a, b);
}

fetchMultiple();

/*
🧠 Best Practices
Gunakan async/await untuk flow yang bersih & gampang dibaca

Gunakan Promise.all saat ingin ngerun async function secara paralel

Selalu handle error pakai .catch() atau try...catch

⚠️ Jangan campur then dan await dalam satu flow biar gak bikin pusing debugging.
*/
