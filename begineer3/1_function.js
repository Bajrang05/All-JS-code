//we know that we can call the function without it declare in time of calling 
//we give so many arguments to fuction we need to store them use spread
//also we can create a function with name of varible or we store the fuction in varible


function printing_statements(){
    // console.log("iiiiiuuuueee");
}

printing_statements();
printing_statements();
const yo=printing_statements
// console.log(yo);


function addNumber(x,y, ...extra){
    console.log(x+y);
    console.log(`why you give extra value ${extra.join(" ")}`); //this not work
    console.log(...extra); //this work
    return  
}

const ans=addNumber(100,200,300,400,500,600,700);
console.log(ans);

const myarr=[100,200,300];
console.log(`array elements are ${myarr}`);


function display_object(getObject){
    console.log(getObject.id);
    console.log(getObject.name);
}

display_object({
    name:"yo",
    id:1234
});

function display_array(getArray){
    console.log(getArray);
}
display_array([100,23,45,"hitesh"]);

add();

function add(){
    console.log("hello word");
}

add();

const neg=function negative(num){
    console.log("yo");
    return num-1;
}
const va=neg(5);
console.log(va);
// console.log(neg(-5));


console.log(neg);
