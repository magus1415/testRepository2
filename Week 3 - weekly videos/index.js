// var gradeBook = prompt("Name");    
    
    
    
    
    
//     var firstName = "Mary";
//     var lastName = "Brown";
//     var assignmentOne = 100;
//     var assignmentTwo = 79;
//     var assignmentThree = 80;
//     var assignmentFour = 90;
//     var assignmentFive = 100;

// console.log("Student: " + firstName + " " + lastName);
// console.log("Grades:");
// console.log("1: " + assignmentOne);
// console.log("2: " + assignmentTwo);
// console.log("3: " + assignmentThree);
// console.log("4: " + assignmentFour);
// console.log("5: " + assignmentFive);


// let gradesArray = new Array(5);
// let gradesArray = [100, 79, 80, 90, 100];
// let gradesArray = new Array(100, 79, 80, 90, 100);

// Additionally, you can also create an array without a length like one of these two options:

// let gradesArray = []; 
// let gradesArray = new Array();
//  And push values to that array by doing the following:

// gradesArray.push(100);
// gradesArray.push(79);
// gradesArray.push(80);
// gradesArray.push(90);
// gradesArray.push(100);



// var pokemonName1 = prompt ("Pokemon:");
// var pokemonName2 = prompt ("2nd Pokemon: ")

// let pokemonName = [prompt("First Pokemon: "), prompt("Second Pokemon: "), prompt("Third Pokemon: "), prompt("Fourth Pokemon: "), prompt("Fifth Pokemon: ")];


// let pokemonName = [prompt("First Pokemon: "), "Raichu ", "Jigglypuff ", "Mr Mime ", "Warturtle "]
// let hpStats = [10, 20, 30, 40, 50];

// pokemonName.push("Pidgey ", "Evee");
// hpStats.push(65, 70);

// for(i = 0; i < hpStats.length; i++){
//     console.log("Pokemon Name: " + pokemonName[i]);
//     console.log("HP Stats: " + hpStats[i]);
// }

// function pokemonFunction() {
//     for (i = 0; i < 100; i++)
//         console.log(i);
// }
// pokemonFunction();

// function createfullName(firstName, lastName, moreName)  {
//     return firstName + " " + lastName + " " + moreName;
// }

// var fullName = createfullName('Tom', 'Sawyer', 'Boo');
// console.log('Welcome, ' + fullName)


// function checkCanDrive(age) {
//     return (age >= 16);
//     }
    
// var currentAge = 14;

// if (checkCanDrive(currentAge)) {
//     console.log('This person can drive');
// } else {
//     console.log('This person cannot legally drive');
// }

// let fullName = "Mary" + " " + "Brown";
// let gradesArray = [100, 79, 80, 90, 100];

// function lowestGrade (gradeBook) {
//     if (gradeBook.length > 0) {
//         let lowGrade = gradeBook[0];
//         for (let grade of gradeBook) {
//             if (grade < lowGrade) {
//                 lowGrade = grade;
//             }
//         }
//         return lowGrade;
//     } else { return 0;
//         }
//     }


// let variable = 0;

// variable = variable + 1;

// variable =  addOne (variable);

// function addOne (num) {
//    num = num + 1;
//     return num;
// }

// console.log(variableTwo);


// let firstName = prompt('get first name');
// let lastName = prompt('get last name');

// if first name is empty then return error saying its empty else return full name

// if(firstName == ''){
//   return "error";
// } else {
//   return firstName + lastName;
// }




// function getFullName(firstName, lastName){
//       let name = lastName + ", " + firstName;
//       return name;
// }

// function getFullNamePrompted(){
//   let firstName = prompt('enter first name');
//     let lastName = prompt('enter last name');
    
//   return getFullName(firstName, lastName);
// }

// console.log(getFullName("Chase", "Hoy"));

// console.log(getFullNamePrompted());
//////////////////////////////////////////////////
/*
let hasError = false;
let name = "";

checkStringForError();

console.log(hasError);

function checkStringForError(){
  if(name == "") {
    hasError = true;
  } else {
    hasError = false;
  }
}
*/



// function multiply(num1, num2) {
//   return num1*num2;
//   }

//   let result = multiply(1, 2);
//   console.log(result)




// function checkCanDrive(age) {
//   return (age >= 16);
// }

// var currentAge = prompt("Type in your age: ");
// if (checkCanDrive(currentAge)) {
//   console.log('This person can drive');
// } else {
//   console.log('This person cannot legally drive');
// }



// let fullName = "Mary" + " " + "Brown";
// let gradesArray = [79, 100, 80, 90, 100, 80, 50, 49];

// function lowestGrade (gradeBook) {
//   if (gradeBook.length > 0) {
//     let lowGrade = gradeBook[0];
//     for (let grade of gradeBook){
//       if (grade < lowGrade) {
//         lowGrade = grade;
//       }
//     }
//     return lowGrade;
//   } 
//   else {
//     return 0;
//   }
// }

// console.log("\n\nStudent: " + fullName);
// console.log("Grades: ");
// for (let i = 0; i < gradesArray.length; i++) {
//   console.log("\t" + (i+1) + ": " + gradesArray[i]); 
// }

// console.log("Evaluation: ");
// console.log("\tLowest Grade is: " + lowestGrade(gradesArray));










// let gradesArray = [79, 100, 80, 90, 100, 33, 80, 50, 49];

// let lowGrade = gradesArray[0];

// for (let grade of gradesArray) {
//   if (grade < lowGrade) {
//     lowGrade = grade;
//   }
// }

// console.log(lowGrade)




// let num1 = 10000;
// console.log(squareOfNum(num1))


// function squareOfNum (num1) {
//   return num1 * num1;
// }




// let x = 2;
// let y = 8;
// console.log(raiseNumber(x, y))

// function raiseNumber (x, y) {
//   return x ** y;
// }



// const pokemon = {
//   type: "Fire",
//   weight: 100,
//   color: "Red",
//   printPokemonName: function() {
//     console.log(weight);
//   }
// }

// console.log(pokemon.printPokemonName)





//  Intermediate Array Methods:

// let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];

// let lengths = names.map(function(element) {
//   return element.length;
// });
// console.log(lengths);

/////////////////////////////////

// let sum = lengths.reduce(function(x, y) {
//   return x + y;
// });
// console.log(sum);

////////////////////////////////

// names.forEach(function(element){
//   console.log(element);
// });

///////////////////////////////

// let odds = names.filter(function(element) {
//   return element.length < 4;
// });
// console.log(odds);

//////////////////////////////

// let removedElement = names.splice (3, 2, 'added this due to splicing'); 
//  console.log(names);



/////////////////////////////////

// let fullName = "Mary" + " " + "Brown"; 
// let gradesArray = [100, 79, 80, 90, 100];
// const isPassing = (currentValue) => currentValue >= 70;
// gradesArray.push(55);

// console.log("\n\nStudent: " + fullName);
// console.log("Grades: ");
// for (let i = 0; i < gradesArray.length; i++) { 
// console.log("\t" + (i+1) + ": " + gradesArray[i]);
// }
// console.log("Evaluation: ");

// if (gradesArray.every(isPassing)) {
// console.log('\tEvery grade is a passing grade (>= 70)!');
// } else {
// console.log('\tNot all grades are passing.  A passing grade is >= 70!');
// }

////////////////////////////////////////////////////////////////////////////////


// test print into