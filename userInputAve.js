const prompt = require('prompt-sync')();

for(let x = 1; x <=3  ; x++)
{
    const user = prompt("Enter your name: ")
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
        status = " Passed";
    }
    else if(aveSum >= 75 & aveSum <= 100)
    {
        status = "Pass with distinction";
    }
    else
    {
        status = "Check your input"
    }   
    
    console.log(user + " your final mark is: " + aveSum +  " and you have " + status);
    console.log("\n");
}

