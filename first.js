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
const ans = 0
for (let i = 0; i < 10; i++) {
    console.log(i)
    ans = ans + i

}

console.log(ans)
