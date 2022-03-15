const nome = "Lucas";
const sobrenome = "Gabriel";
const idade = 20;
const peso = 91.5;
const altura = 1.8;
let anoDeNascimento;
let imc = peso / (altura * altura);
anoDeNascimento = 2022 - idade;

// normal
console.log(nome, sobrenome, "tem", idade + ",", "pesa " + peso + ".");
console.log(
  "Tem",
  altura + "M",
  "de altura, nasceu em",
  anoDeNascimento,
  "e seu IMC é ",
  imc
);
console.log();

// template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}KG.`);
console.log(
  `Tem ${altura}M de altura, nasceu em ${anoDeNascimento} e seu IMC é ${imc}`
);
