const user={
    email:"abc@dm.com",
    fullname:{
        firstName:"yo",
        lastName:"iiiuueee",
    },
    id:12345
};

const newuser={
    email:"yyo",
    id:1234
};

// const obj3=Object.assign({},user,newuser);
// console.log(obj3);
// console.log(user);
const obj4={ ...user, ...newuser};
console.log(obj4);