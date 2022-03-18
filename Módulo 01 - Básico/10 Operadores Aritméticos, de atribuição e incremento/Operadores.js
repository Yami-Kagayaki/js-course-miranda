/* Explicação
 * + Adição / concatenação
 *  - Subtração
 *  * Multiplicação
 *  / Divisão
 *  ** Potenciação
 *  % Resto da divisão
 *
 * A precendencia do calculo é igual na mátematica, caso queira muda use "()"
 * Prescedencia:
 * 1° ()
 * 2° **
 * 3° * , / , %
 * 4° - , +
 */

const num1 = 10;
const num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);
console.log(num1 + num2 * num1); //A multiplicação é mais importante então ela vai primeiro
console.log(num1 + num2 * num1); //Alterando a prescendencia
