// console.log ("Hello World");
// let name = "Aisha";
// console.log(name)
// name = "Abiola";
// console.log(name)
// let age = "57"
// let newAge ="13"
// let percentage =newAge/age
// console.log(percentage)
// let myString='hi'
// let otherString="hello"
// let backtick='hi again';
// let num = 31;
// let bol = true;
// let undefinededVariable;
// let emptyValue = null;
// console.log(myString);
// console.log(otherString)
// console.log(backtick)
// console.log(bol)
// console.log(undefinededVariable)
// console.log(emptyValue)
// console.log(typeof myString);
// console.log(typeof otherString)
// var test="testing"

                                        //Strings Methods
let string = "Javascript"
firstletter= string [3];
console.log(firstletter);
console.log(string.length);
console.log(string.length - 1);
// console.log(string[lastIndex]);

console.log(string.toUpperCase());
console.log(string.toLowerCase());


let text = "Programming";
console.log(text.substring(1, 4));
console.log(text.substr(1, 4));


let day = "30 Days of Javascript";
console.log(day.split()); 
console.log(day.split(" "));


console.log(day.includes("Days"))


let title = "javascript";
let lastIndex = title.length - 1;
console.log(title.charAt(lastIndex));
console.log(title.indexOf("j"));
console.log(title.replace("javascript", "Asabeneh"));

                                  //Assigment Operators
let numOne = 5;
let numTwo = 2;
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo
console.log(powerOf)
console.log(sum, diff, mult, remainder, powerOf);

                                 //Comparison Operators
let first = 3;
let second = "3";
console.log(first > second);
console.log(first < second);
console.log(first == second);
console.log(first === second);
console.log(first != second);
console.log(first !== second);
console.log(first <= second);


                                   //Truthy and Falsy Values

console.log(1 == true);
console.log(0 == true);
console.log(0 == false);
console.log(0 === false);

// Logical Operators
/*only truee when both are true remaining are false 
i.e true and true = true
true and false = false
false and false = false*/

let check = 4 > 3 && 10 > 5;
let see = 4 > 3 && 5 > 10;
console.log(check, see);

// only false when both are false remaining are true.
/* true or true = true,
true or false = true,
false or false = false*/

let compare = 4 > 3 || 10 > 5;
let value = 4 > 3 || 10 < 5;
let answer = 4 < 3 || 10 < 5;
console.log(compare, value, answer);


                                    // Negation Operators
let negate = !(4 < 3); //i.e: if it is not 4<3 then it is 4>3 were 
let result = !true;
console.log(result, negate)

                                    //Increment and Decrement Operators
let count = 1;
console.log(++count);
console.log(count++);
let num = 1;
num--;
// console.log(count--);
// console.log(--count)
console.log(num);

                                  //Ternary Operators
// let isAman = true;
// isAman ? console.log("Yes, he is a man") :
// console.log("No, he is not a man");




                                     //Symbols
    const mySymbol = Symbol();
console.log(mySymbol);
const newSymbol = Symbol("hi");
console.log(newSymbol);


                //Concatenation
const love = "i love";
const sentence = love +" " + "studying " + day;
console.log(sentence);

const backtickSentence = `${love} studying ${day}`
console.log(backtickSentence);



const myArray= ["Rukaya", "Maevellous","Grace","Munirah"];
console.log(myArray);
myArray[0]="Salamat";
console.log(myArray);

                            //Math Object
 const four = 4;
 console.log(Math.sqrt(4));
 console.log(Math.pow(4, 2));
console.log(Math.PI);
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random() * 1);
 
console.log(Math.max(3,4,9,0));


console.log(Math.floor(Math.random()*10 + 1));
// let random = (Math.random(*10 + 1))


                            