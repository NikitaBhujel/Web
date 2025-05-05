//logical operators
let a=6;
let b=5;
let cond1=a>b; //true
let cond2=a===6; //true
console.log("cond1 && cond2=",cond1 && cond2); 
console.log("!(6<5)=",!(a===6)); 

//conditional statements
let age=25;
// if(age>18)
// {
//     console.log("Can vote");
// } 
let mode="dark";
let color;
if(mode==="dark")
{
    color="black";
}
if(mode==="light")
{
    color="white";

}
console.log(color);

//if-else statament
if(mode==="dark")
    {
        color="black";
    }
   else
    {
        color="white";
    
    }
    console.log(color);

    //odd or even
    let num=10;
    if(num%2===0)
        console.log(num,"is even");
    else
    console.log(num,"odd");
    
    //else-if
    if(age<18)
    {
        console.log("junior");
    }
    else if(age>18)
    {
        console.log("senior");
    }
    else{
        console.log("irrelevant");
    }

    //single line but generally we dont do liek this, we use blocks
    if(mode==="dark")
        console.log(mode);

    //Ternary operators : if else lekhne arko tarika but condition lamo x avani choose if else
    age>=18? console.log("adult"):console.log("Not adult");
    
//MDN Docs
const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1

//prompt
let name=prompt("Hello");
console.log(name);

let number=prompt("Enter a number:");
if(number%5===0)
{
    console.log("Multiple of 5");
}
else
{
    console.log("Not a multiple of five");
}

let score=90;
if(score>=90&& score<=100)
{
    console.log(score,"Grade:A");
}
else if(score>=70 && score<=89)
    {
        console.log(score,"Grade:B");
    }
    else if(score>=60 && score<=69)
        {
            console.log(score,"Grade:C");
        }
        else 
            {
                console.log(score,"Fail");
            }