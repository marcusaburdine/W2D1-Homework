// // EXERCISE 1: Write a Function Declaration
// // Write a function named computeAreausing the function declaration approach.

// // It will have two parameters: width& height.

// // It will compute the area of a rectangle (width X height) and return a string in the following form:

// // The area of a rectangle with a width of _ and a height of _ is ___ square units.

// // Invoke the function to test it.




// function computeArea( width,height){

//     let area = height*width
//     console.log("the area of a rectangle with the width of " + width + " and the height of " + height + ' is ' + area + ' square units.')

// }
// console.log(computeArea(2,4))




// // EXERCISE 2: Write a Function Expression
// // Write a function named planetHasWaterusing the function expression syntax.

// // It will have one parameter: planet.

// // Return trueif the planetargument is either "Earth" or "Mars", otherwise return false.

// // Bonus points if you ensure the function will work regardless of the casing of the planetbeing passed in ('earth', 'MARS', etc.).

// // Invoke the function a couple of times to test it!

// // const planetHasWaterUsing = (planet) => {
// //     planet.toLowerCase();
// //     if(planet === "earth" || planet === "mars") {
// //         return;
// //     } else {
// //         return false;
// //     }

// // }
// // console.log(planetHasWaterUsing("MARS"))



// // Parameters/Arguments
// function bottleCapper( bottle /** parameters */, cap) {
//     return bottle + cap;
//   }
//   //console.log(bottle) ReferenceError
//   bottleCapper("green bottle (arugment)", " white cap (argument)")

//   // Spread Operator
//   function getDevObject(name,age, ...skills) {
//     console.log(skills)

//     return {
//       devName: name,
//       age: age,
//       jobSkills: skills
//     };
//   }

//   console.log(getDevObject("Betty", 1298736,"awesome", "cool"))


//   // Objects
//   // Key/value pairs
//   const arr = [1,2,34,3] // Bracket notation
//   const person = { // Dot notation
//     name: "Mina",
//     job: "developer",
//     isAwesome: true,
//     skills: ["coding", "something else"],
//     pet: {
//       name: "fido"
//     }
//   }
//   console.log(person.pet.name)



//   const arrOfObj = [
//     {
//       username: "blah",
//       email: "alksdj@gmail.com"
//     },
//     {
//       username: "blah",
//       email: "alksdj@gmail.com"
//     },
//     {
//       username: "blah",
//       email: "alksdj@gmail.com"
//     },
//     {
//       username: "blah",
//       email: "alksdj@gmail.com"
//     },
//   ]


// Default Parameters
// const bicycle = {
//     brand: "mongoose",
//     color: "red"
//   }
//   ES5
//   function setColor(bicycle, color) {
//       bicycle.color = color || "purple"
//   }
//   setColor(bicycle)

//   console.log(bicycle)

//   // ES6
//   function setColor(bicycle, color = "purple") {
//     bicycle.color = color
//   }

//   setColor(bicycle)

//   console.log(bicycle)


// // Global Scope
// const num = 4

// function foo(x) {
//   // Function local scope
//   const  b= num * 4

//   function bar(y) {
//     const c = y * b
//     // foo1() this will give a reference error
//     return c
//   }
//   // even though on same level of scope, you cannot share variables
//   function foo1 () {
//     console.log(c)
//   }


//   return bar(b);
// }
// console.log(foo(num))

// You can look out, but you can't look in!


// Global Scope in the Browser



// IFFE


//Block Scope


// Hoisting


// Nesting Funcitons // Reference previous problem

