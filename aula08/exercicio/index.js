const nome = "Pedro Henrique ";
const sobrenome = "Gonçalves";
const idade = 20.7;
const peso = 90;
const altura = 1.71;
let imc;
imc = peso / (altura * altura);
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
let anoNascimento;
anoNascimento = Math.round(anoAtual - idade);

console.log(`${nome + sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} e seu IMC é de ${imc}`);
console.log(`${nome + sobrenome} nasceu em ${anoNascimento} `);
