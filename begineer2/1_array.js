const myarr=[1,2,3,4,5];

// myarr.push(8);
// myarr.pop();
// myarr.shift();
myarr.unshift(4);

// console.log(myarr);
// console.log(myarr.length)

// const newArr=myarr.slice(1,3);
console.log(myarr);
// console.log(newArr);
myarr.sort();
console.log(myarr);
const newArr2=myarr.splice(1,3);

console.log(newArr2);
console.log(myarr);
