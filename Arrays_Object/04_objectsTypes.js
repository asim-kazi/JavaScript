// const tinderUser = new Object;      //It is a singleton object 
const tinderUser = {}       //It is non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Asim";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email : "asim123@gmail.com",
    fullname : {                //Nested objects are allowed !!!
        userfullname : {        //Objects in object it is Allowed !!!
            firstname: "Asim",
            lastname: "Kazi"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.email);
// console.log(regularUser.fullname);
// console.log(regularUser.userfullname);      //It will give undefined we                                            use this nested dots eg.->
// console.log(regularUser.fullname.userfullname);  //Correct method to access object which is in nested object
// console.log(regularUser.fullname.userfullname.firstname);


// Merging of objects :
const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj3 = {5 : "a" , 6 : "b"}

// const obj4 = {obj1 , obj2 , obj3}       //From this we get this problem it take objects in objects Like an Array.

// const obj4 = Object.assign({} , obj1 , obj2 , obj3)  
// in that we take an empty object as TARGET ans any others objeccts as a SOURCE              
// assign(target: {}, source: any : any The target object to copy to.
// Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

//It is not basically used we by spreadoperator, in that first we spread the elements and put into object
// const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

// When values coming from Database ,values are such that :
const user = [
    {
        id : "123abc",
        email : "a@gmail.com"
    },
    {
        id : "123abc",
        email : "a@gmail.com"
    },
    {
        id : "123abc",
        email : "a@gmail.com"
    }
]

console.log(tinderUser);
// It is very intresting the datatypes of tinderUser is ARRAY ->
// console.log(Object.keys(tinderUser));       //It is very helpfull to apply loops or any operation on Array (Objects -> Array)
//Same for we do for values
// console.log(Object.values(tinderUser));
//USe for Entries -> Each key value is converted into Array 1st property is Key and 2nd property is value
console.log(Object.entries(tinderUser));

//Check the property is exist in the object or not ->
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLoggedOut'));

//For extra about Objects then goto chrome -> inspect -> console -> paste : const obj1 = {1 : "a" , 2 : "b"} and check the Prototypes
