const marval_heroes=["thor","ironman","hulk"];
const dc_heroes=["superMan","Batman","Joker"];

// console.log(marval_heroes.concat(dc_heroes));

// marval_heroes.push(dc_heroes);

// console.log(marval_heroes);

const all_heroes=[...marval_heroes,...dc_heroes];
console.log(all_heroes);


console.log(Array.isArray("hitesh"));

console.log(Array.from("hitesh"));

const arr=[1,2,[3,4,[5,6]]];
const newd=arr.flat(2);
console.log(newd);

const score1=100;
const score2=200;
const score3=300;

console.log(Array.of(score1,score2,score3));

const new_=[1,2,3,[4,5,6]];
const new1_=[4,[5,6],[6,8]];

const new3_=[...new1_,...new_].flat();

console.log(new3_);