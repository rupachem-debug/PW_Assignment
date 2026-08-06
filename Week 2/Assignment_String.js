//find the lat word from the senctence and its length
// let a = 'This is a test Program'
// let splitA = a.split(" ")
// console.log(splitA)
// let lastWord = splitA[4]
// console.log(lastWord)
// console.log("The Last Word is " + lastWord + " and the length is " + lastWord.length)

//using Trim
// let c = " fly me to the moon "
// let trimC = c.trim()
// console.log(trimC)
// let splitC = trimC.split(" ")
// console.log(splitC)
// let LastC = splitC[4]
// console.log(LastC)
// console.log("The Last Word is " + LastC + " and the length is " + LastC.length)

//Anagram
let d = "listen"
let e = "silent"
let dSplit = d.split("").sort()
let eSplit = e.split("").sort()
console.log(dSplit)
console.log(eSplit)
if(dSplit.toString()===eSplit.toString())
{
    console.log(d +" and "+e+" are anagrams")
}
else
{
    console.log(d +" and "+e+" are NOT anagrams")
}
