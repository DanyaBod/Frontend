// Задача 1
function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}

// Задача 2
function rectangleArea(length, width) {
    return length * width;
}

// Задача 3
function trianglePerimeter(side1, side2, side3) {
    return side1 + side2 + side3;
}

// Задача 4
function triangleArea(base, height) {
    return (base * height) / 2;
}

// Задача 5
function squarePerimeter(side) {
    return 4 * side;
}

// Задача 6
function squareArea(side) {
    return side * side;
}

// Задача 7
function power(base, exponent) {
    return Math.pow(base, exponent);
}


console.log(rectanglePerimeter(5, 8)); 
console.log(rectangleArea(5, 8)); 
console.log(trianglePerimeter(3, 4, 5)); 
console.log(triangleArea(6, 8)); 
console.log(squarePerimeter(4)); 
console.log(squareArea(4)); 
console.log(power(2, 3)); 