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

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter UserName");
        return
    }
        return `${username} Is Logged in...`
    }
    
    console.log(loginUserMessage());
    console.log(loginUserMessage("Asim"));