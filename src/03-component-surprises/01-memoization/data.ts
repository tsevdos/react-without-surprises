export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

export const PRODUCTS: Product[] = [
  { id: 1, name: "Mechanical keyboard", category: "Peripherals", price: 120 },
  { id: 2, name: "Wireless mouse", category: "Peripherals", price: 45 },
  { id: 3, name: "27-inch monitor", category: "Displays", price: 320 },
  { id: 4, name: "USB-C dock", category: "Accessories", price: 150 },
  { id: 5, name: "Laptop stand", category: "Accessories", price: 35 },
  { id: 6, name: "Webcam HD", category: "Peripherals", price: 80 },
  { id: 7, name: "Noise-cancelling headphones", category: "Audio", price: 250 },
  { id: 8, name: "Desk microphone", category: "Audio", price: 110 },
  { id: 9, name: "Ultrawide monitor", category: "Displays", price: 650 },
  { id: 10, name: "Portable SSD", category: "Storage", price: 99 },
];

export function filterProducts(products: Product[], term: string): Product[] {
  console.log("filterProducts ran");

  const end = Date.now() + 100;
  while (Date.now() < end) {
    // busy wait to simulate an expensive computation
  }

  const normalizedTerm = term.trim().toLowerCase();
  return products.filter((product) => product.name.toLowerCase().includes(normalizedTerm));
}
