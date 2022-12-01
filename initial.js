console.log(23+97);
console.log("I'm Javascript");
console.log(1+2+3+4+5+6);
let x= (4+6+9)/(77);
console.log(x)
let a=10
console.log(a)
console.log(9*a)
let b=7*a
console.log(b)
let max= 57
const actual= max-13
let percentage= actual/max
console.log(percentage)

function add7(num) {
    return num + 7
  }
 
  console.log(add7(5))

function multiply(product) {
    return product * 5
}

console.log(multiply(5))

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);

}

console.log(capitalize('awesome'));
console.log(capitalize('tHis'));

function lastLetter(end){
    return end.substr(-1)
}
console.log(lastLetter('Ashaad'));

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}