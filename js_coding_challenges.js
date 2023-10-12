// write a tradition function that multipies two number and return the value print the value otside 

//function multiply(num1, num2) {
    //let result = num1 * num2
   // return result;
//}

//console.log(multiply(5,3))

// write a for loop that prints your first name 10 times

// for (let i = 0; i < 10; i++) {
  
//     console.log("Ozlem")
// }

// write a while loop that prints your name 15 times

// let i = 0;
// while (i< 15) {
//     console.log ("guler")
//     i++
// }

// write code an array of 5 element of type string (for example 10 students)

// let students = ["john","layla","ozlem","gulsum","ahmet","kubra","furkan","havva","hasan"]

// console.log (students)


// write a for loop that iterates throught each element and prints each element

// for (let i=0; i < students.length; i++ ) {
//     console.log ( students[i])
// }

// name few function that come with arrays, that allow you to interate through the elements

// students.forEach()
//students.map()
//students.filter()
//students.reduce()

// implement forEach function that prints the first 5 elements of the array below 


// students.forEach(
//     function (value,index) {
//         console.log("the element is"+ value + "and its index is" + index)
//         if(index == 5) {
//             return;
//         }
//     }
    
//     )



// convert the traditional function to an arrow function
let multiply = (num1, num2) => num1 * num2;

console.log(multiply(5,3));