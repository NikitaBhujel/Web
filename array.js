let marks={
    stu1:97,
    stu2:82,
};
console.log(marks.stu1);
const Cars=['A','V','c'];
console.log(Cars);
console.log(Cars.length); //property gives value and method does some work
let heroes=["Captain America","Hulk","Loki"];
console.log(heroes);
//Arrays are object type in js
//accessing array elements using indices
console.log(heroes[2]);

//chaning array values
heroes[1]="Thor";
console.log(heroes);
//But we cannot do this in strings because strings are immutable.

//Looping over an array
for(let i=0;i<heroes.length;i++)
{
    console.log(heroes[i]);
}

//for of
for(let hero of heroes)
{
    console.log(hero);
   
}
for(let hero of heroes)
{
    console.log(hero.toUpperCase());
   
}

let mark=[20,30,40,60];
let sum=0;
// for(let i=0;i<mark.length;i++)
// {
//     sum=sum+mark[i];

// }
for(let i of mark)
{
    sum+=i;

}
console.log("Average:",sum/mark.length);

let veg=[250,645,300,900,50];
// let offer=0.1;
// for( o of veg)
// {
//     console.log(o-(o*0.1));

// }
//we cannot use for of loop here because it only changes the value but do not place the changed value in index so we make some changes
// let idx = 0;
// for (let k of veg) {
//     console.log(`Value at index ${idx} = ${k}`);
//     let offer=k/10;
//     veg[idx]=veg[idx]-offer;
//      console.log(`Value after offer=${veg[idx]}`);
//        idx++;
// }

//using for loop
for(let i=0;i<veg.length;i++)
{
    let of=veg[i]/10;
    veg[i]-=of;
}
console.log(veg);
veg.push(900);
console.log(veg);
heroes.push("Ironman");
console.log(heroes);
veg.pop();
let deletedItem=veg.pop();
console.log(deletedItem);
console.log(heroes.toString());
let got=["John","Robert","Ned","Tyrion"];
let vikings=["Ragnar","Floki","Ivar"];
let series=got.concat(vikings);
console.log(series);
