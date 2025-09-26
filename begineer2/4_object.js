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
// console.log(obj4);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


const {id:user_id,fullname:name,email:user_gmail,gender="male"}=user;
console.log(user_id);
console.log(gender);
console.log(user);
const {id,email}=newuser;
console.log(email);