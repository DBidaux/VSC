let num = Number(prompt("Pick a number"));
if (num<10){
console.log("Small");}
else if (num <100){
console.log("Medium");}
else{
console.log("Large");}

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)){
console.log("Your number is the square root of " + theNumber*theNumber);}
else{
console.log("GIVE ME A NUMBER!!");}
