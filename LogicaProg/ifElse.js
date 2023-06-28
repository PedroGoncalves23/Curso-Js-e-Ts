/*
Entre 0 - 11 = Bom dia
Entre 12 - 17 = Boa tarde
Entre 18 - 23 = Boa noite
*/
const hora = 24;

if (hora >= 0 && hora <= 11)
{
    console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite");
} else {
    console.log("Hora não definida");
}


/*
Programa que verifica se é false or true maior idade
*/

let maiorIdade = true;

idade = 18;

if (idade >= 18) {
    maiorIdade = true;
} else
{
    maiorIdade = false;
}

if (maiorIdade) {
    console.log("Pode entrar");
} else
{
    console.log("Não pode entrar");
}