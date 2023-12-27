// Task 1
console.log("Task 1: ");
let a = 7, b = 9;
console.log(a * b);

// Task 2
console.log("Task 2: ");
let c = 7, d = 9;
document.write(c / d);

// Task 3
console.log("Task 3: ");
let e = 3, f = 5;
document.write(e + f);

// Task 4
console.log("Task 4: ");
let e1 = '3', f1 = 5;
document.write(e1 + f1); 

// Task 5
console.log("Task 5: ");
let e2 = 3, f2 = 0;
document.write(e2 / f2);

// Task 6
console.log("Task 6: ");
let e3 = 3, f3 = 'Hello';
document.write(e3 + f3); 

// Task 7
console.log("Task 7: ");
let e4 = 3, f4 = 'Hello';
document.write(e4 * f4); 

// Task 8
console.log("Task 8: ");
function task8() {
    let inputValue = document.querySelector('.i-8').value;
    document.querySelector('.out-8').innerText = inputValue;
    document.querySelector('.i-8').value = ''; 
}

// Task 9
console.log("Task 9: ");
function t9() {
    let inputValue = document.querySelector('.i-9').value;
    document.querySelector('.out-9').innerText = inputValue;
    document.querySelector('.i-9').value = ''; 
}

// Task 10
console.log("Task 10: ");
function t10() {
    let inputValue = document.querySelector('.i-10').value;
    document.querySelector('.out-10').innerText = inputValue * 20;
    document.querySelector('.i-10').value = ''; 
}

// Task 11
console.log("Task 11: ");
function t11() {
    let inputValue = document.querySelector('.i-11').value;
    document.querySelector('.out-11').innerText = inputValue + '55';
    document.querySelector('.i-11').value = ''; 
}

// Task 12
console.log("Task 12: ");
function t12() {
    let firstName = document.querySelector('.i-12-1').value;
    let lastName = document.querySelector('.i-12-2').value;
    document.querySelector('.out-12').innerText = 'Hello ' + firstName + ' ' + lastName;
    document.querySelector('.i-12-1').value = '';
    document.querySelector('.i-12-2').value = ''; 
}

// Task 13
console.log("Task 13: ");
function t13() {
    let a = parseFloat(document.querySelector('.i-13-1').value);
    let b = parseFloat(document.querySelector('.i-13-2').value);
    document.querySelector('.out-13').innerText = a + b;
    document.querySelector('.i-13-1').value = '';
    document.querySelector('.i-13-2').value = ''; 
}

// Task 14
console.log("Task 14: ");
function t14() {
    document.querySelector('.i-14').value = 'Go';
}

// Task 15
console.log("Task 15: ");
function t15() {
    document.querySelector('.i-15').style.border = "4px solid red";
}

// Task 16
console.log("Task 16: ");
function t16() {
    let inputValue1 = document.querySelector('.i-16-1').value;
    let inputValue2 = document.querySelector('.i-16-2').value;
    document.querySelector('.out-16').innerText = inputValue1 + inputValue2;
}

// Task 17
console.log("Task 17: ");
function t17() {
    let inputValue = document.querySelector('.i-17').value;
    document.querySelector('.out-17').innerText = inputValue;
}

// Task 18
console.log("Task 18: ");
function t18() {
    let inputValue = document.querySelector('.i-18').value;
    document.querySelector('.out-18').innerText = parseFloat(inputValue);
}

// Task 19
console.log("Task 19: ");
function t19() {
    let a = parseFloat(document.querySelector('.i-19-1').value);
    let b = parseFloat(document.querySelector('.i-19-2').value);
    document.querySelector('.out-19').innerText = a + b;
}

// Task 20
console.log("Task 20: ");
let clickCount = 0;
function t20() {
    clickCount++;
    document.querySelector('.out-20').innerText = clickCount;
}