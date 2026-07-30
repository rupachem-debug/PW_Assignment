//function that evaluates a student's score 
// and returns their grade using a switch statement to assess score ranges.
let studentMark = 70
function grade(studentMark)
{
    switch(true)
    {
        case studentMark >= 85:
        console.log("A Grade: " + studentMark)
        break;
        case studentMark > 60 && studentMark < 85:
        console.log("B Grade: " + studentMark)
        break;
        case studentMark < 60:
        console.log("C Grade: " + studentMark)
        break;
        default:
        console.log("Not Valid")
    }
}
grade(studentMark)