// 1. (completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

// function maxOfTwoNumbers(x, y) {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
//   }

//   console.log(maxOfTwoNumbers(3, 9));






// 2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

// const maxOfThree = (x, y, z) => {

//     if (x >= y && x >= z) {
//         return x;
//     }

//     else if (y >= x && y >= z) {
//         return y;
//     }

//     else if (z >= x && z >= y) {
//         return z;

//     }

//     else {
//         return "Nothing"
//         console.log("Nothing")

//     }
// }

// console.log(maxOfThree(2, 6, 4))






// 3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

// function isCharacterAVowel(character) {
//     let isVowel = true
//     if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {

//         return isVowel
//     }
//     else {
//         return "false"
//         console.log("false")
//     }
// }

// console.log(isCharacterAVowel("c"))





// 4 . Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

// const sumArray = (args)=>{
//     let x = 0
//     args.forEach((num) =>{
//         x += num
//     })

//     return x
// }
// console.log(sumArray([2, 4, 5]))




// 5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

// function multiplyArray(args) {
//     let x = 1
//     args.forEach((num) => {
//         x *= num
//     })
//     return x
// }
// console.log(multiplyArray([2, 4, 5]))




// 6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

// const numArgs =() =>{
//     console.log(arguments)

// }


// const numArgs = (...args) => {
//     return args.length
//   }
//   console.log(numArgs(1,2,3,4))




// Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".


// function reverseString (str){
//     const arrStr = str.split('').reverse().join('')
//     return arrStr
//     }
//     console.log(reverseString("rockstar"))

// 8 . Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.

// const longestStringInArray = (strArray) => {
//     let longest = 0
//     for (let i = 0; i < strArray.length; i++)

//         if (strArray[i].length > longest) {
//             longest = strArray[i].length
//         }
//         return longest
// }


// console.log (longestStringInArray(["hi", "bye", "lmao"]))




// 9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments, and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

// function stringsLongerThan(stringArrayone, strLength) {
//     const newArray = []
//     for (let i = 0; i < stringArrayone.length; i++){
//         if (stringArrayone[i].length > strLength){
//             newArray.push(stringArrayone[i])
//         }
//     }
//     return newArray
// }
// console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))
