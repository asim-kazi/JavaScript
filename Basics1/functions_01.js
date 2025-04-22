function sayMyName(){
    console.log("Asim");
    console.log("Kazi");    
}

// sayMyName()

// function addTwoNum(a, b){
//     console.log("Sum of two Number is ", a + b);
// }
// addTwoNum(3, 4);
// addTwoNum(3, "4");
// const result = addTwoNum(3, 4);
// console.log("Result Value : ",result);      //It does not return anything because we we does not return anything in function if we return then it print 

// function addTwoNum(a, b){
//     let res = a + b;
//     console.log("Result : ",res);
//     console.log("Asim");
//     return res;
//     console.log("kazi");        //Can't print after return funtion
// }

// addTwoNum(5, 5);

// function loginUserMessage(username){
//     return '${username} Is Logged in...'
// }

// console.log(loginUserMessage("Asim"));

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter UserName");
//     }
//     return `${username} Is Logged in...`
// }

// console.log(loginUserMessage("Asim"));

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter UserName");
//         return
//     }
//         return `${username} Is Logged in...`
// }
    
    // console.log(loginUserMessage());
    // console.log(loginUserMessage("Asim"));

// function calculateCartPrice(num1){
//     return num1;
// }

// console.log(calculateCartPrice(2));

function calculateCartPrice(...num1){       //(...)Three dots is known as rest operator and spread operator it is used when there are multiples numbers to (e.g : add to cart) 
// rest operator is used when all items are separate separate and we want to combine them...
    return num1;
}

// console.log(calculateCartPrice(200,300,400));
// console.log(calculateCartPrice(200,300,400,50,600));

function calculateCartPrice(val1, val2, ...num1){       //Now when funtion call then first value is taken by val1 and 2nd value is taken by val2 and rest of the values are taken by num1...
    return num1;
}

// console.log(calculateCartPrice(200,300,400,50,600));


//Use of objects in function 

const user = {
    username : "Asim",
    price : 199,
}

function handleObjects(anyObject){
    console.log(`Username is ${anyObject.username} and Price is  ${anyObject.price}`);
}

// handleObjects(user);
// handleObjects({
//     username : "Kazi",
//     price : 299
// });


//Use of Arrays in Function

const myNewArray = [200,300,400,500,600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray
));
console.log(returnSecondValue([400,500,600]
));
