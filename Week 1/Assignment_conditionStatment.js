//two functions: `launchBrowser` with `if-else` for browser launch messages,
//  and `runTests` with `switch` for test type messages.
function launchBrowser(browserName)
{
if (browserName === 'Chrome')
{
    console.log("Launch Chrome") 
}
else 
{
    console.log("Launch " +browserName) 
}
}
function runTests(testType)
{
switch (testType) {
    case "Smoke":
        console.log("It is " + testType)
        break;
    case "Regression":
        console.log("It is " + testType)
        break;
    case "Sanity":
        console.log("It is " + testType)
        break;
    default:
        console.log("It is Freehand test")
        break;
}
}
launchBrowser("Chrome")
runTests("Regression")