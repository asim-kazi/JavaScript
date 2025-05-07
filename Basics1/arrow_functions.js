// const user = {
//     username : "Asim",
//     age : 21,

//     welcome_msg : function(){
//         console.log(`${this.username}, welcome to our website`);
//     }
// }

// user.welcome_msg()
// user.username = "Mehfooz"
// user.welcome_msg()

// console.log(this);      //it gives -> {} (that is it gives empty object whwn it is in global)

// function chai(){
//     let username = "Asim"
//     console.log(this.username);     //it gives -> undefined (it not work in funtion it works only in object)
// }

// const chai = function(){
//         // let username = "Asim"
//         // console.log(this.username);     //it gives -> undefined (it not work in funtion it works only in object)
// }

//------------Now Its Time to Arrow Funtion-----------------

// const chai = () => {        //remove function and after paranthesis add => thats it...but in this function also it not wrok

//     let username = "Asim"
//     console.log(this.username);
//     console.log(this);
// }

// chai()

//---------Syntax of arrow Function------------

// () => {} 

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }

// console.log("Sum of Two Number is : " , addTwo(5 , 4));

//It is also written as 

// const addTwo = (num1 , num2) => num1 + num2;    //It is known as Implicit return we don't need of paranthesis and return keyword..
// //And when we use {} -> then we should use "return" keyword, but when we use () -> then we no need to use this "return" keyword
// console.log("Sum of Two Number is : " , addTwo(5 , 4));

// const addTwo = (num1 , num2) => (num1 + num2); //And when we use {} -> then we should use "return" keyword, but when we use () -> then we no need to use this "return" keyword
// console.log("Sum of Two Number is : " , addTwo(5 , 4));

//Why we use () after arrow funtion -> when we use Objects

// const addTwo = (num1 , num2) => {username : "Asim"} //When we declare like this then it gives -> undefined , therefore we use ()

const addTwo = (num1 , num2) => ({username : "Asim"})   //It gives actual response i want

console.log(addTwo(4, 5));

//Where we use this things:
// e.g :

const myArray = [2, 3, 4, 5, 6, 7]
myArray.forEach(() => {})
myArray.forEach(function(){})