//date and time only basic learing how to create or some other method

let mydate=new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString())

// let myCreatedDate=new Date(2025,12,3);
// console.log(myCreatedDate.toLocaleDateString());

let myCreatedDate=new Date("12/09/2025");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();
console.log(Math.floor(myTimeStamp/1000));
let newDate=new Date();
console.log(newDate.getFullYear());
