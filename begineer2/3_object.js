//singleton -->when object is created by using constructor
//Object.create

//in this file only we create object using object literal

const mySym=Symbol();

const user={
    "name":"Bajrang",
    age:20,
    skills:null,
    passion:undefined,
    mySym : "mykey1"
}

// console.log(user.name);
// console.log(user["age"]);
// console.log(user);
// user.name="Ram";
// Object.freeze(user);
// user.name="Bajrang";
// console.log(user)

user.greeting=function(){
    console.log("Hello JS users");
}
user.greetingtwo=function(){
    console.log(`hello ${this.name}`);
    return 3;
}

// console.log(user.greeting);
// console.log(user.greeting());
// console.log(user.greetingtwo());
// user.greetingtwo();

