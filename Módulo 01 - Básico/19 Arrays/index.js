//Arrays = lista de coisas

/*
Esse tipo de valor é mutável mesmo em const ou seja ***Const com Valor Mutável (Array e Objeto)***
sempre tente manter seu arry com o mesmo tipo de valor apesar de aceitar todos os valores citados anteriormente.
*/

const nomesAleatorios = ["Lucas", "Anivia", " Tradutor", "Eclésia"];
console.log(nomesAleatorios);
console.log(nomesAleatorios[0], nomesAleatorios[3]);

nomesAleatorios[1] = "canindé"; //Trocando valor a partir do index
nomesAleatorios.push("Marta"); // Adiciona no final
nomesAleatorios.unshift("lucas"); //Adiciona no começo
nomesAleatorios.pop(); //Remove um elemento do final
nomesAleatorios.shift(); //Remove um elemento do começo
console.log(nomesAleatorios);
console.log(nomesAleatorios.length);

// como saber se é um array

console.log(typeof nomesAleatorios);
console.log(nomesAleatorios instanceof Array);
