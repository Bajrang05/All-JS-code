//in typeconversion first need to specify which type and the first letter should be capital
let score=undefined

let valueInNumber=Number(score)
console.log(typeof score);
console.log(typeof valueInNumber);

console.log(valueInNumber);

//there is issue in javascript whenever there is typecoverion occur it may not give proper ans

//"33"=>33 --->int
//"33jd"=>NaN(not a number) --->string
//null=>0 
//undefined=>NaN
//true=>1 false=>0


let isPopular=true;

let value=Number(isPopular);

console.table([value,typeof value]);


//that for all keep 