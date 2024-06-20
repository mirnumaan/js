console.log("hello world")

var a = 1; // here i am declaring a variable a and assigning a value 1 to it 
a = 2 ; 

const b = 2; // here i am declaring a constant b and assigning a value 2 to it
// b =2 ; // here i am trying to update the value of b but it will throw an error because we can't update the value of a constant variable

// here i am updating the value of a from 1 to 2

console.log(a)
console.log(b) // here i am trying to print the value of b but it will throw an error because we can't update the value of a constant variable


let firstName = "numaan";
let age = 20;
let ismarried = false;
console.log("my name is "+firstName)
console.log(firstName)


// print to the name is numaan and age is 20 and is married is false (assognment )

if (ismarried){
    console.log("my name is "+firstName+" and age is "+age+" and is married is "+ismarried)
}else {
    console.log("my name is "+firstName+" and age is "+age+" and is not married ")
}

//  end if solution

// for loop concept
let ans = 0
for (let i = 0; i < 10; i++) {
    console.log("value of i os "+i)
    ans = ans + i
    console.log ("new value of ans is "+ans)

}

console.log(ans)

// learning the concept of arrays 

const arr = ["numaan", "raman", "shubham"]
console.log(arr[0])

function printMax(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let maximum = printMax(arr1)
console.log(maximum)


// complex objects 
const person = [{
    name: "numaan",
    age: 20,
    ismarried: true,
    hobbies: ["coding", "gaming", "reading"],
    address: {
        street: "123 main street",
        city: "delhi",
        state: "delhi"
    }
},
{
    name: "raman",
    age: 21,
    ismarried: false,
    hobbies: ["coding", "gaming", "reading"],
    address: {
        street: "123 main street",
        city: "delhi",
        state: "delhi"
    }
},
{
    name: "shubham",
    age: 22,
    ismarried: true,
    gender : "female",
    hobbies: ["coding", "gaming", "reading"],
    address: {
        street: "123 main street",
        city: "delhi",
        state: "delhi"
    }
}
]

for (let i = 0; i < person.length; i++) {
    if (person[i]["gender"]=="female") {
        console.log(person[i].name + " is married")
    }
}

// functions in javascript

function add(a, b) {
    return a + b

}

const value = add(2, 3)
console.log(value)


// callbacks 

function sum(num1,num2, displayresult)
{    let result = num1 + num2
    return displayresult(result,displayresultPassive)
}

function displayresult(data,displayresultPassive){
    console.log("the sum here is equals " + data)
    displayresultPassive(data)

}

function displayresultPassive(data){
    console.log("here i am displaying the passive data "+data)
}

sum(2,3,displayresult)
// displayresult(sum(2,3,displayresult),displayresultPassive)

// set timeout function

function display(a){
   return console.log("hello world"+a)
}

display(2)
function display1(a){
    console.log("hello world" +a)
}

display1(a)

setTimeout(display,3*1000)