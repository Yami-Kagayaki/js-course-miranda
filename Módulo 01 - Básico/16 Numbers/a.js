//JavaScript segue o padrão de numeros IEEE 754-2008

let num1 = 1;
let num2 = 2.5;
let num3 = 2.54646494941949;

console.log(num1.toString() + num2); //vai concatenar
console.log(num1.toString(2)); //retorna o binario
console.log(num3.toFixed(2)); //Arredonda e deixa com uam quantidade de casas decimais
console.log();
//IEEE 754-2008
num1 = 0.7;
num2 = 0.1;
let result = num1 + num2;

result = parseFloat(result.toFixed(2));
console.log(num1 + num2);
console.log(result);
//Tipo Infinity
