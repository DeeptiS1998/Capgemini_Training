"use strict";
let names = ["Niall", "Liam", "Louis"];
let myArr = [];
const myFun = (arr) => {
    for (let i of arr) {
        let myObj = { name: i, length: i.length };
        myArr.push(myObj);
    }
    return myArr;
};
const temp = myFun(names);
console.log(temp);