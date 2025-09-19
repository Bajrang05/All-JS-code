//in typeconversion first need to specify which type and the first letter should be capital
let score=undefined

let valueInNumber=Number(score)
// console.log(typeof score);
// console.log(typeof valueInNumber);

// console.log(valueInNumber);

//there is issue in javascript whenever there is typecoverion occur it may not give proper ans

//"33"=>33 --->int
//"33jd"=>NaN(not a number) --->string
//null=>0 
//undefined=>NaN
//true=>1 false=>0


let isPopular=true;

let value=Number(isPopular);

// console.table([value,typeof value]);


//that for all keep doing and keep exploring



/*******************operation****************** */

let x=30;
let y=x++;
console.log(x+" "+y)

let a=0;
let b=++a;
console.log(a,b)

// console.log(null >=0);
// console.log(null==0);

// console.log(undefined==0);
// console.log("2"==2);

//dont write the above code it is waste of time and no logic build

let arr=[3,4,5,6,7];
console.log(typeof arr);

let myFunction=function(){
    console.log("hello world")
}
console.log(typeof myFunction);

let userOne={
    email:"yelurebajrang@gmail.com",
    pass:"iiiiiuuuueeee"
}
let userTwo=userOne;
console.log(userOne);
userTwo.email="bajrangyelure05";

console.log(userOne);
console.log(userTwo);