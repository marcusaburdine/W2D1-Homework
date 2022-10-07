// Functions continued

// 2 ways to write a function

// Function Declaration
// function sayhello (name){
// console.log('hello' + name + '!')
// }
// sayhello(Marcus)

// // Function Expression

// const sayhello = function(name){
//     console.log(typeof name)
//     console.log('hello' + name + '!')
// }
// sayhello(Marcus)

//Arrow Function

const add = (a, b) => a + b
add( 2, 4)
console.log(add(2, 4))

// function areBothEven( n1, n2){
//     return !(n1 % 2) && !(n2 % 2)

// }
// console.log(areBothEven(2, 4))

// function areBothEven(n1, n2) {
//     if (typeof n1 !== "number" || typeof n2 !== "number") {
//         console.log("is not a number")
//         return
//     }
//     else {
//         return !(n1 % 2) && !(n2 % 2)
//     }
// }
// console.log(areBothEven(2, 4))
