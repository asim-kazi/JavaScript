const course = {
    name: "Js Tutorial",
    price: "999",
    cousrseInstructor : "Asim"
};

// console.log(course.cousrseInstructor);
// course.cousrseInstructor             //It is right but when we want to clean our code and use multiple times in code then we use : ==>
// const {cousrseInstructor} = course      //Basicallt it is used
// console.log(cousrseInstructor);
//When we want to change the name of courseInstructor - to - Instructor then : ==>
const {cousrseInstructor : Instructor} = course
console.log(Instructor);

//This de-structure is used in React
//e.g: ==>
// const navbar = ({company}) => {         // props.company we use ==> {company} 

// }
// navbar(company = "Mubarak Traders");

// ======================================================
//API

// {
//     "name" : "Asim Kazi",
//     "coursename" : "JS Tutorial",
//     "price" : "Free"
// }                                    //JSON files are like this OR this 

// [
//     {},
//     {},
//     {}
// ]                                       //In the form of Array


//Check out this : https://randomuser.me/api/
//And checkout by using converter : https://jsonformatter.org/ and Format-beauty check for Trees....

