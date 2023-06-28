

function enviar()
{
    const result = document.querySelector('.result');

    function teste()
    {
        document.body.style.backgroundColor = "rgb(13, 136, 42)";
    }

    function teste2()
    {
        document.body.style.backgroundColor = "rgb(156, 34, 34)";
    }

    const form = document.querySelector('.form');

    function submit(evento)
    {
        evento.preventDefault();

        const peso = form.querySelector('.idade').value;

        n = Math.floor(Math.random() * 10  + 1);
        console.log(n);

        if (peso >= 11 || peso <= 0)
        {
            result.innerHTML = ("Número inválido, somente entre 1 e 10");
            document.body.style.backgroundColor = "";

        } else{
            if(peso == n)
            {
                result.innerHTML = (`Parabéns você acertou o número do bot foi ${n}`);
                teste();
            }
            else
            {
                result.innerHTML =(`Errou! o número era ${n}, tente novamente.`);
                teste2();
            }
        }

        

    }

    form.addEventListener('submit', submit);
}


enviar();
