//Dados primitivos são imutáveis (Copiam) {Primitivos}
//Dados por Referencia apontam por mesmo valor (São modificado mesmo não sendo mexidos)
//{Arrays objetos e functions}

//primitivo
let a = 20;
let b = a;
console.log(a, b);

//referencia
let c = [20, 10];
let d = c;
console.log(c, d);
c = [20, 5];
console.log(c, d);
