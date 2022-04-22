// const x =6
// const y = 11

// || = or && = and
// if(x > 5 && y > 10){
//     console.log('x is more than 5 or y si more than 10')
// }  

// const x = 9
// const color = x > 10 ? 'red' : 'blue'

// console.log(color)

// SWITCHES

// switch(color){
//     case 'red': 
//     console.log('color is red')
//     break
//     case 'blue':
//         console.log('color is blue')
//         break
//     default:
//         console.log('color is not red or blue')
//         break
// }


// FUNCTIONS 
// function addNums(num1, num2){
// return num1 + num2
// }

// console.log(addNums(5,14))

// arrow functions
// const addNums = (num1, num2) => {
//     console.log(num1 + num2)
// }
// addNums(5,14)  

// function Person(firstName, lastName, dob){
//     this.firstName = firstName
//     this.lastName= lastName
//     this.dob = new Date(dob)
//   }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear()
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }

// Class

// class Person {
//     constructor(firstName, lastName, dob){
//     this.firstName = firstName
//     this.lastName= lastName
//     this.dob = new Date(dob)
//     }

//     getBirthYear(){
//         return this.dob.getFullYear()
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// //Instantiate object

// const person1 = new Person('Ion', 'Vasile', '1-1-1980')
// const person2 = new Person('Iona', 'Vasilica', '1-1-1985')
// console.log(person1.getBirthYear())
// console.log(person1.getFullName())
// console.log(person1)
// console.log(person2.getFullName())