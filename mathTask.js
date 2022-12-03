/** @format */

//Task 1
const squareSide = 9;
function findDiagonal() {
  console.log("the diagonal is: " + squareSide * Math.sqrt(2));
}
findDiagonal();

//Task 2
const side1 = 5;
const side2 = 6;
const side3 = 7;
function findArea() {
  console.log("the area is: " + (side1 * side2) / 2);
}
findArea();

//Task 3
const P = Math.PI;
const RADIUS = 4;
function findCircumfernce() {
  console.log("the circumference is: " + 2 * P * RADIUS);
}

function findSurface() {
  console.log("the surface is: " + (P * RADIUS ** 2) / P + " Pi");
}

findCircumfernce();
findSurface();

//Loops
function larger(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is larger");
  } else if (num1 < num2) {
    console.log(num2 + " is larger");
  } else {
    console.log("its equal");
  }
}
larger(2, 4);

function oddOrEven(num) {
  if (num % 2 == 0) {
    console.log("the number is even");
  } else {
    console.log("the number is odd");
  }
}
oddOrEven(4);
