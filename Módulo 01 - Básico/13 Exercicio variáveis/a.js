let a = "a";
let b = "b";
let c = "c";
let auxiliar = 0;
// pode ser feito assim também [a,b,c] = [b,c,a]
auxiliar = a;
a = b;
b = c;
c = auxiliar;

console.log(a, b, c);
