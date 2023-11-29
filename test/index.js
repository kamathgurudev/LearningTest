function greetings(name,lastname ){
    console.log('Hello I am '+ name+' !'+lastname);
}
// console.log(name,lastname);
function Square(number)
{
    return number*number;
}
// console.log(Square(5));
// let x=10+10;
// console.log(--x);
// console.log(x);
// x+=10;
// x+=5;
// console.log(x);
// x*=10;
// console.log(x);
// let x=1;
// console.log(x===1);
// console.log(x!==0);
// console.log('1'==1);

//gold customer
let points=80;
console.log(points>=100?'Gold Member':'Silver Member');

//creditcard 
let highincome= true;
let goodCreditScore=true;
let EligibleForCard=highincome&&goodCreditScore;
console.log('EligibleForCard:',EligibleForCard);

//operator
let defaultColor='Blue';
let userColor='Red';

let resultColor=defaultColor||userColor;
console.log(resultColor);

//swapping variables
let a='Red';
let b='Blue';
let temp;
temp=a;
a=b;
b=temp;
console.log(a);
console.log(b);

//Greeting based on hour
let hour=19;
if(hour>=6&&hour<12){
    console.log('Good Morning!');
}
else if (hour>=12&&hour<18){
    console.log('Good Afternooon');
}
else 
console.log('Good Evening!');

//Moderator
let role='user';
switch(role){
    case 'guest': console.log('Guest User');
    break;

    case'user':console.log('User Log-In');
    break;

    default:    
        console.log('unknown');
}

//forLoop
// for(let i=0;i<=6;i++){
//     if(i%2==0)
//     // console.log(i);
// }

//while
// let i=0;
// while(i<=5){
//     if(i%2!==0) console.log(i);
//     i++;
// }

let i=0;
do{
    if(i%2!==0) console.log(i);
    i++;
}while(i<=5);

const guru={
    name:'Gurudev Kamath G',
    age:30,
    sex:'Male',
    work:'HRB India'
}

for(let index in guru){
    console.log(index,':',guru[index]);
}

//Maximum of 2

function Max(number1,number2){
//     if(number1>number2)
//     return console.log(number1+' is the greatest.')
// else if(number2>number1)
//     return console.log(number2,' is the greatest.')
return (number1>number2) ? number1+' is the greatest': number2+' is the greatest.';
//  if(number1===number2)
//     return console.log("Both numbers are equal, enter different ones.")
}
   let number= Max(29,30);
   console.log(number);

   //Fizzbuzz algorithm
   const output =fizzbuzz('hello');
   console.log(output);

   function fizzbuzz(input){
    if((input%3)&&(input%5))
    return 'FizzBuzz';
    if(typeof input!=='number')
    console.log('Not a Number');
    if(input%3===0)
    return 'Fizz';
    if(input%5===0)
    return 'Buzz';
 

    return input;
   }

   //SpeedQuestion
checkSpeed(70);

function checkSpeed(speed){
    const speedLimit=70;
    const kmPerPoint=5;
    if(speed< speedLimit+kmPerPoint)
    return 'Ok';
else {
    const points=Math.floor(speed-speedLimit/kmPerPoint)
    if(points>=180)
    console.log('License Suspended');
    else
    console.log('points:',points);
}
}

//Even ODD
showNumbers(6);
function showNumbers(limit){
    for(let i=0;i<=limit;i++)
    {
    //   if(i%2===0)
    //   console.log(i,'Even');
    //   else
    //   console.log(i,'Odd');
    const message=(i%2===0)? 'Even':'Odd';
    console.log(i,message);
    }
}

//CountTruthy

let array1=[0,'hello','','underfined',2,3];
console.log(CountTruthy(array1));

function CountTruthy(array1){
let count=0;
for(let value of array1){
if(value)
   count++;
return count;
}
}



