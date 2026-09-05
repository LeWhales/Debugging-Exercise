# Debugging-Exercise
this here is the debugging exercise
// This is for the Assignment

const unitPrice = "12.50";
const quantity = "4";
const discount = 5;
const subtotal = unitPrice + quantity;
const total = subtotal - discount;
console.log(total.toFixed(2));


Debugging progress:
I think what will happen is that the numbers in discount will not detect as its not in qoutations
when left on, it leads to the result being 7.50, when you do the math, it should have ended up with 11.5
I changed "const subtotal = unitPrice + quantity;" from addition to multiplcation, it reached the desired 45
I thought changing the quanity to zero would make it zero, turns out it put it as a negative number
Next I try using let in order to make the next two requirements work. 
Heres the next issue: I now need to get the code to recongize if quantity 0 should be rejected by validation and unitPrice 'twelve' should produce a controlled error
I forgot to change them off const, meaning it was stuck saying the same thing, once removed it got running
