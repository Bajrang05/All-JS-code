//for of
//for in
//for each

const myarr=[1,2,3,4,5,,6];

for(const num of myarr){
    if(num==undefined) continue;
    // console.log(num);
}

for(const num in myarr){
    // console.log(myarr[num]);
}

myarr.forEach(  (elements,yo,arr) =>{
    // console.log(`elements ${elements}, ${yo},${arr}`)
})


const arr=[
    {
        name:"bajrang",
        skill:null,
        passion:undefined
    },
    {
        name:"anuj",
        skill:"core & advanced java",
        passion:"army"
    },
    {
        name:"aditya",
        
        passion:"director"
    }
]

arr.forEach( (value)=>{
    console.log(`Name is ${value.name}`);
    console.log(`Skill is ${value.skill}`);
    console.log(`passion is ${value.passion}`);
    console.log(" ");
})

const yo=[];
arr.forEach((value)=>{
    yo.push(value);
})


for(const value in yo) console.log(yo[value]);