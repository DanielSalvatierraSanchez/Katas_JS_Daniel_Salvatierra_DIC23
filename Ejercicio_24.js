// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];
let sale = 0;

for (const product of products) {
  sale += product.sellCount;
}
console.log(sale);

/* for (let i = 0; i < products.length; i++) {
  sale += products[i].sellCount;
}
console.log(sale); */
