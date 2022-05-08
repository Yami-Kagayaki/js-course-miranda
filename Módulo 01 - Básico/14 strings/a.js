let x = 'lorem "impsun"';
let b = "lorem 'impsun'";
let d = "lorem impsun";
let c = "lorem \\'impsun'";
console.log(x, b, c, d);
console.log;
//string é um  ARRAY de Caracteres
//       0123456789      e assim vai!
let s = "LOREM impsum n";
console.log(s[4]);
console.log(s[0]);
console.log(s.charAt(2));
console.log;

//procurar no array
console.log(s.length);
console.log(s.indexOf("e")); //-1 podque não achou
console.log(s.indexOf("E")); // procura do começo
console.log(s.lastIndexOf("O")); // procurq de tras pra frente
console.log(s.slice(1, 3)); //fatia
console.log;

//concatenar
console.log(s.concat(" impsum1"));
console.log(s, "impsum2");
console.log(s + " impsum3");
console.log(`${s} impsum4`);
console.log(`${s}impsum5`);
console.log;
