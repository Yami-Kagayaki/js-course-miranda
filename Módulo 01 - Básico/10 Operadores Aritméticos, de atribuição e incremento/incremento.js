// ++ incrementa +1 na varivel
// -- decrementa -1 na variával

//incremento
console.log("Ex:1");
let a = 10;
console.log(a++); //faz a ação e depois incrementa
console.log(a);

console.log("Ex:2");
console.log(++a); //faz o incremento e a ação depois

//decremento
console.log("Ex:1");
a = 10;
console.log(a--); //faz a ação e depois decrementa
console.log(a);

console.log("Ex:2");
console.log(--a); //faz o decremento e a ação depois

// os meios acima são errados semanticamente o meio correto é:
console.log("Exemplo correto");
a = 10;
a++;
console.log(a);

//Pode-se fazer assim também
a = 10;
a += 2; //incremento de adição
console.log(a);

a = 10;
a -= 2; //decremento de subitração
console.log(a);

a = 10;
a *= 2; //incremento de multiplicação
console.log(a);

a = 10;
a /= 2; //decremento de divisão
console.log(a);
