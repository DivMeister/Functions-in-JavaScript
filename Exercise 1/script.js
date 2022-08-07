"use strict";

// How JavaScript changed my perspective of IT.

// Different approaches on how to use funtions in JavaScript

const heading = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
// Common method:
function reverseString(someText) {
  let reverse = "";
  for (let i = someText.length - 1; i >= 0; i--) {
    reverse += someText[i];
  }
  return reverse;
}

// With function Expressions:
// Function expressions let you define functions as variables
const isPalindrome = function (someText) {
  console.log(reverseString(someText));
  if (reverseString(someText) == someText) {
    h3.textContent = `The string ${someText} is a palindrome!`;
  } else {
    h3.textContent = `The string ${someText} is not a palindrome!`;
  }
};

// With Arrow functions;
document
  .querySelector("body")
  .addEventListener("click", () => (h3.textContent = "JavaScript is fun!"));

const string = prompt("Enter any string: ");
h2.textContent = `The reverse of ${string} is: ${reverseString(string)}`;
isPalindrome(string);

// This is a cool project. Did not know there are different ways of calling a function ! 
const add = (num1, num2) => num1 + num2;
console.log(add(1,2));