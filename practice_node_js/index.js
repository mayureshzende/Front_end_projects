// const express = require("express");

// let user = [];

// app = express();
// app.use(express.json());
// app.get("/", (req, res) => {
//   res.json("hello there!");
// });
// app.listen(3000, () => console.log("localhost running on port:3000"));

// let arr = [2, 4, 1, 3, 4, 0];
// console.log(arr.sort((a, b) => b - a));

// revising let  , var , const

// console.log(a);
var a = 10;

// console.log("value of a ", a);

// console.log(b);
let b = 10;
// console.log("value of b", b);

const obj = {
  name: "mayur",
  age: 28,
  greet: function () {
    console.log("hello", this.name);
  },
};

// console.log(obj);

// obj.greet();

let sum = (num1, num2) => {
  return num1 + num2;
};

// console.log(sum(2, 3));

let arr = [2, 3, 4, 1, 12];

// arr.push("hello");
// console.log(arr);

// let rem_ele = arr.shift();
// console.log(rem_ele);
// console.log(arr);

// let popelem = arr.pop();
// console.log(popelem);
// console.log(arr);

// arr.unshift("firstele");
// console.log(arr);

// arr.splice(3, 0, "splice");
// console.log(arr);

// anynonums function

// let sampleFunction = function (name = "defafult") {
//   console.log("this is a anonyms function");
//   return 0;
// };

// setTimeout(() => {
//   console.log("logging this after 1sec");
// }, 100);
// console.log(sampleFunction());

// const obj1 = [
//   {
//     id: 1,
//     name: "test1",
//     price: 200,
//   },
//   {
//     id: 2,
//     name: "two2",
//     price: 221,
//   },
//   {
//     id: 3,
//     name: "three",
//     price: 3200,
//   },
//   {
//     id: 4,
//     name: "four",
//     price: 400,
//   },
// ];

// let items = obj1.filter((val) => val.price > 220);
// console.log(items);

// onjects

// let object = {};
// object.name = "firstName";
// object.ht = 180;

// console.log(object);

// creating using new

let newobj = new Object();
// console.log(newobj);

// create using create

// let PersonPrototype = {
//   Name: "name atr",
// };

// let mayur = Object.create(PersonPrototype);
// console.log(mayur);
// mayur["age"] = 20;
// console.log(mayur.Name);
// console.log(mayur);

// using iterator to create a obj

// let itrObj = { name: "name", age: 20, ht: 189 };
// let cpyObj = {};

// for (val in itrObj) {
//   cpyObj[val] = itrObj[val];
// }

// console.log(cpyObj);

// using spread operator

// let sprdObj = { name: "name", ht: 180 };
// let newSprdObj = { ...sprdObj };
// console.log(newSprdObj);

// using assign keyword

// let assObj = { name: "name", ht: 180 };

// let newAssObj = Object.assign({}, [assObj, { isWorking: true }]);

// console.log(newAssObj);

// for (val in newAssObj) {
//   console.log(newAssObj[val]);
// }

// functions callback

// function processData(callback) {
//   setTimeout(() => {
//     const data = "Data fetched successfully";
//     callback(data);
//   }, 2000);
// }

// function showData(data) {
//   console.log("Data processed successfully:", data);
// }

// processData(showData);

// map method

// const students = [
//   { name: "Mayank", age: 21 },

//   { name: "Love", age: 24 },

//   { name: "Pranay", age: 18 },
// ];

// let names = students.map((s) => s.name);
// console.log(names);

// const array = new Uint32Array(1);
// console.log(array);
// const randomNum = crypto.getRandomValues(array);

// console.log(randomNum);

// math random

const randomNum = Math.random();
// console.log(randomNum * 100000);

const absNum = Math.abs(-123123.12);
// console.log(absNum); // return negative number to positive

const srtNum = Math.sqrt(25);
// console.log(srtNum % 1 == 0);

const numPow = Math.pow(2.5, 3);
// console.log(numPow);

const numfloor = Math.floor(2.9);
// console.log(numfloor);

const numCeil = Math.ceil(2.2);
// console.log(numCeil);

const numRound = Math.round(2.6);
// console.log(numRound);

const numMin = Math.min(10, 2, 4, 5, 1);
console.log(numMin);
