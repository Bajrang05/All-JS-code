const books=[
    {
        title:"book one", year:2021 , update:0
    },
        {
        title:"book two", year:1990 , update:1
    },
        {
        title:"book three", year:1991 , update:3
    },
        {
        title:"book four", year:1992 , update:-4
    },
        {
        title:"book five", year:1993 , update:-1
    },
        {
        title:"book six", year:1994 , update:1
    }
];

const afterFilter=books.filter( (bk)=>bk.year>=1990 && bk.update >=2024 && bk.title=='book one');
// console.log(afterFilter);

const arr=[1,2,3,4,5,6];
arr.forEach((value)=>console.log(value+10));
const newarr=arr.map( (value)=>value+10).map( (value)=>value*10).filter( (value)=>value>130); //--> this is called chaining...
console.log(newarr);

const totalYears=books.reduce((acc,obj)=>acc+obj.update*obj.year,0);
console.log(totalYears);


const shopingcart=[
    {
        title:"pen",quntity:1,price:10
    },
    {
        title:"pencile",quntity:10,price:10
    },
    {
        title:"pan",quntity:2,price:100
    },
    {
        title:"bluethooth",quntity:5,price:1000
    }
]

const price_to_pay=shopingcart.reduce((acc,items)=>acc+items.price*items.quntity,-300);
console.log(price_to_pay);
const b=3;
const value=((a,b)=>a+b)(2,b);
console.log(value);