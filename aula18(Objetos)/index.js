const pessoa = {
    Nome: 'Pedro',
    Idade: 20,
    Cidade: "SJC"
};

console.log(pessoa);

// VER APENAS UM VALOR ESPECIFICO
console.log(pessoa.Nome);


// CRIAR UM OBJETO COM VARIAS PESSOAS

function criarPessoa(nome, idade, cidade) {
    return {
        nome,
        idade,
        cidade
    };
}

const pesso1 = criarPessoa("Pedro", 20, "SJC");
const pesso2 = criarPessoa("Jonas", 19, "Taubate");
const pesso3 = criarPessoa("Bea", 12, "Jacarei");
const pesso4 = criarPessoa("Vivian", 45, "Caçapava");

console.log(pesso1);
console.log(pesso2.nome);
console.log(pesso3.idade);


// CRIANDO UM OBJETO DENTRO DE OUTRO OBJETO
const cadastro = {
    nome: "Pedro",
    idade: 20,
    endereco: {
        rua: "Rua a",
        n: 10,
        bairro: "Sla"
    }
}

console.log(cadastro.endereco);
