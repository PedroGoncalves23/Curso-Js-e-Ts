// TRABALHANDO COM STRINGS

let txt = "Pedro Henrique"
console.log(txt.charAt(2));  // charAt pega o caracter que está na posição passada

console.log(txt.indexOf('Henrique')) // indexOf retorna em qual posição começa a palavra que passei

console.log(txt.replace('Pedro', "João")) // replace troca o texto inserido
console.log(txt.replace(/e/g, "#")) //-- /valor/g é uma flag, nesse caso ele troca todas as partes do texto que tenha o valor passado

console.log(txt.length); // length retorna o tamanho da string

console.log(txt.slice(6, 9))  // slice retorna o texto pegando indice inicial e final passado

console.log(txt.split(' ')) // split separa em um array os valores 

console.log(txt.toUpperCase()) // toUpperCase deixa texto em maiusculo
console.log(txt.toLowerCase()) // toLowerCase deixa texto em minusculo