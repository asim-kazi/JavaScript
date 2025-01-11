// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Asim",
    "full name": "Asim Kazi",
    [mySym]: "mykey1",
    age: 21,
    location: "Ichalkaranji",
    email: "asim@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "asim@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "asim@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());