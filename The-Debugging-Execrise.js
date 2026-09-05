let UnitPrice = 12.50;
let Quantity = 2;
let Discount = 5;
let Subtotal = UnitPrice * Quantity;
let total = Subtotal - Discount;
console.log(total.toFixed(2));

let Inspect = Number(Quantity >= 0);




let WordDetecter = Number.isFinite(UnitPrice);

console.log("Number must be greater than Zero " + Inspect)
console.log("is a proper number: " + WordDetecter)