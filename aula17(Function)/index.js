function soma(x,y)
{
    return x+y;
}

function mensagem()
{
    console.log("Olá, você está exebindo uma função");
}

function saudacao(nome)
{
    console.log(`Olá, ${nome}`);
}

function calc(x, y = 10)
{
    console.log(x*y);
}


// ARROW FUNCTION
const raiz = n =>  n ** 0.5;




console.log(soma(10,5));
mensagem();
saudacao("Pedro");
saudacao("João");
calc(5);

console.log(raiz(9));