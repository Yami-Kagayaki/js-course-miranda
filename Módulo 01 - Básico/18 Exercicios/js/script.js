const h2 = document.getElementById("titulo");
const local = document.getElementById("respostas");
const num = Number(prompt("Digite um Numero: "));

h2.innerHTML = num;
local.innerHTML = `<p>Seu numero +2 é : ${num + 2}</p>`;
local.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
local.innerHTML += `<p>é NaN: ${Number.isNaN(num)}</p>`;
local.innerHTML += `<p>Arredondando para baixo fica: ${Math.floor(num)}</p>`;
local.innerHTML += `<p>Arredondando para cima fica: ${Math.ceil(num)}</p>`;
local.innerHTML += `<p>Com 2 casas decimais ${num.toFixed(2)}</p>`;
