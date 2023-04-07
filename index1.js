//For Loop
//When we have to execute a block of code repeatedly we use For loop. Below implementation of For Loop

// Execution
let arr =[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
for(let i=0;i<arr.length;i++){
    if(arr[i] % 2===0){
        console.log(arr[i]);
    }
}

// A vrry useful way to iterate through a for loop is an array can be Array.forEach
//Execution

arr.forEach((element,index)=> console.log(element));

// While Loop
//While loop loops through a block of code as long as a specified condition is true

let arr1 = [1,2,3,4,5]
let j = 0;
while (j < arr1.length) {
  console.log(arr1[j]);
  j++;
}

// If Condition(block)
//The if statement is used to execute a block of code if a certain condition is true.

// Else statement:
// The else statement is used to execute a block of code if the condition in the if statement is false. The syntax for the else statement is as follows:

let k = 2
if(k%2==0){
    return true;
}
else{
    return false;
}


