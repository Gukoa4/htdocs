"use strict";

let cache = [];

const memoizer = (func) => {
  return (e) => {
    const index = e.toString();
    if (cache[index] == undefined) {
      cache[index] = func(e);
    }
    return cache[index];
  };
};

const hacerBucle = (num) => {
  const a = 20;
  const b = 12;
  let c = 0;
  for (let i = num - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      c += a * b;
    }
  }
  return c;
};

console.log("sin memo");
let date = new Date();
console.log(hacerBucle(40000));
console.log(new Date() - date);
date = new Date();
console.log(hacerBucle(40000));
console.log(new Date() - date);
date = new Date();
console.log(hacerBucle(40000));
console.log(new Date() - date);

console.log("con memo");
const memo = memoizer(hacerBucle);

date = new Date();
console.log(memo(40000));
console.log(new Date() - date);
date = new Date();
console.log(memo(40000));
console.log(new Date() - date);
date = new Date();
console.log(memo(40000));
console.log(new Date() - date);