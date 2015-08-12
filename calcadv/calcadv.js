/*var op = prompt("Choose a number");
console.log("op",op);

var num = prompt("Choose a number");
console.log("num",num);

var goodNum = parseFloat(num);

alert("Why is your console not open?"); 
*/

var num1 =prompt("Type in your 1st number");
var num2 =prompt("Type in your 2nd number");
var op = prompt("Type in your basics operator like +, -, / , *, power or square root")

if (op === "+") {
  var sum = parseFloat(num1) + parseFloat(num2);
  alert("The sum is " + sum)
}

else if (op === "-") {
  var diff = parseFloat(num1) - parseFloat(num2);
  alert("The difference is " + diff)
}

else if (op === "/") {
  var quo = parseFloat(num1) / parseFloat(num2);
  alert("The quotient is " + quo)
}

else if (op === "*") {
  var mult = parseFloat(num1) * parseFloat(num2);
  alert("The multiplication is " + mult)
}

else if (op === "power") {
  var power = Math.pow(num1, num2);
  alert("The 1st no. is the base and the 2nd no. is the exponent. So the power is: " + power)
}




