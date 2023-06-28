function exibir()
{
    return "TESTE";
}

const teste = true;

console.log(teste && exibir());  //este ¨&& faz com que ele só mostre a função caso o teste seja true




//
const corUsuario = "red";

// O (||) faz com que, caso o usuario não tenha escolido uma cor, ele vai como black por padrao
const corPadrao = corUsuario || "black";

console.log(corPadrao);