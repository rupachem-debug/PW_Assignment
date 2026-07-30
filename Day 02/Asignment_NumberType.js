 //function that determines if a number is positive, negative, or zero 
 //and returns a corresponding string indicating the type
 let a = 1
 let c = 0
 let d = -4
function numberType(num)
{
   
    if(num > 0)
    {
        return "Positive"
    }
    else if (num < 0)
    {
        return "Negative"
    }
    else
    {
        return "Zero"
    }
}
console.log(numberType(a))
console.log(numberType(d))
