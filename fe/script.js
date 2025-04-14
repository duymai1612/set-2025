// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log("Count:", i);
}

console.log("--------------------------------");

// Loop through array
let fruits = ["apple", "banana", "orange"];
console.log("Fruits:", fruits[0]);
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}

console.log("--------------------------------");

// For...of loop (modern way)
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// ==============
let target = Math.floor(Math.random() * 10) + 1;
let guess = 0;
while (guess !== target) {
    guess = Number(prompt('Đoán số (1-10):'));
    if (guess < target) console.log('Thấp quá!');
    if (guess > target) console.log('Cao quá!');
}
console.log('Chính xác!');