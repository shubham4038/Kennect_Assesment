//The switch statement is used to execute different actions based on different conditions.

let day = 'friday';
switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

// Continue,break
//The continue statement is used to skip one iteration of a loop.
let arr = [1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    if(arr[i] === 2){
        continue       // It will skip this iteration
    }
    console.log(arr[i]);
}

// Break
let arr1 = [1,2,3,4,5]
for(let i=0;i<arr1.length;i++){
    if(arr[i] === 2){
        break       // Break will throw it out of for loop;
    }
    console.log(arr[i]);
}