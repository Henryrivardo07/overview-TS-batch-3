// ===============================
// LIVE CODING TYPESCRIPT CHALLENGE
// ===============================

// SOAL 1: Product Formatter
// ------------------------------

type Category = "fruit" | "beverage" | "snack";

interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  metadata?: {
    [key: string]: string;
  };
}

/**
 * Fungsi ini menerima objek produk dan mengembalikan string dalam format:
 * [ID] NAME (CATEGORY) - $PRICE
 */
function formatProduct(product: Readonly<Product>): string {
  return `[${product.id}] ${product.name} (${product.category}) - $${product.price}`;
}

// Contoh penggunaan:
const product1: Readonly<Product> = {
  id: "P001",
  name: "Apple Juice",
  category: "beverage",
  price: 15000,
};
console.log(formatProduct(product1)); // Output: [P001] Apple Juice (beverage) - $15000

// SOAL 2: Inventory Union Filter
// ------------------------------

const validCategories = ["fruit", "beverage", "snack"] as const;
type CategoryFromConst = (typeof validCategories)[number];

interface ProductInventory {
  id: string;
  name: string;
  category: CategoryFromConst;
  price: number;
}

/**
 * Fungsi ini memfilter produk berdasarkan kategori yang valid.
 */
function filterInventoryByType(inventory: ProductInventory[], category: CategoryFromConst): ProductInventory[] {
  return inventory.filter((item) => item.category === category);
}

// Contoh penggunaan:
const inventorySample: ProductInventory[] = [
  { id: "1", name: "Banana", category: "fruit", price: 5000 },
  { id: "2", name: "Cola", category: "beverage", price: 7000 },
  { id: "3", name: "Chips", category: "snack", price: 6000 },
];

console.log(filterInventoryByType(inventorySample, "fruit"));

// SOAL 3: Utility Type Extractor
// ------------------------------

interface DetailedProduct {
  id: string;
  name: string;
  category: Category;
  price: number;
  stock: number;
  metadata?: Record<string, string>;
}

/**
 * Fungsi ini mengembalikan hanya informasi dasar dari produk: id, name, dan category.
 */
function pickProductBasicInfo(product: DetailedProduct & Record<string, unknown>): Pick<DetailedProduct, "id" | "name" | "category"> {
  const { id, name, category } = product;
  return { id, name, category };
}

// Contoh penggunaan:
const fullProduct = {
  id: "XYZ123",
  name: "Lemon Tea",
  category: "beverage",
  price: 10000,
  stock: 30,
  metadata: { brand: "Teh Asli" },
};

console.log(pickProductBasicInfo(fullProduct)); // Output: { id: 'XYZ123', name: 'Lemon Tea', category: 'beverage' }
