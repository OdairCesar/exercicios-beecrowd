var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

raio = parseFloat(valores[0]);
n = 3.14159;
total =  (n * Math.pow(raio, 2)).toFixed(4);

console.log("A="+total);