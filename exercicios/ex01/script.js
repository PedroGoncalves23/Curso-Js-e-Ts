function prog() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');



    const pessoa = [];

    function button(evento){
        evento.preventDefault();
      
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        pessoa.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        })

      //  console.log(nome[pessoa]);

        pessoa.forEach((user) =>
        {
            console.log(user.nome);
            result.innerHTML += `Olá ${user.nome+' ' +user.sobrenome} <br>`;

        })
        pessoa = "";
        

    }


    form.addEventListener('submit', button);
}

prog();