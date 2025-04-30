type ErrorBag = {
  [key: string]: string; // key dinamis, value harus string
};

const errorBag: ErrorBag = {
  email: "Invalid email",
  username: "Must start with letter",
};

console.log("Error Bag:", errorBag);
