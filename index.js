// ****************************objects************************
// 1.Fix the attempts to access values in the person object:

var key = "name";
var person = {
  name: "Alyssa P. Hacker",
  age: 26,
  hometown: "somewhere",
};
person[age]; // => 26
person.key; // => "Alyssa P. Hacker"

//2.Write a function fullName that takes a person object as an argument, and returns that person's full name as a string. By person object, we mean an object that has the structure of the object you created to represent yourself above, for example:
var alyssa = {
  name: {
    first: "Alyssa",
    middle: "P.",
    last: "Hacker",
  },
  age: 26,
};

function fullName(person) {
  // TODO: your code here
}

fullName(alyssa); // => "Alyssa P. Hacker"

//   Your fullName function should work correctly regardless of whether or not the person has a middle name -- if it doesn't produce the output shown above when given the object {name: {first: "John", last: "Doe"}}, fix it so that it does.

//3. We often deal with arrays of objects; below is an example of an array of objects, where each object represents a person:
var people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 },
];
//i.   Add the object representing yourself to this array of people (if your name key does not have the same "shape" as the ones above, make sure you change it to look like these).
// ii   .Write a function that, when passed an array of people (person objects) as an argument, returns an array of their full names. Can you make use of your fullName function here?
// ii.   Write a function that finds the average age of the people array.

// 4.Write a function countWords that, when given a string as an argument, returns an object where keys are the words in the string, and values are the number of occurrences of that word within the string:
function countWords(s) {
  // ...
}
countWords("hello hello"); // => {"hello": 2}
countWords("Hello hello"); // => {"Hello": 1, "hello": 1}
countWords("The quick brown"); // => {"The": 1, "quick": 1, "brown": 1}
//5. Write a function select that accepts two arguments: an object and an array. The array should contain names of keys that will be selected from the object:
function select(obj, keys) {
  // ...
}
select({ a: 1, b: 2, c: 3 }, ["a"]); // => {a: 1}
select({ a: 1, b: 2, c: 3 }, ["a", "c"]); // => {a: 1, c: 3}
select({ a: 1, b: 2, c: 3 }, ["a", "c", "d"]); // => {a: 1, c: 3}
// exercise N°3
// Write a function sumBy that accepts two arguments: an array of numbers and a function. The function will be invoked upon each element in the array, and its result will be used to compute the sum.
//
function sumBy(numbers, f) {
  // ...
}
let numbers = [1, 2, 3, 4];
sumBy(numbers, square); // => 30
sumBy(numbers, cube); // => 100
sumBy(numbers, function (number) {
  return number * 4;
});
// => 40

//   exercise N°4
// Write a function doubleAll that takes an array of numbers as a parameter and returns an array of all of those numbers doubled:
function doubleAll(numbers) {
  // ...
}
doubleAll([1, 3, 10, 4, 7]); // => [2, 6, 20, 8, 14]
//   exercise N°5
// Write a function uppercaseAll that takes an array of strings as a parameter, and returns an array of all of those strings, but transformed to upper case. You can use toUpperCase to convert a string to upper case.
"hello, world".toUpperCase(); // => "HELLO, WORLD"
//  exercise N°6
// 1.Write a function called evens that takes an array of numbers as a parameter, and returns an array of only the even numbers in the parameter.

// 2.Write a function called multiplesOfThree that takes an array of numbers as a parameter, and returns an array of only the numbers that are multiples of three.

// 3.Write a function called positives that takes an array of numbers as a parameter, and returns an array of only the numbers that are positive.

// 4.Write a function called evenLength that takes an array of strings and returns an array of only the strings with an even length.

// 5.At this point, you should notice a pattern; write a function called filter that takes two parameters: an array and a function that, when invoked with an argument, will return true or false. filter should return a new array of only the elements for which the function returns true:

function filter(array, f) {
  // ...
}
filter([1, 2, 3, 4], function (x) {
  return x % 2 === 0; // x is even?
}); // => [2, 4]
//   exercise N°7
// Use filter to write/rewrite:

// odds
// positives
// negatives
// evenLength
// largerThanSix (given an array of numbers, returns those larger than 6)
// exercise N°7
// Using filter, write a function startsWithChar that accepts two parameters: an array of strings, and a character (e.g. "a"), and returns an array of only the strings that start with that character:
function startsWithChar(strings, character) {
  // ...
}
var words = "the quick brown fox jumps over the lazy dog".split(" ");
startsWithChar(words, "q"); // => ["quick"]
startsWithChar(words, "t"); // => ["the", "the"]
