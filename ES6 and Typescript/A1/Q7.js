"use strict";

let arr = [1, 2, 3, 4];
let [a, b, c, d] = arr;
console.log(c);

let myOrg = {
    name: "The Organisation",
    address: {
        city: "The City",
        country: "India",
        pin: 144103,
    },
};
let { address: { pin }, } = myOrg;
console.log(pin);