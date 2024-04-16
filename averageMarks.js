 const prompt = require('prompt-sync')();
 
const mark1 = parseInt(prompt("Enter mark1: "));
const mark2 = parseInt(prompt("Enter mark2: "));
const mark3 = parseInt(prompt("Enter mark3: "));
const result = 0;
const aveSum = (mark1 + mark2 + mark3)/3;
let status ;


if (aveSum < 50)
{
    status = "Failed"
} 
else if (aveSum >= 50 && aveSum < 75)
{
    status= " Passed";
}
else if(aveSum >= 75 & aveSum <= 100)
{
    status == " Check your input Pass with distinction";
}
else
{
    status == "Check your input"
}
console.log("\nFinal Mark: " + aveSum + status);
