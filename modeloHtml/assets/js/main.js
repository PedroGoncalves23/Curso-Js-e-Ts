

function enviar() {
    const form = document.querySelector('.form');
    const res = document.querySelector('.res');


    function submit(evento) {
        evento.preventDefault();

        const peso = form.querySelector(".peso").value;
        const altura = form.querySelector("#altura").value;

        const imc = peso / (altura * altura);

        const fix = imc.toFixed(2);


        function teste()
        {
            if(fix < 18.5)
            {
                return "Abaixo do peso";
            }
        }

        console.log(teste);
   
        res.innerHTML = `Olá, seu peso é ${teste()}`;


    }


    form.addEventListener('submit', submit);


}

enviar();