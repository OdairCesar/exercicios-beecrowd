var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

num1 = parseInt(valores[0]);
num2 = parseInt(valores[1]);
total = num1 + num2;

console.log('X = ' + total);