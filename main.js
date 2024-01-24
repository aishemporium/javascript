//Windows Operator
// let greetings = "Hello";
// alert(`${greetings}`);

let name = prompt("Enter your name");
console.log(`${name}`);

// let firstNumber = prompt("Enter number");
// let secondNumber = prompt("Enter number");
// let output = Number(firstNumber) + Number(secondNumber)
// console.log(output);

const agree = confirm("Are you sure you want to subscribe?");
console.log(agree);

//Regex
let numBer = 'I love JavaScript and i believe you also love javascript';
let res = /javascript/gi;
// console.log(numBer.math(res));

let inequalities = /[%$@#;&?!]/g;
console.log(sentence.replace(inequalities, ""));

let extract = "he earns...."


                                  //Ternary Operators
// let isAman = true;
// isAman ? console.log("Yes, he is a man") :
// console.log("No, he is not a man");

let isAman = false;
if (isAman) { 
    console.log("Yes, he is a man");
} else {
console.log("No, he is not a man");
}


let b = 5
if (b < 5) {
    console.log('Not correct');
} else if (b == 5) {
    console.log("It is corrct");
} else if  (b > 5) {
    console.log("It is wrong");
} else {
    console.log("Try again");
}

let today = prompt('what day is today')
let Day = today.toLowerCase()
switch(Day) {
    case ('monday'):
        console.log('Today is Monday');
        break;
    case 'tuesday':
        console.log('Today is Tuesday');
        break;
        case 'Wednesday':
            console.log('Today is Wednesday');
            break;
            case 'Thursday':
                console.log('Today is Thursday');
                break;
                case 'Friday':
                    console.log('Today is Friday');
                    break;
                    default:
                        console.log("It is not a day");
}