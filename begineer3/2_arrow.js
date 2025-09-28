
// const user={
//     name:"omkar",
//     lpa :34,
//     welcomemessage:()=>{
//         console.log(`${this.name} , hello your package is ${this.lpa}`);
//     }
// }

// user.welcomemessage()


// const user={
//     name:"omkar",
//     lpa :34,
//     welcomemessage:function(){
//         console.log(`${this.name} , hello your package is ${this.lpa}`);
//         return null;
//     }
// }

// console.log(user.welcomemessage());

// console.log(this);

const yo=()=> ({
    name:"omkar",
    lpa :34,
    welcomemessage:()=>{
        console.log(`${this.name} , hello your package is ${this.lpa}`);
    }
}); 


console.log(yo());


