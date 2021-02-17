"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    name: "silvebeen",
    gender: "여자",
    age: 18,
};
var sayHi = function (person) {
    return "Hello " + person.name + " I am age " + person.age + " My gender is " + person.gender + " ";
};
console.log(sayHi(person));
