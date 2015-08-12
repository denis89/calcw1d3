/*var op = prompt("Choose a number");
console.log("op",op);

var num = prompt("Choose a number");
console.log("num",num);

var goodNum = parseFloat(num);

alert("Why is your console not open?"); 
*/

var num1 =prompt("Type in your 1st number");
var num2 =prompt("Type in your 2nd number");
var op = prompt("Type in your basics operator like +, -, / or *")

if (op === "+") {
  var sum = parseFloat(num1) + parseFloat(num2);
  console.log("The sum is " + sum)
}

else if (op === "-") {
  var diff = parseFloat(num1) - parseFloat(num2);
  console.log("The difference is " + diff)
}