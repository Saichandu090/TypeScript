//String DataType
let fName : String;
fName="sai chandu";
let newName=fName.toUpperCase();
console.log(newName);


//number DataType
let age : number;
age=21;
let dob="25";
let newAge=parseInt(dob);
console.log(newAge);


//boolean DataType - Should be initialized in typescript as no default value is there for boolean
let isValid : boolean
isValid=false
console.log(isValid)


//Array DataType
let myArray : String[]
myArray=["Sai","chandu","jenny","vamsi"]
console.log(myArray)

let numList :  Array<number>; // Generic declaration
numList=[1,2,3,3,5,6,87]

let result=numList.filter((num)=>(num%2==0)) // Filtering the numbers which are only even from numList and storing in result.
console.log(result)

let num=numList.find((num)=>(num===3)) // === operator only returns single variable ,If finds returns the find value or else returns undefined
console.log(num) 

let sum=numList.reduce((acc,num)=>acc+num) // reducing the array to its sum of total elements
console.log(sum)


//enums
const enum Color  // making the enum as const makes the compiled code in JS easy to read and display for production.
{
    Red,
    Green,
    Blue
} // enum contain index and it starts from 0 and increases acc to their order

let c : Color =Color.Green; // This is how we access the enum
console.log(c)


//tuples
let mynumbs : [number,number]

function swapNumbers(nums1:number,nums2:number) : [number,number]{
    return [nums2,nums1];
}

mynumbs=swapNumbers(10,20)

mynumbs[0]
mynumbs[1]
// mynumbs[2] -> The advantage of tuple is it wont allow to access more than its length in compile time. but array wont 
console.log(mynumbs)


//any 
let department; // If not provided any datatype by default it will assign any datatype or else we can provide explicitly also 
department="IT"
department=10
department=false
console.log(department)
// Never use any datatype always use type safety by adding required data type to the variables


