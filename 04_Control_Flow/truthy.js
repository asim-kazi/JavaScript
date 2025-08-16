const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values :
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {       // "Object.keys(emptyObj)" -> this convert into string and apply len property then check...
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// It is basically used to handle null and undefined values to donot confuse during projects..

let val1;
// val1 = 5 ?? 10           // It returns 5
// val1 = null ?? 10        // if null comes then it takes 10 which come from any other fucntion, but dont take null => 10
// val1 = undefined ?? 15    // same case not take undefined it gives => 15
val1 = null ?? 10 ?? 20        // Not recommended



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
// variable , conditon ,         if                ,     else
iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("less than 80")
