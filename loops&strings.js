//for loop
//calculate sum of 1 to 5
let sum=0;
let n=5;
for(let i=1;i<=n;i++)
{
    sum=sum+i;
}
console.log(sum);

//var is global but let is not
//print 1 to 5
for(let i=1;i<=5;i++)
{
    console.log(i);
}
console.log(i); //Here i is not defined globally, It is defined inside the blocks only
for(var i=1;i<=5;i++)
    {
        console.log(i);
    }
    console.log(i); // Here the ans is 6, loops runs for 6 times since var is global the ans is printed

    //while loop
    let j=1;
    while(j<=5)
    {
        console.log(j);
        j++;
    }

    //do while loop is executed once , even if the stopping condition is false
    let k=20;
    do{
        console.log("Nicks");
        k++;

    }
    while(k<=10); 
    
    //for-of loop 
    //strings and arrays 

    let str="Nikita"; //a ko value automatically aauxa,initialization,increments,stopping condition dinu parena
    let size=0;
    for(let a of str) //iterator -> characters
    {
        console.log(a);
        size=size+1; // or size++;
    }
    console.log("size:",size);

    //for objects, for in loops is used for objects and arrays
    //for in loop returns keys, not value but we can also print value
    let student={
        name:"Nikita Bhujel",
        age: 20,
        cgpa: 8.9,
        ispass:true
    };
    for(let val in student)
    {
        // console.log(val);
        console.log("key=",val,"value=",student[val]);
    }
//key value pair can be accessed using for in loop

//QN : print all even numbers from 0 to 100
for(let e=0;e<=100;e++)
{
   
    if(e%2==0)
    {
        console.log(e);
    }

    // console.log(e,e%2==0,);
}
let game_number=9;
let gnumber=prompt("Enter your guess number:");
while(gnumber!=game_number) //Here if we use double equals to, we cant get the ans because prompe returns string but we are giving integer value
{
    gnumber=prompt("You entered wrong number.Guess again:");
}
console.log("Congratulations,you entered the right number.");

