const nome = prompt("Digite seu nome completo:");
document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(
  1
)}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? ${nome.charAt(
  0
)}<br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${nome.search(
  "s"
)}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(
  2,
  5
)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(
  " "
)}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;
