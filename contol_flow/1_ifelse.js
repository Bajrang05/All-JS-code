//in js all the flow is same as cpp
//the falsy and truthy value are there 

//flasy value 

//false , NaN , "" ,null ,undefined ,Bigint 0n , 0  -->except this all value are true

const value=203300;

if(value==500){
    console.log("yes");
}
else if(value>600){
    console.log("yes yes");
}
else{
    console.log("no");
}

switch(value){
    case value<100:
        console.log("value less than 100");
        break;
    case value>1000:
        console.log("yes value greater than 1000");
        break;
    case value==2000:
        console.log("value equal to 2-000");
    case 2000:
        console.log("yo");
        break;
    default:
        console.log("nooo");
        break;
}

const value3=400;

//ternary operator 

if(value3 ? value3>100 : value3>200){
    console.log("kfjsda;");
}
else{
    console.log("kdlfaj");
}


