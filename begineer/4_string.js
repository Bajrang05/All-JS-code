//in this lecture only working on different method provided by string

//string
const string="This This was use for practicing";
let name="anuj";
let name_='aditya';
let name__=`om`;
//this are the diffent method use to create a string 
let naMe=new String("RAM"); //--->this use to creat object 

// console.log(typeof naMe);
// console.log(typeof name);
// console.log(typeof name_);
// console.log(typeof name__);

/* -----------------Methods--------------- */

console.log(name_.length);

console.log(name_.toUpperCase());  //uppercase
console.log(naMe.toLowerCase());   //losercase

console.log(string.indexOf("was")); //index of
console.log(string.indexOf("T"));
console.log(string.lastIndexOf("This")) //last index

console.log(string.includes("pra"));  //check whether present or not

console.log(string.slice(-4,-1));
console.log(string.substring(0,4));
console.log(string.substr(4,8));

console.log(name.concat(" ",name_));
console.log(string.charAt(5));
console.log(string.replaceAll("This","Anuj"));