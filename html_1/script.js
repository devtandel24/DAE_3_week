let age = 25;

const birthyear = 1999;

let sum = age +5; 


if (age >= 18 && age <=30)
  {
    console.log("You are in your twenties or late teens");
  }

if (age <18 || age>30 ){
  console.log("You are either younger than 18 or older than 30");
}


let minor =age<18;

if(!minor){
  console.log('Your are not a minor');
}