// Program to check wheather a given number is Prime or not.
// Please enter a value in function as arguement and it will return true if that is prime else it will give false.
function isPrime(x){
    if(x<2){
        return false;
    }

    for(let i=2;i<x;i++){
        if(x%i === 0){
            return false;
        }
    }
    return true;
}

function nextPrime(x){
    if(isPrime(x) === true){
        console.log(`${x} is Prime number`)
    }else{
        console.log(`${x} is not a Prime number`)
    }
    for(let i=x+1;i < Infinity;i++){
        if(isPrime(i) === true){
            return `${i-x} is the differrent b/w x and next prime number after x`;
        }
    }
}

console.log(nextPrime(1021));