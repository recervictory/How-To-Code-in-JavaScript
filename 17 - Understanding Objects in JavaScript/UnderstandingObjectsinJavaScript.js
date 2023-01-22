// Initialize greeting function
function greet() {
	console.log("Hello, World!");
}
greet()

// Initialize custom greeting function
function greet(name = "India") {
	console.log(`Hello, ${name}!`);
}

greet('Victor');

// Initialize add function
function add(x, y) {
	return x + y;
}

// Invoke function to find the sum
add(9, 7);

//! Arrow Functions

// Define multiply function
const multiply = (x, y) => {
	return x * y;
}

// Invoke function to find product
console.log(multiply(30, 4));

// Define square function with single parameter
const square = x => {
	return x * x;
}

// Invoke function to find product
console.log(square(8));
