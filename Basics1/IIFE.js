//Immediate Envoked Funtion Expression

// function chai(){
//     console.log("DB Connected");
    
// }
// chai()   //It is ok, but when a globle concept then to avoid this pollution we use IIFE

//Syntax of IIFE
// ()()

(function chai(){
    console.log("DB Connected");
})();       //fuction is written in () and Immediately call this fun by using () and donot forget to give the semicolon ";"...And it is known as Named IIFE

// we are use this in arrow fucntion also
( () => {
    console.log("Second DB also connected");
} )();

    //It is known as Simple IIFE

( (name) => {
    console.log(`DB Name is ${name}`);
} )("myDB")