// let a = 1;
// const b = 2;
// var c = 3;

// console.log(a);
// console.log(b);
// console.log(c);

// if (true) {
//     let a = 1;
//     const b = 2;
//     var c = 3;
// }

// console.log(a);
// console.log(b);
// console.log(c);     //when we try yo print the c then is print , but in professional way we do not want to print the variable value ouyside of the scope({})

//problem of var keyword

// var c = 3000;

// if (true) {
//     let a = 1;
//     const b = 2;
//     var c = 3;      //if you still not using var keyword before variable here but you use var outside of the scope then also the problem is created..
// }

// console.log(c);     //when other programmer declare value of c is 3000 and again other programmer use this same variable and it gives value as 3 then there will create a problem

// let a = 1000;

// if (true) {
//     let a = 1;
//     const b = 2;
//     console.log("Inner : ",a);      //It is differnt a variable
// }

// console.log(a);         //It is differnt a variable


function one() {
    const username = "Asim";
    
    function two(){
        const age = 20;
        console.log(username);
    }
    // console.log(age);
    two()
}

one()

if (true) {
    const name = "Asim"
    if (name === "Asim") {
        const age = 20;
        console.log(name + age);        
    }
    // console.log(age);
}
                                        //Both gives error
// console.log(name);



//+++++++++++++++ INTRSTING ONR +++++++++++++++++++++++++

console.log(addone(4));     //we can call this before this function

function addone(num){
    return num + 1;
}


// console.log(addtwo(4));     //But here if we call then it gives "Cannot access 'addtwo' before initialization" bcuz we store the function in a variable

const addtwo = function(num){
    return num + 2;
}

// addtwo(4)