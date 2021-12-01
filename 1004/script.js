var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

A = parseInt(valores[0]);
B = parseInt(valores[1]);

SOMA = A + B;

console.log("SOMA = " + SOMA);