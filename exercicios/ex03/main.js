function enviar() {
    const form = document.querySelector('.form');
    const res = document.querySelector('.res');

    function submit(evento) {
        evento.preventDefault();

        const peso = form.querySelector(".peso").value;
        const altura = form.querySelector("#altura").value;
        const fix = imc(peso, altura).toFixed(2);

        function imc(peso, altura) {
            return peso / (altura * altura);
        }
        function green() {
            document.querySelector('.res').style.backgroundColor = "rgb(0, 255, 34)";
            document.querySelector('.res').style.color = "black";
        }
        function red() {
            document.querySelector('.res').style.backgroundColor = "rgb(156, 34, 34)";
            document.querySelector('.res').style.color = "white";
        }

        if (!peso || peso <= 0) {
            red();        
            document.querySelector('.res').style.height = "40px";
             res.innerHTML = "Peso inválido! Digite um valor válido";
             return;
         } 
        if (!altura || altura <= 0) {
            red();
            document.querySelector('.res').style.height = "40px";
            res.innerHTML = "Altura inválida! Digite um valor válido";
            return;
        }
    
        function calcImc() {
            if (fix < 18.5) return "Abaixo do peso";
            if (fix > 18.5 && fix < 24.99) { green(); return `Peso normal` };
            if (fix > 25 && fix < 29.99) return `Está com SOBREPESO`;
            if (fix > 30 && fix < 34.99) return `Está com OBESIDADE GRAU 1`
            if (fix > 35 && fix < 39.99) return `Está com OBESIDADE GRAU 2`
            if (fix > 40) return `Está com OBESIDADE GRAU 3`;

        }
        red();
        res.innerHTML = `Olá. Seu IMC é: ${fix} -- ${calcImc()}`;

    
        document.querySelector('.res').style.height = "40px";

    }
    form.addEventListener('submit', submit);
}

enviar();