/* Closure-- whenever we have a function inside another function, than we can say that the inner function is making a closure with its outer function.
Now the variable which is declared in outer function is accessible in inner function as well.Please find the example below
 */

function a(){
    let x=10;
    console.log(x);
    function b(){
        console.log(x)
    }
    b();
}

a() // Output will be 10,10

// If we look at above example function b is making closure with function b. x varibale which is declared in function a is accessible in function b as well