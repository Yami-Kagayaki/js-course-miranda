/* Variáveis
Não podemos criar Variáveis com palavras reservadas
Os nomes da váriaveis tem que ter sentido (Boa Prática)
Não inicie com letra maiuscula
Use o camelCase
Não começa com número
Sem espaços e -

Let - Tente
ela escapa seu valor e pode ser alterada
*/

let name01 = "João";
let name02 = "Maria";
let name03 = "Eduardo";

console.log(name01, "nasceu em 1984");
console.log("Em 2000", name01, "conheceu", name02);
console.log(name01, "casou-se com", name02, "em 2012");
console.log(name02, "teve um filho com", name01, "em 2015");
console.log("O filho de", name01, "e", name02, "se chama", name03);

name01 = "Lucas";
console.log();
//Console usado para quebra de linha
console.log(name01, "nasceu em 1984");
console.log("Em 2000", name01, "conheceu", name02);
console.log(name01, "casou-se com", name02, "em 2012");
console.log(name02, "teve um filho com", name01, "em 2015");
console.log("O filho de", name01, "e", name02, "se chama", name03);
