/* Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

Examples
oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1
oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1
oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0 */

function oddishOrEvenish(val){
    const digits = String(val)// turns the given parameter into a string
        .split('')// splits the string into an array of characters
        .map(Number)// turns each character back into a number
    console.log(digits);

    var sum = 0
    //find the sum of the digits
    for(const digit of digits){
        sum += digit;
    }

    var result = ""
    //determine if sum is odd or even
    if( sum % 2 ){
        result = "Oddish"
    } else result ="Evenish"

    return result;
}

const testValue1 = 43
const testValue2 = 373
const testValue3 = 4433

console.log(testValue1 + " is " + oddishOrEvenish(testValue1) );
console.log(testValue2 + " is " + oddishOrEvenish(testValue2) );
console.log(testValue3 + " is " + oddishOrEvenish(testValue3) );